const express =require ("express");
const { mylogger } = require("./middleware/Logger");
const { createUser, getUsers, getUserById } = require("./controllers/UserController");
const router=express.Router()


router.post("/",createUser);

router.get("/",getUsers)
router.get("/:id",getUserById)
module.exports=router;