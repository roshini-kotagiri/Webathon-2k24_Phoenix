
const express = require('express');
const app = express();
const { MongoClient } = require('mongodb'); // Corrected import
const path=require('path')
app.use(express.static(path.join(__dirname,'../my-app/build')))
app.use((req,res,next)=>{
  res.sendFile(path.join(__dirname,'../my-app/build/index.html'))
})
// Connect to MongoDB
MongoClient.connect('mongodb://localhost:27017')
  .then(client => {
    const dbobj = client.db('webathon');
    const admincollection = dbobj.collection('admincollection');
    app.set('admincollection', admincollection);
    console.log('Successful connection');
  })
  .catch(err => {
    console.log('Error occurred:', err);
  });

// Mount the admin app
const adminApp = require('./Admin')
app.use('/admin-api', adminApp); // Corrected route

// Start the server
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
