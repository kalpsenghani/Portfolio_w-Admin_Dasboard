import { Pool } from 'pg';
import bcrypt from "bcrypt";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL
});

async function createAdminUser() {
  try {
    // Generate hash for password 'admin123'
    const password = 'admin123';
    const hashedPassword = await bcrypt.hash(password, 10);
    
    console.log('Creating admin user...');

    // First check if user exists
    const existingUser = await pool.query(
      'SELECT email FROM users WHERE email = $1',
      ['admin@example.com']
    );

    if (existingUser.rows.length > 0) {
      console.log('Admin user already exists');
      return;
    }

    // Insert admin user
    await pool.query(
      `INSERT INTO users (firstname, email, password, github_link)
       VALUES ($1, $2, $3, $4)`,
      ['Admin', 'admin@example.com', hashedPassword, 'https://github.com']
    );

    // Verify the user was created
    const verifyUser = await pool.query(
      'SELECT email FROM users WHERE email = $1',
      ['admin@example.com']
    );

    if (verifyUser.rows.length > 0) {
      console.log('Admin user created successfully');
      console.log('You can now login with:');
      console.log('Email: admin@example.com');
      console.log('Password: admin123');
    } else {
      console.log('Failed to verify user creation');
    }

  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await pool.end();
  }
}

createAdminUser(); 