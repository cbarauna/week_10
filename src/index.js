const express = require(`express`);
const mongoose = require(`mongoose`);

const app = express();
mongoose.connect(
  `mongodb+srv://root:6fp0cK4sJOszu1ni@cluster0-fze0y.mongodb.net/week10?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(express.json());

app.get(`/`, (request, response) => {
  return response.json({ mensage: `Hello Word` });
});

app.listen(3333);
