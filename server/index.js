const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

// API routes for each module
const restaurantRoutes = require('./routes/restaurant');
const retailRoutes = require('./routes/retail');
const accountingRoutes = require('./routes/accounting');
const ecommerceRoutes = require('./routes/ecommerce');
const cardealerRoutes = require('./routes/cardealer');
const hotelRoutes = require('./routes/hotel');

app.use('/api/restaurant', restaurantRoutes);
app.use('/api/retail', retailRoutes);
app.use('/api/accounting', accountingRoutes);
app.use('/api/ecommerce', ecommerceRoutes);
app.use('/api/cardealer', cardealerRoutes);
app.use('/api/hotel', hotelRoutes);

app.listen(port, () => {
  console.log();
});
