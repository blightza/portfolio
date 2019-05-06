{"filter":false,"title":"comment.js","tooltip":"/routes/comment.js","undoManager":{"mark":53,"position":53,"stack":[[{"start":{"row":0,"column":0},"end":{"row":86,"column":24},"action":"insert","lines":["var express = require(\"express\");","var router = express.Router({mergeParams: true});","var Campground = require(\"../models/campground\");","var middleware = require(\"../middleware\");","var Comment = require(\"../models/comment\");","","//Comments New","router.get(\"/new\", middleware.isLoggedIn, function(req, res){","  //find campgrond by ID","  Campground.findById(req.params.id, function(err, campground){","      if(err){","          console.log(err);","      } else {","            res.render(\"comments/new\", {campground: campground});","      }","  });","  ","});","","//Comments","router.post(\"/\", middleware.isLoggedIn, function(req, res){","    //lookup campground using ID","    Campground.findById(req.params.id, function(err, campground){","        if(err){","            console.log(err);","            res.redirect(\"/campgrounds\");","        } else {","            Comment.create(req.body.comment, function(err, comment){","                if(err){","                    req.flash(\"error\", \"Something went wrong!\");","                    console.log(err);","                } else {","                    //add username and id to comment","                    comment.author.id = req.user._id;","                    comment.author.username = req.user.username;","                    //save comment","                    comment.save();","                    campground.comments.push(comment);","                    campground.save();","                    req.flash(\"success\", \"Successfully added comment\");","                    res.redirect('/campgrounds/' + campground._id);","                }","            })","        }","    });","});","","// COMMENT EDIT","router.get(\"/:comment_id/edit\", middleware.checkCommentOwnership, function(req, res){","    Comment.findById(req.params.comment_id, function(err, foundComments){","        if(err){","            res.redirect(\"back\");","        } else {","            res.render(\"comments/edit\", {campground_id: req.params.id, comment: foundComments});","        }","    });","});","","//COMMENT UPDATE","router.put(\"/:comment_id\", middleware.checkCommentOwnership, function(req, res){","   Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){","       if(err){","           res.redirect(\"back\");","       } else {","           res.redirect(\"/campgrounds/\" + req.params.id);","       }","   });","});","","//COMMENT DESTROY ROUTE","router.delete(\"/:comment_id\", middleware.checkCommentOwnership, function(req, res){","    //findByIdAndRemove","    Comment.findByIdAndRemove(req.params.comment_id, function(err){","        if(err){","            res.redirect(\"back\");","        } else {","            req.flash(\"success\", \"Comment deleted\");","            res.redirect(\"/campgrounds/\" + req.params.id);","        }","    })","})","","","//Middleware","","","module.exports = router;"],"id":1}],[{"start":{"row":83,"column":0},"end":{"row":83,"column":12},"action":"remove","lines":["//Middleware"],"id":2}],[{"start":{"row":80,"column":2},"end":{"row":80,"column":3},"action":"insert","lines":[";"],"id":3}],[{"start":{"row":79,"column":6},"end":{"row":79,"column":7},"action":"insert","lines":[";"],"id":4}],[{"start":{"row":77,"column":27},"end":{"row":77,"column":38},"action":"remove","lines":["campgrounds"],"id":5},{"start":{"row":77,"column":27},"end":{"row":77,"column":28},"action":"insert","lines":["b"]},{"start":{"row":77,"column":28},"end":{"row":77,"column":29},"action":"insert","lines":["l"]},{"start":{"row":77,"column":29},"end":{"row":77,"column":30},"action":"insert","lines":["o"]},{"start":{"row":77,"column":30},"end":{"row":77,"column":31},"action":"insert","lines":["g"]},{"start":{"row":77,"column":31},"end":{"row":77,"column":32},"action":"insert","lines":["s"]}],[{"start":{"row":70,"column":29},"end":{"row":70,"column":62},"action":"remove","lines":[" middleware.checkCommentOwnership"],"id":6}],[{"start":{"row":70,"column":29},"end":{"row":70,"column":30},"action":"remove","lines":[","],"id":7}],[{"start":{"row":70,"column":29},"end":{"row":70,"column":30},"action":"remove","lines":[" "],"id":8}],[{"start":{"row":70,"column":29},"end":{"row":70,"column":30},"action":"insert","lines":[" "],"id":9}],[{"start":{"row":64,"column":26},"end":{"row":64,"column":37},"action":"remove","lines":["campgrounds"],"id":10},{"start":{"row":64,"column":26},"end":{"row":64,"column":27},"action":"insert","lines":["b"]},{"start":{"row":64,"column":27},"end":{"row":64,"column":28},"action":"insert","lines":["l"]},{"start":{"row":64,"column":28},"end":{"row":64,"column":29},"action":"insert","lines":["o"]},{"start":{"row":64,"column":29},"end":{"row":64,"column":30},"action":"insert","lines":["g"]},{"start":{"row":64,"column":30},"end":{"row":64,"column":31},"action":"insert","lines":["s"]}],[{"start":{"row":59,"column":27},"end":{"row":59,"column":61},"action":"remove","lines":["middleware.checkCommentOwnership, "],"id":11}],[{"start":{"row":48,"column":32},"end":{"row":48,"column":66},"action":"remove","lines":["middleware.checkCommentOwnership, "],"id":12}],[{"start":{"row":40,"column":35},"end":{"row":40,"column":46},"action":"remove","lines":["campgrounds"],"id":13},{"start":{"row":40,"column":35},"end":{"row":40,"column":36},"action":"insert","lines":["b"]},{"start":{"row":40,"column":36},"end":{"row":40,"column":37},"action":"insert","lines":["l"]}],[{"start":{"row":40,"column":37},"end":{"row":40,"column":38},"action":"insert","lines":["o"],"id":14},{"start":{"row":40,"column":38},"end":{"row":40,"column":39},"action":"insert","lines":["g"]},{"start":{"row":40,"column":39},"end":{"row":40,"column":40},"action":"insert","lines":["s"]}],[{"start":{"row":39,"column":0},"end":{"row":39,"column":71},"action":"remove","lines":["                    req.flash(\"success\", \"Successfully added comment\");"],"id":15},{"start":{"row":38,"column":38},"end":{"row":39,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":25,"column":27},"end":{"row":25,"column":38},"action":"remove","lines":["campgrounds"],"id":16},{"start":{"row":25,"column":27},"end":{"row":25,"column":28},"action":"insert","lines":["b"]},{"start":{"row":25,"column":28},"end":{"row":25,"column":29},"action":"insert","lines":["l"]},{"start":{"row":25,"column":29},"end":{"row":25,"column":30},"action":"insert","lines":["o"]},{"start":{"row":25,"column":30},"end":{"row":25,"column":31},"action":"insert","lines":["g"]},{"start":{"row":25,"column":31},"end":{"row":25,"column":32},"action":"insert","lines":["s"]}],[{"start":{"row":21,"column":0},"end":{"row":21,"column":32},"action":"remove","lines":["    //lookup campground using ID"],"id":17},{"start":{"row":20,"column":59},"end":{"row":21,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":14},"action":"remove","lines":["Campground"],"id":18},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["B"]},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["l"]},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["o"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["g"]},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["s"]}],[{"start":{"row":2,"column":31},"end":{"row":2,"column":41},"action":"remove","lines":["campground"],"id":19},{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"insert","lines":["b"]},{"start":{"row":2,"column":32},"end":{"row":2,"column":33},"action":"insert","lines":["l"]},{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"insert","lines":["o"]},{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"insert","lines":["g"]}],[{"start":{"row":21,"column":53},"end":{"row":21,"column":63},"action":"remove","lines":["campground"],"id":20},{"start":{"row":21,"column":53},"end":{"row":21,"column":54},"action":"insert","lines":["b"]},{"start":{"row":21,"column":54},"end":{"row":21,"column":55},"action":"insert","lines":["l"]},{"start":{"row":21,"column":55},"end":{"row":21,"column":56},"action":"insert","lines":["o"]},{"start":{"row":21,"column":56},"end":{"row":21,"column":57},"action":"insert","lines":["g"]}],[{"start":{"row":21,"column":4},"end":{"row":21,"column":14},"action":"remove","lines":["Campground"],"id":21},{"start":{"row":21,"column":4},"end":{"row":21,"column":5},"action":"insert","lines":["B"]},{"start":{"row":21,"column":5},"end":{"row":21,"column":6},"action":"insert","lines":["l"]},{"start":{"row":21,"column":6},"end":{"row":21,"column":7},"action":"insert","lines":["o"]},{"start":{"row":21,"column":7},"end":{"row":21,"column":8},"action":"insert","lines":["g"]},{"start":{"row":21,"column":8},"end":{"row":21,"column":9},"action":"insert","lines":["s"]}],[{"start":{"row":9,"column":2},"end":{"row":9,"column":12},"action":"remove","lines":["Campground"],"id":22},{"start":{"row":9,"column":2},"end":{"row":9,"column":3},"action":"insert","lines":["B"]},{"start":{"row":9,"column":3},"end":{"row":9,"column":4},"action":"insert","lines":["l"]},{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"insert","lines":["o"]},{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"insert","lines":["g"]},{"start":{"row":9,"column":6},"end":{"row":9,"column":7},"action":"insert","lines":["s"]}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":24},"action":"remove","lines":["  //find campgrond by ID"],"id":23},{"start":{"row":7,"column":61},"end":{"row":8,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":8,"column":47},"end":{"row":8,"column":56},"action":"remove","lines":["ampground"],"id":24},{"start":{"row":8,"column":47},"end":{"row":8,"column":48},"action":"insert","lines":["b"]},{"start":{"row":8,"column":48},"end":{"row":8,"column":49},"action":"insert","lines":["l"]},{"start":{"row":8,"column":49},"end":{"row":8,"column":50},"action":"insert","lines":["o"]},{"start":{"row":8,"column":50},"end":{"row":8,"column":51},"action":"insert","lines":["g"]}],[{"start":{"row":8,"column":46},"end":{"row":8,"column":47},"action":"remove","lines":["c"],"id":25}],[{"start":{"row":12,"column":52},"end":{"row":12,"column":62},"action":"remove","lines":["campground"],"id":26},{"start":{"row":12,"column":52},"end":{"row":12,"column":53},"action":"insert","lines":["b"]},{"start":{"row":12,"column":53},"end":{"row":12,"column":54},"action":"insert","lines":["l"]},{"start":{"row":12,"column":54},"end":{"row":12,"column":55},"action":"insert","lines":["o"]},{"start":{"row":12,"column":55},"end":{"row":12,"column":56},"action":"insert","lines":["g"]}],[{"start":{"row":12,"column":40},"end":{"row":12,"column":50},"action":"remove","lines":["campground"],"id":27},{"start":{"row":12,"column":40},"end":{"row":12,"column":41},"action":"insert","lines":["b"]},{"start":{"row":12,"column":41},"end":{"row":12,"column":42},"action":"insert","lines":["l"]},{"start":{"row":12,"column":42},"end":{"row":12,"column":43},"action":"insert","lines":["o"]},{"start":{"row":12,"column":43},"end":{"row":12,"column":44},"action":"insert","lines":["g"]}],[{"start":{"row":27,"column":0},"end":{"row":27,"column":64},"action":"remove","lines":["                    req.flash(\"error\", \"Something went wrong!\");"],"id":28},{"start":{"row":26,"column":24},"end":{"row":27,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":34,"column":20},"end":{"row":34,"column":30},"action":"remove","lines":["campground"],"id":29},{"start":{"row":34,"column":20},"end":{"row":34,"column":21},"action":"insert","lines":["b"]},{"start":{"row":34,"column":21},"end":{"row":34,"column":22},"action":"insert","lines":["l"]},{"start":{"row":34,"column":22},"end":{"row":34,"column":23},"action":"insert","lines":["o"]},{"start":{"row":34,"column":23},"end":{"row":34,"column":24},"action":"insert","lines":["g"]}],[{"start":{"row":36,"column":45},"end":{"row":36,"column":55},"action":"remove","lines":["campground"],"id":30},{"start":{"row":36,"column":45},"end":{"row":36,"column":46},"action":"insert","lines":["b"]},{"start":{"row":36,"column":46},"end":{"row":36,"column":47},"action":"insert","lines":["l"]},{"start":{"row":36,"column":47},"end":{"row":36,"column":48},"action":"insert","lines":["o"]},{"start":{"row":36,"column":48},"end":{"row":36,"column":49},"action":"insert","lines":["g"]}],[{"start":{"row":35,"column":20},"end":{"row":35,"column":30},"action":"remove","lines":["campground"],"id":31},{"start":{"row":35,"column":20},"end":{"row":35,"column":21},"action":"insert","lines":["b"]},{"start":{"row":35,"column":21},"end":{"row":35,"column":22},"action":"insert","lines":["l"]},{"start":{"row":35,"column":22},"end":{"row":35,"column":23},"action":"insert","lines":["o"]},{"start":{"row":35,"column":23},"end":{"row":35,"column":24},"action":"insert","lines":["g"]}],[{"start":{"row":78,"column":0},"end":{"row":79,"column":0},"action":"remove","lines":["",""],"id":32},{"start":{"row":77,"column":0},"end":{"row":78,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":77,"column":0},"end":{"row":78,"column":0},"action":"remove","lines":["",""],"id":33}],[{"start":{"row":77,"column":0},"end":{"row":78,"column":0},"action":"remove","lines":["",""],"id":34}],[{"start":{"row":67,"column":0},"end":{"row":67,"column":23},"action":"remove","lines":["    //findByIdAndRemove"],"id":35},{"start":{"row":66,"column":49},"end":{"row":67,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":44,"column":31},"end":{"row":44,"column":32},"action":"insert","lines":[" "],"id":36},{"start":{"row":44,"column":32},"end":{"row":44,"column":33},"action":"insert","lines":["m"]},{"start":{"row":44,"column":33},"end":{"row":44,"column":34},"action":"insert","lines":["i"]}],[{"start":{"row":44,"column":32},"end":{"row":44,"column":34},"action":"remove","lines":["mi"],"id":37},{"start":{"row":44,"column":32},"end":{"row":44,"column":42},"action":"insert","lines":["middleware"]}],[{"start":{"row":44,"column":42},"end":{"row":44,"column":43},"action":"insert","lines":["."],"id":38}],[{"start":{"row":44,"column":43},"end":{"row":44,"column":64},"action":"insert","lines":["checkCommentOwnership"],"id":39}],[{"start":{"row":44,"column":64},"end":{"row":44,"column":65},"action":"insert","lines":[","],"id":40}],[{"start":{"row":55,"column":26},"end":{"row":55,"column":27},"action":"insert","lines":[" "],"id":41}],[{"start":{"row":55,"column":27},"end":{"row":55,"column":60},"action":"insert","lines":["middleware.checkCommentOwnership,"],"id":42}],[{"start":{"row":66,"column":29},"end":{"row":66,"column":30},"action":"insert","lines":[" "],"id":43}],[{"start":{"row":66,"column":30},"end":{"row":66,"column":63},"action":"insert","lines":["middleware.checkCommentOwnership,"],"id":44}],[{"start":{"row":49,"column":41},"end":{"row":49,"column":51},"action":"remove","lines":["campground"],"id":45},{"start":{"row":49,"column":41},"end":{"row":49,"column":42},"action":"insert","lines":["b"]},{"start":{"row":49,"column":42},"end":{"row":49,"column":43},"action":"insert","lines":["l"]},{"start":{"row":49,"column":43},"end":{"row":49,"column":44},"action":"insert","lines":["o"]},{"start":{"row":49,"column":44},"end":{"row":49,"column":45},"action":"insert","lines":["g"]}],[{"start":{"row":43,"column":4},"end":{"row":43,"column":15},"action":"remove","lines":["OMMENT EDIT"],"id":46},{"start":{"row":43,"column":3},"end":{"row":43,"column":4},"action":"remove","lines":["C"]}],[{"start":{"row":43,"column":3},"end":{"row":43,"column":4},"action":"insert","lines":["E"],"id":47},{"start":{"row":43,"column":4},"end":{"row":43,"column":5},"action":"insert","lines":["d"]},{"start":{"row":43,"column":5},"end":{"row":43,"column":6},"action":"insert","lines":["i"]},{"start":{"row":43,"column":6},"end":{"row":43,"column":7},"action":"insert","lines":["t"]},{"start":{"row":43,"column":7},"end":{"row":43,"column":8},"action":"insert","lines":["i"]},{"start":{"row":43,"column":8},"end":{"row":43,"column":9},"action":"insert","lines":["n"]},{"start":{"row":43,"column":9},"end":{"row":43,"column":10},"action":"insert","lines":["g"]}],[{"start":{"row":43,"column":10},"end":{"row":43,"column":11},"action":"insert","lines":[" "],"id":48},{"start":{"row":43,"column":11},"end":{"row":43,"column":12},"action":"insert","lines":["o"]},{"start":{"row":43,"column":12},"end":{"row":43,"column":13},"action":"insert","lines":["f"]}],[{"start":{"row":43,"column":13},"end":{"row":43,"column":14},"action":"insert","lines":[" "],"id":49},{"start":{"row":43,"column":14},"end":{"row":43,"column":15},"action":"insert","lines":["c"]},{"start":{"row":43,"column":15},"end":{"row":43,"column":16},"action":"insert","lines":["o"]},{"start":{"row":43,"column":16},"end":{"row":43,"column":17},"action":"insert","lines":["m"]},{"start":{"row":43,"column":17},"end":{"row":43,"column":18},"action":"insert","lines":["m"]},{"start":{"row":43,"column":18},"end":{"row":43,"column":19},"action":"insert","lines":["e"]},{"start":{"row":43,"column":19},"end":{"row":43,"column":20},"action":"insert","lines":["n"]},{"start":{"row":43,"column":20},"end":{"row":43,"column":21},"action":"insert","lines":["t"]},{"start":{"row":43,"column":21},"end":{"row":43,"column":22},"action":"insert","lines":["s"]}],[{"start":{"row":54,"column":2},"end":{"row":54,"column":16},"action":"remove","lines":["COMMENT UPDATE"],"id":50},{"start":{"row":54,"column":2},"end":{"row":54,"column":3},"action":"insert","lines":[" "]},{"start":{"row":54,"column":3},"end":{"row":54,"column":4},"action":"insert","lines":["u"]}],[{"start":{"row":54,"column":3},"end":{"row":54,"column":4},"action":"remove","lines":["u"],"id":51}],[{"start":{"row":54,"column":3},"end":{"row":54,"column":4},"action":"insert","lines":["U"],"id":52},{"start":{"row":54,"column":4},"end":{"row":54,"column":5},"action":"insert","lines":["p"]},{"start":{"row":54,"column":5},"end":{"row":54,"column":6},"action":"insert","lines":["d"]},{"start":{"row":54,"column":6},"end":{"row":54,"column":7},"action":"insert","lines":["a"]},{"start":{"row":54,"column":7},"end":{"row":54,"column":8},"action":"insert","lines":["t"]},{"start":{"row":54,"column":8},"end":{"row":54,"column":9},"action":"insert","lines":["i"]},{"start":{"row":54,"column":9},"end":{"row":54,"column":10},"action":"insert","lines":["n"]},{"start":{"row":54,"column":10},"end":{"row":54,"column":11},"action":"insert","lines":["g"]}],[{"start":{"row":54,"column":11},"end":{"row":54,"column":12},"action":"insert","lines":[" "],"id":53},{"start":{"row":54,"column":12},"end":{"row":54,"column":13},"action":"insert","lines":["o"]},{"start":{"row":54,"column":13},"end":{"row":54,"column":14},"action":"insert","lines":["f"]}],[{"start":{"row":54,"column":14},"end":{"row":54,"column":15},"action":"insert","lines":[" "],"id":54},{"start":{"row":54,"column":15},"end":{"row":54,"column":16},"action":"insert","lines":["c"]},{"start":{"row":54,"column":16},"end":{"row":54,"column":17},"action":"insert","lines":["o"]},{"start":{"row":54,"column":17},"end":{"row":54,"column":18},"action":"insert","lines":["m"]},{"start":{"row":54,"column":18},"end":{"row":54,"column":19},"action":"insert","lines":["m"]},{"start":{"row":54,"column":19},"end":{"row":54,"column":20},"action":"insert","lines":["e"]},{"start":{"row":54,"column":20},"end":{"row":54,"column":21},"action":"insert","lines":["n"]},{"start":{"row":54,"column":21},"end":{"row":54,"column":22},"action":"insert","lines":["t"]},{"start":{"row":54,"column":22},"end":{"row":54,"column":23},"action":"insert","lines":["s"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":77,"column":24},"end":{"row":77,"column":24},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1557136765586,"hash":"0b8a45a2ac1baed26da9af4dc79d1fc29d3d2914"}