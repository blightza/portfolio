var express = require("express");
var router = express.Router({mergeParams: true});
var Blogs = require("../models/blog");
var middleware = require("../middleware");
var Comment = require("../models/comment");

//Comments New
router.get("/new", middleware.isLoggedIn, function(req, res){
  Blogs.findById(req.params.id, function(err, blog){
      if(err){
          console.log(err);
      } else {
            res.render("comments/new", {blog: blog});
      }
  });
  
});

//Comments
router.post("/", middleware.isLoggedIn, function(req, res){
    Blogs.findById(req.params.id, function(err, blog){
        if(err){
            console.log(err);
            res.redirect("/blogs");
        } else {
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                } else {
                    //add username and id to comment
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    //save comment
                    comment.save();
                    blog.comments.push(comment);
                    blog.save();
                    res.redirect('/blogs/' + blog._id);
                }
            })
        }
    });
});

// Editing of comments
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
    Comment.findById(req.params.comment_id, function(err, foundComments){
        if(err){
            res.redirect("back");
        } else {
            res.render("comments/edit", {blog_id: req.params.id, comment: foundComments});
        }
    });
});

// Updating of comments
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res){
   Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
       if(err){
           res.redirect("back");
       } else {
           res.redirect("/blogs/" + req.params.id);
       }
   });
});

// Deleting of comment
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
        if(err){
            res.redirect("back");
        } else {
            req.flash("success", "Comment deleted");
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

module.exports = router;