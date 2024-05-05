const Destination = require('../models/Destination');

exports.getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) return res.status(404).json({ message: 'Destination not found' });
    res.json(destination);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createDestination = async (req, res) => {
  const destination = new Destination(req.body);
  try {
    const newDestination = await destination.save();
    res.status(201).json(newDestination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateDestination = async (req, res) => {
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDestination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndDelete(req.params.id);
    if (!destination) return res.status(404).json({ message: 'Destination not found' });
    res.json({ message: 'Destination deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
