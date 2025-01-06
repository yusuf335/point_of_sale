export const decodeJwt = (token: string) => {
  try {
    const [headerB64, payloadB64] = token.split(".");
    const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString());
    return payload;
  } catch (error) {
    throw new Error("Invalid token format");
  }
};
