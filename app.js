const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const bookingfromRoute = require('./Routes/bookform');
const User = require('./Models/Users');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', bookingfromRoute);

app.post('/user/add-user', async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phoneno = req.body.phoneno;

  const data = await User.create({ name: name, email: email, phoneno: phoneno });
  res.redirect('/')
  //res.status(201).json({ newUserDetail: data });
});

app.get('/user/get-user', async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).json({ allUsers: users });
});

// Delete a user by ID
app.delete('/user/delete-user/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  try {
      // Use Sequelize to delete the user by their ID
      await User.destroy({
          where: { id: userId }
      });
      res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'User deletion failed' });
  }
});


sequelize.sync().then((result) => {
  app.listen(3000);
}).catch((err) => {
  console.log(err);
});

