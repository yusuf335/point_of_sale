export class CustomError extends Error {
  extensions: Record<string, any>;

  constructor(
    message: string,
    public code: string,
    public statusCode?: number
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.extensions = {
      code,
      statusCode,
    };
  }
}
