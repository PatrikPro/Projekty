const Top100List = require('../models/Top100List');

exports.getAllTop100Lists = async (req, res) => {
  try {
    const lists = await Top100List.find();
    res.json(lists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTop100ListByYear = async (req, res) => {
  try {
    const list = await Top100List.findOne({ year: req.params.year });
    if (!list) return res.status(404).json({ message: 'List not found for this year' });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTop100List = async (req, res) => {
  const list = new Top100List(req.body);
  try {
    const newList = await list.save();
    res.status(201).json(newList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateTop100List = async (req, res) => {
  try {
    const updatedList = await Top100List.findOneAndUpdate({ year: req.params.year }, req.body, { new: true });
    res.json(updatedList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTop100List = async (req, res) => {
  try {
    const list = await Top100List.findOneAndDelete({ year: req.params.year });
    if (!list) return res.status(404).json({ message: 'List not found' });
    res.json({ message: 'Top 100 list deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
