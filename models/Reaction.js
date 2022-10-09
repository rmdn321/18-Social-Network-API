const moment = require( 'moment/moment');
const { Schema, model } = require('mongoose');

// Schema to create Reaction model
const Reaction = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      auto: true
      
    },
    reactionBody: {
      type: String,
      maxLength: 280,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
   
  }
);

function formatDate(date) {  
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}
module.exports = Reaction;
