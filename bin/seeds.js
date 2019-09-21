const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const Pet = require('../models/pet');


mongoose
  .connect(process.env.MONGODB_URI, {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });



  const petsArray = [
    {
      name: 'Fido',
      breed: 'American Bulldog',
      location: 'Miami',
      type: 'Dog',
      sex: 'Male',
      refId: '56H71D',
      birthDate: '09/24/2018',
      image: 'https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/07/American-Bulldog-600x600.jpg'
    },
    {
      name: 'Fluffy',
      breed: 'Mini Australian Shepherd',
      location: 'Hollywood',
      type: 'Dog',
      sex: 'Male',
      refId: '52H93D',
      birthDate: '05/28/2019',
      image: 'http://nebula.wsimg.com/65a9776f17fba147475e7f0342b43838?AccessKeyId=2A05325601B974ABC199&disposition=0&alloworigin=1'
    },
    {
      name: 'Tom',
      breed: 'Ragdoll',
      location: 'Jupiter',
      type: 'Cat',
      sex: 'Male',
      refId: '86G12C',
      birthDate: '10/11/2015',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Ragdoll_from_Gatil_Ragbelas.jpg'
    },
    {
      name: 'Xena',
      breed: 'Persian',
      location: 'Pembroke Pines',
      type: 'Cat',
      sex: 'Female',
      refId: '66G77C',
      birthDate: '05/24/2019',
      image: 'http://2.bp.blogspot.com/-8oxTha6FnjM/Uh9k7gSpoNI/AAAAAAAADCo/8qOjFwfKomo/s1600/054d7111.jpg'
    },
    {
      name: 'Chiki',
      breed: 'Scottish Fold',
      location: 'Hollywood',
      type: 'Cat',
      sex: 'Female',
      refId: '39G02C',
      birthDate: '09/01/2016',
      iamge: 'https://imagevars.gulfnews.com/2018/8/3/1_16a08500d3c.2261003_127640103_16a08500d3c_large.jpg'
    },
    {
      name: 'Felix',
      breed: 'Bengal',
      location: 'Miami',
      type: 'Cat',
      sex: 'Male',
      refId: '51G96C',
      birthDate: '12/24/2014',
      image: 'https://cdn.shopify.com/s/files/1/1369/6411/files/fr72.jpg?v=1521631946'
    },
    {
      name: 'Max',
      breed: 'Siberian Husky',
      location: 'Kendall',
      type: 'Dog',
      sex: 'Male',
      refId: '40H65G',
      birthDate: '04/04/2014',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Black-Magic-Big-Boy.jpg'
    },
    {
      name: 'Grover',
      breed: 'Alaskan Malamute',
      location: 'Hollywood',
      type: 'Dog',
      sex: 'Male',
      refId: '47H39G',
      birthDate: '07/15/2016',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Alaskan_Malamute.jpg'
    }
  ];



let addPets = async () => {
  try {
    // check if there are pets in db prior to reseeding
    Pet.find() ? await Pet.deleteMany() : next();

    // add array of pets to the db
    let petsAdded = await Pet.create(petsArray)

    console.log('it worked --- ', petsAdded);

    // disconnect from mongo once process is complete
    mongoose.disconnect();
  } catch (err) {
    console.log('it didnt work');

    // disconnect from mongo once process is complete
    mongoose.disconnect();
  }

};


addPets();
