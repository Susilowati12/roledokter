const express = require('express');
const router = express.Router()

const authRouter = require('./auth.router');
const rekamRouter = require('./rekam.router');
const konsultasiRouter = require('./konsultasi.router');

router.use("/user", authRouter);
router.use("/rekam", rekamRouter);
router.use("/konsultasi", konsultasiRouter);

module.exports = router;