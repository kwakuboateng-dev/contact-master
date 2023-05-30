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

// /api/v1/contacts

router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;
