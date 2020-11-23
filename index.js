import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/routes';

const app = express();
const PORT = 4000;

// In index.js, add a mongoose connection with the function connect, 
// passing the mongodb local URL where you'll create a database productsdb 
// since we're going to create a DB for products. 
// Don't forget to add the parameters useNewUrlParser and useUnifiedTopology as true and use a global promise.
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/productsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);
