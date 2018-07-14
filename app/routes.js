module.exports = function(app, passport, db) {

// normal routes ===============================================================

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        db.collection('items').find().toArray((err, result) => {
          if (err) return console.log(err)
          res.render('profile.ejs', {
            user : req.user,
            items: result
          })
        })
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

// message board routes ===============================================================

    app.post('/admin', (req, res) => {
      db.collection('items').save({album: req.body.album, price: req.body.price, quantity: 0, profit: 0}, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
      });
    });

    app.post('/funds', (req, res) => {
      db.collection('cash').save({name: req.body.name, profit: 0}, (er, res) => {
        if (err) return console.log(err)
        console.log('saved to database')
      });
    });

    app.put('/admin', (req, res) => {
      db.collection('items')
      .findOneAndUpdate({album: req.body.album}, {
        $set: {
          quantity:req.body.quantity + 5
        }
      }, {
        sort: {_id: -1},
        upsert: true
      }, (err, result) => {
        if (err) return res.send(err)
        res.send(result)
      })
    })

    app.put('/vend', (req, res) => {
      db.collection('items')
      .findOneAndUpdate({album: req.body.album}, {
        $inc: {
          quantity: - 1,
          profit: + req.body.price
        }
      }, {
        sort: {_id: -1},
        upsert: true
      },(err, result) => {
        if (err) return res.send(err)
        res.send(result)
      });
    });

    app.put('/mula', (req, res) => {
      db.collection('cash')
      .findOneAndUpdate({name: req.body.name}, {
        $inc: {
          profit: + req.body.price
        }
      }, {
        sort: {_id: -1},
        upsert: false
      },(err, result) => {
        if (err) return res.send(err)
        res.send(result)
      });
    });

    // Will delete from customerOrder collections
    app.delete('/remove', (req, res) => {
      db.collection('items').findOneAndDelete({album: req.body.album}, (err, result) => {
        if (err) return res.send(500, err)
        res.send('Message deleted!')
      })
    })

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
        // LOGIN ===============================
        // show the login form
        app.get('/login', function(req, res) {
            res.render('login.ejs', { message: req.flash('loginMessage') });

        });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // SIGNUP =================================
        // show the signup form
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));



// =============================================================================
// UNLINK ACCOUNTS =============================================================
// =============================================================================
// used to unlink accounts. for social accounts, just remove the token
// for local account, remove email and password
// user account will stay active in case they want to reconnect in the future

    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
