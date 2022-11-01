const express = require('express');
const router = express.Router();
const { db, firestore } = require('../services/engine');
const collection = firestore.collection;
const onSnapshot = firestore.onSnapshot;
require('../services/index')
router.get('/', async (req, res) => {
  try {
    onSnapshot(collection(db, 'ships'), (snapshot) => {
      let docs = [];
      snapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      res.json(docs);
    });
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const post = new starwars({
    title: req.body.title,
    shortDescrption: req.body.shortDescrption,
    description: req.body.description,
    image: req.body.image,
  });

  try {
    await post.save();
    res.send('Post has being created!!');
  } catch (err) {
    res.send('error eccoured');
  }
});

module.exports = router;
