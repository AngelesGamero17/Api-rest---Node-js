const { json } = require('body-parser');
const express = require('express');
const app = express();
const morgan = require('morgan');

// setings
app.set('port',process.env.PORT || 3000);
app.set('json spaces' ,2);
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({exLended: false}));
app.use(express.json());

// routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));
app.listen(app.get('port'), () => {
    console.log('server on port $3000');
});