const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/labMovies'); 

const Celebrity = require('../models/Celebrity');

const celebs = [
    { name: 'Rachel McAdams', occupation: 'actress', catchPhrase: "think there's something really powerful and refreshing about a woman who is unapologetic." },
    { name: 'Angelina Jolie', occupation: 'actress', catchPhrase: "think there's something really powerful and refreshing about a woman who is unapologetic." },
    { name: 'Sia', occupation: 'singer', catchPhrase: "Taken for Granted" }
  ]

Celebrity.collection.drop();

Celebrity.insertMany(celebs)
.then(celeb => {
    console.log("celebs created");
    console.log(celeb);

    mongoose.connection.close();
})
.catch(err => console.error(err));


/* let promise3 = Celebrity.insertMany(celebs); 

Promise.all([promise3])
  .then(values => { 
    console.log("students and cities has been inserted");
    console.log(values);
    
    [ [ { _id: 5a4e462048841e65562c465a, firstname: 'Alice', __v: 0 },
      { _id: 5a4e462048841e65562c465b, firstname: 'Bob', __v: 0 } ],
    [ { _id: 5a4e462048841e65562c465c, name: 'Madrid', __v: 0 },
      { _id: 5a4e462048841e65562c465d, name: 'Barcelone', __v: 0 },
      { _id: 5a4e462048841e65562c465e, name: 'Paris', __v: 0 } ] ]
    
    mongoose.connection.close();
  })
  .catch(err => console.error(err)); */