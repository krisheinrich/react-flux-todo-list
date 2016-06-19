module.exports = function (app) {
  
  var GroceryItem = require('./../models/GroceryItem.js');
  
  app.route('/api/items')
  .get(function (req, res) {
    GroceryItem.find(function (error, docs) {
      res.send(docs);
    });
  })
  .post(function (req, res) {
    console.log("adding item", req.params.id);
    var item = req.body;
    var groceryItem = new GroceryItem(item);
    groceryItem.save(function (err, data) {
      res.status(300).send();
    });
  });
  
  app.route('/api/items/:id')
  .delete(function (req, res) {
    console.log("removing item", req.params.id);
    GroceryItem.findOne({
      _id: req.params.id
    }).remove(function (x) {
      console.log("removed", x);
    });
  })
  .patch(function (req, res) {
    GroceryItem.findOne({
      _id: req.body._id
    }, function (err, doc) {
      for (var key in req.body) {
        doc[key] = req.body[key];
      }
      doc.save();
      res.status(200).send();
    });
  });
};

