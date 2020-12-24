import mongoose from 'mongoose';

const mongoose = mongoose;
const URI = 'mongodb://localhost/mtappBD'
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true    
});


