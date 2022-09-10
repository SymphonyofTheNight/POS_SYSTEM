import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: 'true', limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: 'true', limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());

const CLOUD = 'mongodb+srv://chocolate:chocolate@cluster0.9qe0idl.mongodb.net/?retryWrites=true&w=majority';

if (CLOUD) {
    mongoose.connect(CLOUD,
        { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => {
        app.listen(PORT, () => {
            console.log(`server running at port: ${PORT}`)
        })
    }).catch(err => {
        console.log(err)
    })
}





