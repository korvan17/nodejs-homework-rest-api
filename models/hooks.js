export function handleSaveError(error, data, next) {
  const { code, name } = error;
  error.status = 400;
  next();
}
