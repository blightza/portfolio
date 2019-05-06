var express    = require("express"),
    Blogs      = require("../models/blog"),
    router     = express.Router(),
    middleware = require("../middleware")
    
// Showing blogs
router.get("/", function(req, res){
    Blogs.find({}, function(err, allBlogs){
        if(err){
            console.log(err);
        } else {
            res.render("blogs/index", {blogs:allBlogs, currentUser: req.user});
        }
    });
});

// Adding blog

router.post("/", middleware.isLoggedIn, function(req, res){
    var name = req.body.name;
    var description = req.body.description
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newBlogs = {name:name, description:description, author:author};
    Blogs.create(newBlogs, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/blogs");
        }
    });
});

// Showing of new blog form
router.get("/new", middleware.isLoggedIn, function(req, res){
    res.render("blogs/new");
});

// More info of blogs
router.get("/:id", function(req, res){
    Blogs.findById(req.params.id).populate("comments").exec(function(err, foundBlogs){
        if(err){
            console.log(err);
        }  else {
            res.render("blogs/show", {blog: foundBlogs});
        }
    });
});

// Editing of blog

router.get("/:id/edit", middleware.checkBlogOwnership, function(req, res) {
    Blogs.findById(req.params.id, function(err, foundBlogs){
        res.render("blogs/edit", {blog:foundBlogs});
    });
});

// Updating of blog
router.put("/:id", middleware.checkBlogOwnership, function(req, res){
    Blogs.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updateBlogs){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// Deleting of blog
router.delete("/:id", middleware.checkBlogOwnership, function(req, res){
    Blogs.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    });
});

module.exports = router;