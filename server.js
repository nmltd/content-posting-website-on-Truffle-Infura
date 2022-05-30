const express = require('express');
const cors = require('cors');
const transfer = require('./scripts/transferNFT');

const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

app.post("/", (req, res) => {
    const data = req.body;
    console.log(data);
    transfer(data.walletId);
    res.send("received...");
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));