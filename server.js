const express = require('express');
const app = express();

app.get('/Rana', (req, res) => {
  res.send('Rana Atawneh'); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});