const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose.js');

class SiteController {
  // [GET] /home
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('home', {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  //[GET] /search
  show(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
