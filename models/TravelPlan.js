const mongoose = require('mongoose');

const TravelPlanSchema = new mongoose.Schema({
  userId: String,
  destination: String,
  location: String,
  dateFrom: Date,
  dateTo: Date,
  description: String,
  transportation: String,
  accommodation: String,
  estimatedcost: Number
});

module.exports = mongoose.model('TravelPlan', TravelPlanSchema);
