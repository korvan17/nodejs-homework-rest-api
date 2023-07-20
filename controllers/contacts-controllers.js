import express from "express";
import { Contact } from "../models/contacts.js";
import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";
export const router = express.Router();

const messageNotFound = "`Not found`";

async function getAll(req, res) {
  const result = await Contact.find({});
  res.json(result);
}

async function getById(req, res) {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, messageNotFound);
  }
  res.json(result);
}

async function add(req, res) {
  console.log(req.body);
  const result = await Contact.create(req.body);
  res.status(201).json(result);
}

async function updateById(req, res) {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, messageNotFound);
  }
  res.json(result);
}

async function updateFavorite(req, res) {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, messageNotFound);
  }
  res.json(result);
}

async function deleteById(req, res) {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, messageNotFound);
  }

  res.json({
    message: "Delete success",
  });
}

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  deleteById: ctrlWrapper(deleteById),
  updateFavorite: ctrlWrapper(updateFavorite),
};
