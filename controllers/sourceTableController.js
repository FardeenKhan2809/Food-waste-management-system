// controllers/sourceTableController.js
const SourceTable = require('../models/SourceTable');

exports.createSource = async (req, res) => {
  try {
    const newSource = new SourceTable(req.body);
    await newSource.save();
    res.json({ message: 'Source registered successfully' });
  } catch (error) {
    console.error('Error creating source:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.' });
  }
};


exports.getSourceById = async (req, res) => {
    try {
      const sourceId = req.params.sourceId;
  
      const sourceDetails = await SourceTable.findOne({ sourceId });
  
      if (sourceDetails) {
        res.json(sourceDetails);
      } else {
        res.status(404).json({ error: 'Source not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



  // controllers/sourceTableController.js

exports.getSourceData = async (req, res) => {
  const { sourceId } = req.params;

  try {
    const sourceData = await SourceTable.findOne({ sourceId });

    if (sourceData) {
      res.json({
        name: sourceData.name,
        mobileNo: sourceData.mobileNo,
        address:sourceData.address,
      });
    } else {
      res.status(404).json({ error: 'Source not found' });
    }
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getSources = async (req, res) => {
  try {
    const sources = await SourceTable.find();
    res.json(sources);
  } catch (error) {
    console.error('Error fetching sources:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Update registration
exports.updateSource = async (req, res) => {
  const { id } = req.params;

  try {
    const source = await SourceTable.findByIdAndUpdate(id, req.body, { new: true });

    if (!source) {
      return res.status(404).json({ message: 'Source not found' });
    }

    res.status(200).json(source);
  } catch (error) {
    console.error('Error updating Source:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Delete registration
exports.deleteSource = async (req, res) => {
  const { id } = req.params;

  try {
    const source = await SourceTable.findByIdAndDelete(id);

    if (!source) {
      return res.status(404).json({ message: 'Source not found' });
    }

    res.status(200).json({ message: 'Source deleted successfully' });
  } catch (error) {
    console.error('Error deleting Source:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
