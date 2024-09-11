const express = require("express");
const router = express.Router();

// For Users
// Index - users
router.get("/", (req, res)=>{
    res.send("Get for users");
    
});

// Show - users
router.get("/:id", (req, res)=>{
    res.send("Get user id");
});

// Post - users
router.post("/", (req, res)=>{
    res.send("Post for users");
});

// Delete - user
router.delete("/:id", (req, res)=>{
    res.send("Delete users id");
});

module.exports = router;