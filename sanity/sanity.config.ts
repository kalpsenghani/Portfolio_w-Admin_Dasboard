import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Your Portfolio',

  projectId: process.env.woz7zt3l, // Ensure this matches your Sanity project ID
  dataset: process.env.production, // Make sure the dataset is correctly set in your .env

  plugins: [deskTool(), visionTool()],
})
