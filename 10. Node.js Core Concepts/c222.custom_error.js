//  Bonus: Custom Error Class (Optional)
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

return next(new AppError("Not found", 404));

// Practice this
