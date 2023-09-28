const mongoose = require('mongoose')
const uri = "mongodb+srv://harshitapurwar07:harshita6307@mycluster.q2hmesz.mongodb.net/test?retryWrites=true&w=majority";
const User = require('./models/UserSchema.js')

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});


const user = new User({
    id:1,
    firstName:'Sparsh',
    lastName :'Jhariya',
    email:'sparsh3435@gmail.com'
  })

  user.save().then(result => {
    console.log('Document saved successfully!');
  });

module.export = db;