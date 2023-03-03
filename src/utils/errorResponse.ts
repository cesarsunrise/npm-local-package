export const errorResponse = (err: Error | string) => {
  let message = "Internal Server Error";
  let rawError: Error | null = null;

  if (err) {
    if (err instanceof Error) {
      message = err.message || message;
      rawError = err;
    } else {
      message = err;
    }
  }
  return {
    message,
    errors: [
      {
        message,
      },
    ],
    error: { ...rawError, stack: rawError?.stack },
  };
};
