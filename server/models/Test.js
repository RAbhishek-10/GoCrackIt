import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  options: [{
    text: String,
    isCorrect: Boolean
  }],
  explanation: String,
  marks: {
    type: Number,
    default: 1
  }
});

const testSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['SSC', 'Banking', 'Railways', 'StatePSC', 'Teaching']
  },
  duration: {
    type: Number, // in minutes
    required: true
  },
  totalMarks: {
    type: Number,
    required: true
  },
  questions: [questionSchema],
  startTime: Date,
  endTime: Date,
  isActive: {
    type: Boolean,
    default: true
  },
  participants: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    score: Number,
    answers: [{
      question: Number,
      selectedOption: Number,
      isCorrect: Boolean,
      timeTaken: Number
    }],
    startTime: Date,
    endTime: Date,
    completed: {
      type: Boolean,
      default: false
    }
  }]
}, {
  timestamps: true
});

export default mongoose.model('Test', testSchema);