const TravelPlan = require('../models/TravelPlan');

exports.getTravelPlansByUserId = async (req, res) => {
  try {
    const plans = await TravelPlan.find({ userId: req.params.userId });
    res.json(plans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTravelPlan = async (req, res) => {
  const plan = new TravelPlan(req.body);
  try {
    const newPlan = await plan.save();
    res.status(201).json(newPlan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateTravelPlan = async (req, res) => {
  try {
    const updatedPlan = await TravelPlan.findOneAndUpdate({ userId: req.params.userId, _id: req.params.planId }, req.body, { new: true });
    res.json(updatedPlan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTravelPlan = async (req)