import mongoose from 'mongoose'

export const SnippetsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false
  }
}, {
  timestamps: true
})

export const Snippets = mongoose.model('Snippets', SnippetsSchema)
