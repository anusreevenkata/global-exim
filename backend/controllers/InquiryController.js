const Inquiry = require("../models/Inquiry");

const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const inquiry = await Inquiry.create({
      name,
      email,
      phone,
      message,
    });

    res.status(201).json({
      success: true,
      data: inquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createInquiry };