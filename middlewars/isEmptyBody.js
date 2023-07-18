import { HttpError } from "../helpers/index.js";

const isEmptyBody = (req, res, next) => {
  const MESSAGE = `missing fields ${req.method === "PATCH" ? "favorite" : ""}`;
  const { length } = Object.keys(req.body);
  if (!length) {
    next(HttpError(400, MESSAGE));
  }
  next();
};

export default isEmptyBody;
