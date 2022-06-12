const { Router } = require("express");
const Animal = require("./animales.js");
const router = Router();



router.use("/animales", Animal);



module.exports = router;