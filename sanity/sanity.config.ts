import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Your Portfolio',

  projectId: process.env.woz7zt3l || 'woz7zt3l', // Provide a default value
  dataset: process.env.production || 'production', // Provide a default value

  plugins: [deskTool(), visionTool()],
})
