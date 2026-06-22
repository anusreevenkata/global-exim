const express = require("express");

const router = express.Router();

const {
  createInquiry,
  getInquiries,
  updateInquiry,
  deleteInquiry,
} = require("../controllers/InquiryController");

router.post("/", createInquiry);

router.get("/", getInquiries);

router.put("/:id", updateInquiry);

router.delete("/:id", deleteInquiry);

module.exports = router;