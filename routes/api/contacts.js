import express from "express";
import contactsController from "../../controllers/contacts-controllers.js";
import isEmptyBody from "../../middlewars/isEmptyBody.js";
import validateBody from "../../decorators/validateBody.js";
import contactsSchemas from "../../schemas/contacts-schemas.js";

export const router = express.Router();

router.get("/", contactsController.getAll);

router.get("/:contactId", contactsController.getById);

router.post(
  "/",
  isEmptyBody,
  validateBody(contactsSchemas.contactsAddSchema),
  contactsController.add
);

router.put(
  "/:contactId",
  isEmptyBody,
  validateBody(contactsSchemas.contactsAddSchema),
  contactsController.updateById
);

router.delete("/:contactId", contactsController.deleteById);
