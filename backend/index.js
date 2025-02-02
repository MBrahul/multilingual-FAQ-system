const express = require('express');
const cors = require('cors');
const connectToDb = require('./db');

const app = express();
const PORT = 5500;
app.use(express.json());

app.use(cors());

connectToDb();

app.get('/', (req, res) => {
  res.json({
    name: 'Vishvjeet',
  });
});

app.use('/api/faqs', require('./routes/faq'));

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
