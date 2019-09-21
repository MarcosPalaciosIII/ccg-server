const express = require('express');
const router  = express.Router();
const Pet = require('../../models/pet');


router.get('/', async (req, res, next) => {
  try{
      // wait for all pets to be found before sending info to client
      let allPets = await Pet.find();
      res.status(200).json(allPets);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/details/:petId', async (req, res, next) => {
  try {
    let petFromDb = await Pet.findById(req.params.petId);
    res.status(200).json(petFromDb)
  } catch(err) {
    res.status(400).json(err)
  }
})

router.post('/add', async (req, res, next) => {
  try {
    let newPet = await Pet.create(req.body)
    res.status(200).json(newPet)
  } catch(err) {
    res.status(400).json(err)
  }
})



module.exports = router;
