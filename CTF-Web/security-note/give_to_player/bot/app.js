
const express = require('express')
const path = require('path');
const { visit } = require('./bot')

const app = express()
const port = 2809

app.get('/', (req, res) => {
    if (req.query.url && (req.query.url.startsWith('http') || req.query.url.startsWith('https')))
    {
        visit(req.query.url);
        res.send("OK");
    }
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
