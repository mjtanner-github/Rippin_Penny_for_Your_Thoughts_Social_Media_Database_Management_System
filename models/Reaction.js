const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {

    // Use Mongoose's ObjectId data type. Default value is set to a new ObjectId.
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    // String. Required. 280 character maximum.
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },

    // Sting. Required.
    username: {
      type: String,
      required: true,
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
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
