const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true.valueOf,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      unique: true,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thoughtSchema'
      }
    ],
    friends:  [
      {
        type: Schema.Types.ObjectId,
        ref: 'userSchema'
      }
    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function(){
  return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;
