const express = require('express');
const urlrouter = require('./routes/url');
const myrouter = require('./routes/users');
const url = require('./models/url')
const {connectfunction} = require('./connection');
const app = express();
const PORT = 8001;
const R = require('./routes/staticroute');
const cookieparser = require('cookie-parser');
const {restricttologgedinuseronly,checkauth} = require('./middlewares/auth');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieparser());
//views rendering ejs(embedded javascript)

//mongoose connection make
connectfunction('mongodb://localhost:27017/shorturl').then(()=>{console.log("MongoDB connected")});
//route
app.set('view engine', 'ejs');
// app.set('views', path.resolve('./views'));
app.use('/url',restricttologgedinuseronly,urlrouter);
app.use('/',checkauth, R);
app.use('/users', myrouter);
app.get("/url/:shortid", async (req, res) => {
    const shortid = req.params.shortid;
    const entry = await url.findOneAndUpdate(
      {
        shortid,
      },
      {
        $push: {
          visithistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    res.redirect(entry.redirecturl);
  });
  

app.listen(8001,()=>{console.log(`Server Started at ${PORT}`)});
