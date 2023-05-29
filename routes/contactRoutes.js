const express = require('express');

const router = express.Router();


// Purpose: API endpoints for contacts

// Hello World Test
router.route('/home').get((req, res) => {
  res.send('Hello');
});


// /api/v1/contacts

// Get all contacts
router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Get all contacts' });
});

// Get a single contact
router.route('/:id').get((req, res) => {
  res.status(200).json({ message: `Get single contact: ${req.params.id}` });
});


router.route('/').post((req, res) => {
  res.status(200).json({ message: 'Create contact' });
});

router.route('/:id').put((req, res) => {
  res.status(200).json({ message: `Update contact: ${req.params.id}` });
});


router.route('/:id').delete((req, res) => {
  res.status(200).json({ message: `Delete contact: ${req.params.id}`  });
});


// router.route('/').get((req, res) => {
//   res.status(200).json({ message: 'Test Master API' });
// });



module.exports = router;