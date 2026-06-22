const Inquiry = require("../models/Inquiry");

const createInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.create(req.body);

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

const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteInquiry = async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Inquiry Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createInquiry,
  getInquiries,
  deleteInquiry,
};