import express from "express";
import contactsController from "../../controllers/contacts-controllers.js";
import isEmptyBody from "../../middlewars/isEmptyBody.js";
import validateBody from "../../decorators/validateBody.js";
import {
  contactsAddSchema,
  updateFavoriteSchema,
} from "../../models/contacts.js";

export const router = express.Router();

router.get("/", contactsController.getAll);

router.get("/:contactId", contactsController.getById);

router.post(
  "/",
  isEmptyBody,
  validateBody(contactsAddSchema),
  contactsController.add
);

router.put(
  "/:contactId",
  isEmptyBody,
  validateBody(contactsAddSchema),
  contactsController.updateById
);

router.patch(
  "/:contactId/favorite",
  isEmptyBody,
  validateBody(updateFavoriteSchema),
  contactsController.updateFavorite
);

router.delete("/:contactId", contactsController.deleteById);
