import express from "express";
import { 
    updatedUser,
     deleteUser, 
     getUser,
     getAllUser,   
    } from "../controller/users.js"
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router()

router.get("/checkauthentication", verifyToken,(req,res,next) => {
    res.send("hello user, you are logged in")
})
router.put('/:id', updatedUser)
router.delete('/:id', deleteUser)
router.get('/find/:id', getUser)
router.get('/', getAllUser)



export default router;