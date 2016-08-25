const express = require('express');
const router = express.Router();

const Animal = require('../models/animal');

// base url: /api/animals

// PUT /api/animals/57ae7455a7657a575ae/toggle

router.put('/:id/toggle', (req, res) => {

  Animal.toggle(req.params.id, (err, savedAnimal) => {
    // find animal by id
    // toggle isComplete
    // save the animal
    // pass the updated animal into the callback
    if(err) {
      return res.status(400).send(err);
    }

    Animal.find({}, (err, animals) => {
      res.status(err ? 400 : 200).send(err || animals);
    });
  });
})

router.route('/')
  .get((req, res) => {
    Animal.find({}, (err, animals) => {
      res.status(err ? 400 : 200).send(err || animals);
    });
  })
  .post((req, res) => {
    Animal.create(req.body, (err, newAnimal) => {
      res.status(err ? 400 : 200).send(err || newAnimal);
    });
  });

router.route('/:id')
  .get((req, res) => {
    Animal.findById(req.params.id, (err, animal) => {
      res.status(err ? 400 : 200).send(err || animal);
    });
  })
  .delete((req, res) => {
    Animal.findByIdAndRemove(req.params.id, err => {
      res.status(err ? 400 : 200).send(err);
    })
  })
  .put((req, res) => {
    Animal.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, animal) => {
      if(err) {
        return res.status(400).send(err);
      }

      Animal.find({}, (err, animals) => {
        res.status(err ? 400 : 200).send(err || animals);
      });
    });
  })

module.exports = router;
