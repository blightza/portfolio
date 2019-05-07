var Comment = require("../models/comment")
var Blog = require("../models/blog")

var middlewareObj = {};

middlewareObj.checkBlogOwnership = function(req, res, next){
    if(req.isAuthenticated()){
            Blog.findById(req.params.id, function(err, foundBlog){
               if(err){
                   req.flash("error", "Review not found");
                   res.redirect("back");
                } else {
                 if(foundBlog.author.id.equals(req.user._id)){
                     next();
                 } else {
                     res.redirect("back");
                 }
       }
   });
     } else {
         res.redirect("back");
     }
}

middlewareObj.checkCommentOwnership = function(req, res, next){
    if(req.isAuthenticated()){
            Comment.findById(req.params.comment_id, function(err, foundComment){
               if(err){
                   res.redirect("back");
                } else {
                 //does user own the comment?
                 if(foundComment.author.id.equals(req.user._id)){
                     next();
                 } else {
                     res.redirect("back");
                 }
       }
   });
     } else {
         res.redirect("back");
     }
}

middlewareObj.isLoggedIn = function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be signed in to do that")
    res.redirect("/login")
};
  

module.exports = middlewareObj