export const createError = (message?: string) => ({
  trID: new Date().getTime().toString(),
  message,
});
