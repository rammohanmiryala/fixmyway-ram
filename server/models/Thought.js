const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema({
  thoughtTitle: {
    type: String,
    required: 'You need to give title!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  postcode:{
    type: Number,
    required: 'You need give postcode!',
  },
  thoughtText: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  maplink:{
    type: String
  },
  state:{
    type: String
  },
  thoughtAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
