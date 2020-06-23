const OrderPizza = require('../models/main.model');

exports.create_order = function (req, res) {
  const {size, type, toppings, total} =  req.body;
  if(total < 1){
    return  res.status(400).send({
      message: "Please Select Any Pizza"
   });;
  }
  let product = new OrderPizza(
    {size, type, toppings, total}
  );

  product.save((err, data) => {
      if (err) {
          return err;
      }
      res.json({id: data._id});
  })
};
