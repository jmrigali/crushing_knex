const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

router.use(morgan('short'));
router.use(bodyParser.json());

router.get();
router.get();
router.post();
router.patch();
router.delete();

router.listen(port);
