import { Schema, model } from "mongoose";
import Joi from "joi";

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

export const Contact = model("contact", contactSchema);

export const contactsAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required name field`,
  }),
  email: Joi.string().required().messages({
    "any.required": `missing required email field`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `missing required phone field`,
  }),
  favorite: Joi.boolean(),
});

export const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": `missing field favorite`,
  }),
});

// import fs from "fs/promises";
// import { nanoid } from "nanoid";
// import path from "path";

// const contactsPath = path.resolve("models", "contacts.json");

// function updateContactList(listOfContacts) {
//   fs.writeFile(contactsPath, JSON.stringify(listOfContacts, null, 2));
// }

// async function listContacts() {
//   const listOfContacts = await fs.readFile(contactsPath);
//   return JSON.parse(listOfContacts);
// }

// async function getContactById(contactId) {
//   const listOfContacts = await listContacts();
//   const contact = listOfContacts.find((item) => item.id === contactId);
//   if (!contact) {
//     return null;
//   }
//   return contact;
// }

// async function removeContact(contactId) {
//   const listOfContacts = await listContacts();
//   const indexOf = listOfContacts.findIndex((item) => item.id === contactId);
//   if (indexOf === -1) {
//     return null;
//   }
//   const [result] = listOfContacts.splice(indexOf, 1);
//   await updateContactList(listOfContacts);
//   return result;
// }

// async function addContact({ name, email, phone }) {
//   const listOfContacts = await listContacts();
//   const newContact = {
//     id: nanoid(),
//     name,
//     email,
//     phone,
//   };
//   listOfContacts.push(newContact);
//   await updateContactList(listOfContacts);
//   return newContact;
// }

// async function updateContact(contactId, body) {
//   const listOfContacts = await listContacts();
//   const index = listOfContacts.findIndex((item) => item.id === contactId);
//   if (index === -1) {
//     return null;
//   }
//   body.id = contactId;
//   listOfContacts[index] = body;
//   await updateContactList(listOfContacts);
//   return listOfContacts[index];
// }

// export default {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// };
