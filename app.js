const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const sequelize=require('./util/database')

const bookingfromRoute=require('./Routes/bookform');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',bookingfromRoute)
app.post('/register', async (req, res) => {
    try {
      const connection = await mysql.createConnection(dbConfig);
      const [results] = await connection.execute(
        'INSERT INTO users (username, email) VALUES (?, ?)',
        [req.body.username, req.body.email]
      );
      await connection.end();
      res.send('User registered successfully!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Registration failed');
    }
  });
sequelize.sync().then((result)=>{
    //console.log(result);
    app.listen(3000);
}).catch((err)=>{
    console.log(err)
})