import expressAsyncHandler from "express-async-handler";
import jsonwebtoken from "jsonwebtoken";

const validateToken = expressAsyncHandler(async (req, res, next) => {
  let token;
  const authHeader = req.get("Authorization");

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];

    jsonwebtoken.verify(token, "hamza", (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized");
      }

      // attach decoded info to req
      req.user = decoded.user;
    //   console.log(decoded, "decoded...........");
      next(); // ✅ important to continue request flow
    });
  } else {
    res.status(401);
    throw new Error("No token provided");
  }
  if(!token){
    res.status(401);
    throw new Error("user is not authorized or missig the token")
  }
});

export default validateToken;
