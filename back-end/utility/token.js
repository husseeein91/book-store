import jwt from "jsonwebtoken";
import ApiError from "./error.js";
import Status from "./statusCode.js";

const secret = process.env.ACCESS_TOKEN_SECRET || "ay7agaw5las";

const Token = {
  /**
   *
   * @param {String} id
   * @param {String} role
   * @param {String} expireDate expressed in seconds or a string describing a time span zeit/ms. Eg: 60, "2 days", "10h", "7d"
   * @returns {String} token
   */
  createToken: function (id, role, expireDate) {
    return jwt.sign(
      {
        id: id.toString(),
        role: role,
      },
      secret,
      { expiresIn: expireDate }
    );
  },

  /**
   *
   * @param {String} token
   * @returns {Promise}
   */
  verifyToken: function (token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, secret, (err, decodedToken) => {
        if (err) reject(new ApiError(err, Status.BAD_REQUEST));
        resolve(decodedToken);
      });
    });
  },
};

export default Token;
