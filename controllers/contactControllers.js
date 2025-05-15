 import expressAsyncHandler from "express-async-handler";
 import Contact from "../models/contactModel.js"
// des get all contacts
// route GET /contact
// access private 

const getContacts = expressAsyncHandler(async(req, res) => {
    const contact = await Contact.find( {
        user_id: req.user_id
    }) ;
    res.status(200).json({
       contact
    })
  
});
// des post single contact
// route POST /contact
// access private 

const createContact =expressAsyncHandler( async (req, res) => {
    // console.log(req.body);
    const { name, email, contactNo } = req.body;
    if (!name || !email || !contactNo) {
        res.status(400);
        throw new Error("alll fields are mandatory");

    }
    const createContact = await  Contact.create({
        name, email, contactNo,
        user_id : req.user.id
    })
    // console.log(createContact ,"created contcta adadtataaa")
    res.status(201).json({
       createContact
    })
});


// des get single contact
// route get /contact/id
// access private 
const singleContact = expressAsyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found")

    }
    res.status(200).json({
        contact
    })
});

// des update single contact
// route put /contact/id
// access private 
const updateContact =expressAsyncHandler(async(req, res) => {
      const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
        
    }
    const updatedContact =  await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.status(200).json({
        updatedContact
    })
});
// des delete single contact
// route DELETE /contact/id
// access private 
const deleteContact =expressAsyncHandler( async (req, res) => {
     const contact = await Contact.findByIdAndDelete(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found with this id")

    }
    res.status(200).json({
       contact
    })
});


export { createContact, deleteContact, getContacts, singleContact, updateContact };
