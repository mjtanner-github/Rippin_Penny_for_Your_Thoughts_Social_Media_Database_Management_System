const { default: mongoose } = require('mongoose');
const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop User collection
  await User.deleteMany({});

  // Drop Thought collection
  await Thought.deleteMany({});
  
  // Create array to hold users for later thoght and friend population.
  let users = [];

  // Put 25 users into user array
  for (let i = 0; i < 25; i++) {
    const username = getRandomName();
    const email = `sample_email${i}@email.com`;    
    const obj = {username,email};
    await User.collection.insertOne(obj);
    //Get back the obj._id and save. 
    const objId = obj._id.valueOf();
    users.push({
      username,
      objId
    });  
  }

  // For every user, populate with random thoughts and friends.
  for (let i = 0; i < users.length; i++) {
    let notThese = [i];
    // Random number of friends, uniform from 25.
    let jMax = Math.floor(Math.random() * 25);
    for(let j = 0; j < jMax; j++){    
      let target = -1;
      // Make sure not to get the same twice. 
      do{
        target = (i + Math.floor(Math.random() * users.length)) % users.length;        
      }
      while(notThese.includes(target));
      notThese.push(target);
      // Get the user id back from the user array.
      let objId = users[i].objId.valueOf();
      let friendId = users[target].objId.valueOf();
      // Push this friend onto this user's friend array.
      await User.findOneAndUpdate({_id:objId},{$push: {friends: friendId}});  
    }
    // Repeat the process for thoughts; uniform random from 10.
    jMax = Math.floor(Math.random() * 10);
    for(let j = 0; j < jMax; j++){
      // Get all the values for a thought object.    
      const thoughtText = getRandomThought();
      const username = users[i].username;
      const userId = users[i].objId;
      // Constructu the thought object.      
      const obj = {thoughtText,username,userId};
      // Push the thought.
      await Thought.collection.insertOne(obj);
      const objId = obj._id.valueOf();
      await User.findOneAndUpdate({_id:userId},{$push: {thoughts: objId}});
      // Load a uniform random from 10 number of reactions.
      let kMax = Math.floor(Math.random() * 10);
      for(let k = 0; k < kMax; k++){
        // Get all the values for a reaction object.
        const reactionId = mongoose.Types.ObjectId(); 
        const reactionBody = getRandomThought();
        const userame = getRandomName();
        // Push this reaction onto this thought's reaction array.
        await Thought.findOneAndUpdate({_id:objId},{$push: {reactions: {reactionId:reactionId, reactionBody:reactionBody, username:username}}});
      }
    }
  }
  // Log out
  console.info('Seeding complete');
  process.exit(0);
});
