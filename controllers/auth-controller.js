import bcrypt from "bcryptjs";
import path from "path";
import fs from "fs/promises";
import jwt from "jsonwebtoken";
import Jimp from "jimp";
import gravatar from "gravatar";
import ctrlWrapper from "../decorators/ctrlWrapper.js";
import HttpError from "../helpers/HttpError.js";
import { User } from "../models/users.js";
import "dotenv/config";

const { JWT_SECRET } = process.env;

const avatarsPath = path.resolve("public", "avatars");
const pattern = /(.?)@(.?).(.*)/g;

async function registration(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });

  res.status(201).json({
    user: { email: newUser.email, subscription: "starter" },
  });
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Email or password invalid");
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "23h" });
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
    user: {
      email,
      subscription: user.subscription,
    },
  });
}

function getCurrent(req, res) {
  const { email, subscription } = req.user;

  res.json({
    email,
    subscription,
  });
}

async function logout(req, res) {
  const { _id, email } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });
  res.sendStatus(204);
}

async function updateAvatar(req, res) {
  const { _id } = req.user;
  const { path: oldPath, filename } = req.file;
  const newFilename = `${_id}_${filename}`;
  const newPath = path.resolve(avatarsPath, newFilename);

  const resizedAvatar = await Jimp.read(oldPath);
  resizedAvatar.cover(250, 250);
  resizedAvatar.writeAsync(oldPath);

  await fs.rename(oldPath, newPath);
  const avatarURL = path.sep + path.join("avatars", newFilename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
  fs.unlink(oldPath);
}

export default {
  registration: ctrlWrapper(registration),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateAvatar: ctrlWrapper(updateAvatar),
};
