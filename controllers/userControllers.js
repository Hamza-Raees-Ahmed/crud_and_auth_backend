import bcrypt from "bcrypt";
import expressAsyncHandler from "express-async-handler";
import jsonwebtoken from "jsonwebtoken";
import User from "../models/userModel.js";


// des register post
// route POST /contact
// access public 
const registerHandler = expressAsyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username, password, email)
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("all fileds are mandatory")
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("the user is alreday register");
    }

    //   hashpassword
    const hashPass = await bcrypt.hash(password, 10)
    //   console.log(hashPass,"hashpasss>..........")

    const user = await User.create({
        username, email,
        password: hashPass
    });
    if (user) {
        res.status(200).json({
            _id: user.id,
            email: user.email
        })
    } else {
        res.status(400);
        throw new Error("data in not valid")
    }
    console.log(user)

});
// des login post
// route POST /contact
// access public 
const loginHandler = expressAsyncHandler(async (req, res) => {


    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("all fields are mandatory")
    }

    const user = await User.findOne({ email });
    //   console.log(user,"user...................")
    if (user && (await bcrypt.compare(password, user.password))) {

        const accesToken = jsonwebtoken.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            },
        },

            'hamza',
            { expiresIn: "20m" }
        );
        res.status(200).json({
            accesToken
        })


    } else {
        res.status(401);
        throw new Error("email and passs word is not valid")
    }



});
// des current user  info
// route GET /contact
// access private
const currentUserHandler = expressAsyncHandler(async (req, res) => {

    res.status(200).json(req.user)

});

export { currentUserHandler, loginHandler, registerHandler };
