const express = require("express");
const { getAsync } = require("../redis/index");
const router = express.Router();

router.get("/", async (_, res) => {
  const addedTodos = await getAsync("added_todos");
  res.json({ addedTodos: Number(addedTodos) });
});

module.exports = router;
