const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const activityRoutes = require('./routes/activityRoutes');

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.use('/api', activityRoutes);

const setupSwagger = require('./swagger');
setupSwagger(app);

app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);

  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
