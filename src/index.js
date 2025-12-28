const logger = require('./utils/logger');
const express = require('express');
const config = require('./config');

const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(config.port, () => {
  logger.info(`Server running on port ${config.port}`);
});
