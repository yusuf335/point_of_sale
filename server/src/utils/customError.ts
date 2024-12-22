export class CustomError extends Error {
  extensions: { code: string; statusCode: number };

  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = "CustomError";
    this.extensions = { code, statusCode };
  }
}
