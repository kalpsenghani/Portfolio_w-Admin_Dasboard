import NextAuth, { NextAuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { getUserCredentials } from "./lib/data";
import { signInSchema } from "./lib/validate";
import { ZodError } from "zod";
import { UserCredentials } from "./lib/definitions";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter your email" },
        password: { label: "Password", type: "password", placeholder: "Enter your password" },
      },
      async authorize(credentials) {
        try {
          console.log('Attempting to authorize user...');
          
          const { email, password } = await signInSchema.parseAsync(credentials);
          console.log('Email validation passed for:', email);
          
          const user: UserCredentials | null = await getUserCredentials(email);
          
          if (!user) {
            console.log('No user found with email:', email);
            return null;
          }
          
          console.log('User found, checking password...');
          const isValidPassword = await bcrypt.compare(password, user.password);
          
          if (!isValidPassword) {
            console.log('Invalid password for user:', email);
            return null;
          }
          
          console.log('Login successful for:', email);
          return {
            id: email,
            email: user.email,
          };
        } catch (error) {
          if (error instanceof ZodError) {
            console.error("Validation error:", error.errors);
          } else {
            console.error("Authorization error:", error);
          }
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email as string;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  secret: process.env.AUTH_SECRET,
  debug: true, // Enable debug messages
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
