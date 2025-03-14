'use client';

import LoginForm from "@/app/ui/login-form";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-white p-6 dark:bg-gray-800">
          <LoginForm />
        </div>
      </div>
    </main>
  );
} 