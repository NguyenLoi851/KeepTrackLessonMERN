require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const authRouter = require('./routes/auth')
const lessonRouter = require('./routes/lesson')

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vc1si.mongodb.net/KeepTrackLessonMERN?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();

const app = express();
app.use(cors())
app.use(express.json())

app.use('/api/auth',authRouter)
app.use('/api/lessons',lessonRouter)


const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
