import bcrypt from "bcrypt";
import { CustomError } from "../customError";

/**
 * Generate a salt asynchronously using the bcrypt.genSalt() function.
 * This salt will be unique for each password hash, enhancing security.
 **/

const salt = async (): Promise<string | CustomError> => {
  try {
    const salt = await bcrypt.genSalt(
      parseInt(process.env.BCRYPT_SALT_ROUNDS, 10)
    );
    return salt;
  } catch (err) {
    console.error(err);
    throw new CustomError(
      "Error generating salt",
      "INTERNAL_SERVER_ERROR",
      500
    );
  }
};

// Once the salt is generated, we combine it with the user's password to compute the hash using the bcrypt.hash() function.
export const hashPassword = async (
  password: string
): Promise<string | CustomError> => {
  try {
    const saltResult = await salt();
    if (saltResult instanceof CustomError) {
      throw saltResult;
    }
    const hashedPassword = await bcrypt.hash(password, saltResult);
    return hashedPassword;
  } catch (err) {
    console.error(err);
    throw new CustomError(
      "Error hashing password",
      "INTERNAL_SERVER_ERROR",
      500
    );
  }
};

export const comparePassword = async (
  userInputPassword: string,
  storedHashedPassword: string
): Promise<boolean | CustomError> => {
  try {
    const compare = await bcrypt.compare(
      userInputPassword,
      storedHashedPassword
    );

    return compare;
  } catch (err) {
    console.error(err);
    throw new CustomError(
      "Error comparing password",
      "INTERNAL_SERVER_ERROR",
      500
    );
  }
};
