const express = require("express");

const router = express.Router();

const {
  createInquiry,
  getInquiries,
  deleteInquiry,
} = require("../controllers/inquiryController");

router.post("/", createInquiry);

router.get("/", getInquiries);

router.delete("/:id", deleteInquiry);

module.exports = router;