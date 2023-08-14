import express from "express";
import contactsController from "../../controllers/contacts-controllers.js";
import isEmptyBody from "../../middlewars/isEmptyBody.js";
import validateBody from "../../decorators/validateBody.js";
import {
  contactsAddSchema,
  updateFavoriteSchema,
} from "../../models/contacts.js";
import authenticate from "../../middlewars/authenticate.js";
import upload from "../../middlewars/upload.js";

export const router = express.Router();

router.use(authenticate);

router.get("/", contactsController.getAll);

router.get("/:contactId", contactsController.getById);

router.post(
  "/",
  upload.single("avatar"),
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
