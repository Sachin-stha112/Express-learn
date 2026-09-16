import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Get all users",
  });
});
router.get("/:id", (req, res) => {
  res.json({
    message: `Get user ${req.params.id}`,
  });
});
router.post("/", (req, res) => {
  res.json({
    message: "Create users",
  });
});
router.patch("/:id", (req, res) => {
  res.json({
    message: `Update user ${req.params.id}`,
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    message: `Delete user ${req.params.id}`,
  });
});

export default router