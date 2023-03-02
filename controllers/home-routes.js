const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', withAuth, async (req, res) => {
//   const data = {
//     pageTitle: 'Fitness Tracker',
//     pageName: 'Fitness Tracker',
//     pageDescription: 'Track your fitness goals with our app!',
//     photoPath: 'https://example.com/fitness-photo.jpg',
//     photoAltText: 'Fitness photo'
//   };
//   res.render('home', data);

//   // try {
//   //   const userData = await User.findAll({
//   //     attributes: { exclude: ['password'] },
//   //     order: [['username', 'ASC']],
//   //   });

//   //   const users = userData.map((project) => project.get({ plain: true }));

//   //   res.render('home', {
//   //     users,
//   //     logged_in: req.session.logged_in,
//   //   });
//   // } catch (err) {
//   //   res.status(500).json(err);
//   // }
// });

router.get('/', (req, res) => {
  const data = {
    pageTitle: 'Fitness Tracker',
    pageName: 'Fitness Tracker',
    pageDescription: 'Track your fitness goals with our app!',
    photoPath: 'https://example.com/fitness-photo.jpg',
    photoAltText: 'Fitness photo'
  };
  res.render('home', data);
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;