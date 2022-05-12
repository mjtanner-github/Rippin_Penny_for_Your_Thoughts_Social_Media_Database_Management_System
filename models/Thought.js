const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {

    // String. Required. Must be between 1 and 289 characters
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },

    // Date. Set default value to the current timestamp. Use a getter method to format the timestamp on query.
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        let preDateString = date.toISOString().split("T")[0];
        let dateArray = preDateString.split("-");
        return `${Number(dateArray[1])}/${Number(dateArray[2])}/${dateArray[0]}`;}
    },

    // String. Reqired.
    username: {
      type: String,
      required: true,
    },

    // Array of nested documents created with the reactionSchema.
    reactions:[reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
