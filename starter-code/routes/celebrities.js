const express = require('express');
const celebsRouter  = express.Router();
const Celebrity = require('../models/Celebrity');
const app_name = require('../package.json').name;
const debug = require('debug')(`${app_name}:indexRouter`);

celebsRouter.get('/celebrities', (req, res, next) => {
    res.render('/celebrities/index');
})

module.exports = celebsRouter;