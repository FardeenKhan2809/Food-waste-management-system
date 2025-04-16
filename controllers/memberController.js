const Member = require('../models/memberSchema');

exports.createMember = async (req, res) => {
  try {
    const newMember = new Member(req.body);
    await newMember.save();
    res.json({ message: 'Member registered successfully' });
  } catch (error) {
    console.error('Error creating Member:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.' });
  }
};


exports.getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    console.error('Error fetching Members:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update registration
exports.updateMember = async (req, res) => {
  const { id } = req.params;

  try {
    const member = await Member.findByIdAndUpdate(id, req.body, { new: true });

    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }

    res.status(200).json(member);
  } catch (error) {
    console.error('Error updating Member:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



// Delete registration
exports.deleteMember = async (req, res) => {
  const { id } = req.params;

  try {
    const member = await Member.findByIdAndDelete(id);

    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }

    res.status(200).json({ message: 'Member deleted successfully' });
  } catch (error) {
    console.error('Error deleting Member:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getMemberData = async (req, res) => {
  const { id } = req.params;

  try {
    const MemberData = await Member.findOne({ id });

    if (MemberData) {
      res.json({
        name: MemberData.name,
       email: MemberData.email,
        mobileNo: MemberData.mobileNo,
        address: MemberData.address,
        mobileNo: MemberData.mobileNo,
        address:MemberData.address,
        dateOfBirth: MemberData.dateOfBirth,
      });
    } else {
      res.status(404).json({ error: 'Member not found' });
    }
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

