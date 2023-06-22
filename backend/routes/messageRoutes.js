const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  sendMessage,
  allMessages,
  uploadFile,
  getImage,
} = require("../controllers/messageControllers");
const upload = require("../utils/upload");

const router = express.Router();

router.route("/").post(protect, sendMessage);
router.route("/:chatId").get(protect, allMessages);
router.post("/file/upload", upload.single("file"), uploadFile);
router.get("/file/:filename", getImage);

module.exports = router;
