const asyncHandler = require('express-async-handler');

//@route GET /api/v1/contacts
//@desc Get all contacts
//@access Public

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get all contacts' });
})

//@route GET /api/v1/contacts/:id
//@desc Get a single contact
//@access Public

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get single contact: ${req.params.id}` });
})

//@route POST /api/v1/contacts
//@desc Create a contact
//@access Public

const createContact = asyncHandler(async (req, res) => {
    console.log(req.body); 
    
    const {name, email, phone, address} = req.body;
    if (!name || !email || !phone || !address){
      res.status(400);
      throw new Error("All fields are required");
    }

  res.status(201).json({ message: 'Create contact' });
});

//@route PUT /api/v1/contacts/:id
//@desc Update a contact
//@access Public

const updateContact = asyncHandler (async (req, res) => {
  res.status(200).json({ message: `Update contact: ${req.params.id}` });
});

//@route DELETE /api/v1/contacts/:id
//@desc Delete a contact
//@access Public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact: ${req.params.id}`  });
})


// Export the functions
module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact
}