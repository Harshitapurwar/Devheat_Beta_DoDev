const mongoose = require('mongoose')
const uri = "mongodb+srv://harshitapurwar07:harshita6307@mycluster.q2hmesz.mongodb.net/?retryWrites=true&w=majority";


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

module.export = db;