const express = require("express")
const router = express.Router();
const {
    protect,
    restrictToAdmin
} = require("../middlewares/auth.middleware")
const {
    getPendingUsers,
    approveUser,
    rejectUser
} = require("../controllers/admin.controller")

router.use(protect, restrictToAdmin);

router.get("/pending-users", getPendingUsers);
router.patch("/approve/:id", approveUser);
router.patch("/reject/:id", rejectUser);

module.exports = router;