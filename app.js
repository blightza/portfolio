var express          = require("express"),
    app              = express(),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    passport         = require("passport"),
    localStratergy   = require("passport-local"),
    methodOverride   = require("method-override"),
    flash            = require("connect-flash"),
    User             = require("./models/user"),
    Blog             = require("./models/blog"),
    Comment          = require("./models/comment")
    
    
var indexRoutes      = require("./routes/index"),
    blogRoutes       = require("./routes/blog"),
    commentRoutes    = require("./routes/comment")
    
    
    
mongoose.connect("mongodb://bradley:bradster1@ds149706.mlab.com:49706/portfolio", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

// -= Passport Config =-
app.use(require("express-session")({
    secret: "Skibor is amazing",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(indexRoutes);
app.use("/blogs/:id/comments", commentRoutes);
app.use("/blogs", blogRoutes);

// app.listen(process.env.PORT || 3000, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});