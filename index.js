const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://badagogi:1q2w3e4r@cluster0.tebnyyz.mongodb.net/?retryWrites=true&w=majority', {
    /*useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true,
    usefindAndModify: false*/
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log('err ', err))


app.get('/', (req,res) =>
    res.send('Hello world 안녕하세요~!      ')
);
app.listen(port, () => console.log(`Example app listening on port ${port}`));





