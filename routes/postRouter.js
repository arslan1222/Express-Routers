const express = require("express");
const router = express.Router();


// For Posts
// Index - posts
router.get("/", (req, res)=>{
    res.send("Get for posts");
});

// Show - posts
router.get("/:id", (req, res)=>{
    res.send("Get posts id");
});

// Post - posts
router.post("/", (req, res)=>{
    res.send("Post for posts");
});

// Delete post id
router.delete("/:id", (req, res)=>{
    res.send("Delete post id");
});

module.exports = router;