-- Create users table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    age INTEGER,
    short_description TEXT,
    long_description TEXT,
    picture_url TEXT,
    github_link TEXT,
    linkedin_link TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert admin user with bcrypt hashed password 'admin123'
-- The password hash below is for 'admin123' -
INSERT INTO users (firstname, email, password, github_link)
VALUES (
    'Admin',
    'admin@example.com',
    '$2b$10$YourHashedPasswordHere',
    'https://github.com'
)
ON CONFLICT (email) DO NOTHING; 