const express = require('express');

const router = express.Router();


// Import controller methods
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contactController');


// Purpose: API endpoints for contacts

// // Hello World Test
// router.route('/home').get((req, res) => {
//   res.send('Hello');
// });


// /api/v1/contacts

// Get all contacts
router.route('/').get(getContacts);

// Get a single contact
router.route('/:id').get(getContact);

// Create a contact
router.route('/').post(createContact);

// Update a contact
router.route('/:id').put(updateContact);

// Delete a contact
router.route('/:id').delete(deleteContact);


// router.route('/').get((req, res) => {
//   res.status(200).json({ message: 'Test Master API' });
// });



module.exports = router;
