import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  timestamps: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model('Todo', Schema);
