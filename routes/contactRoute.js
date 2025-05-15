import express from "express";
const router = express.Router();
import { createContact, deleteContact, getContacts, singleContact, updateContact } from '../controllers/contactControllers.js';
import validateToken from "../middlewear/validateTokenHandler.js";





// contacts api routess
router.use(validateToken);
router.route("/contact").get(getContacts);
router.route("/contact/:id").get(singleContact);
router.route("/contact").post(createContact);
router.route("/contact/:id").put(updateContact);
router.route("/contact/:id").delete(deleteContact);


export default router;
