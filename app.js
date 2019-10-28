const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/sum', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    if(!a) {
        return res.status(400).send('This is required')
    }
    if(!b) {
        return res.status(400).send('This is required')
    }
    const integerA = parseFloat(a);
    const integerB = parseFloat(b);
    const c = integerA + integerB;
    const responseText = `The sum of ${integerA} and ${integerB} is ${c}`;
    res.send(responseText)
})

app.get('/cipher', (req, res) => {
    const text = req.query.text;
    const shift = req.query.shift;

    if(!text) {
        return res.status(400).send('Some text is required')
    }
    if(!shift) {
        return res.status(400).send('A shift number is required')
    }

    const shiftNum = parseFloat(shift);
    const encryptedArray = [];
    for(let i = 0; i < text.length; i++) {
        let charNum = text.charCodeAt(i) + shiftNum;
        let charLetter= String.fromCharCode(charNum);
        encryptedArray.push(charLetter);
    }
    const encryptedString = encryptedArray.join('');
    res.send(encryptedString); 
})

// app.get('/', (req, res) => {
//     res.send('Hello Express!');
// });

app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
});

// app.get('/burgers', (req, res) => {
//     res.send('We have juicy cheese burgers!');
// });

// app.get('/pizza/pepperoni', (req, res) => {
//     res.send('Your pizza is on the way');
// });

// app.get('/pizza/pineapple', (req, res) => {
//     res.send(`We don't serve that here. Never call again!`);
// });

// app.get('/echo', (req, res) => {
//     const responseText = `Here are some details of your request:
//     Base URL: ${req.baseUrl}
//     Host: ${req.hostname}
//     Path: ${req.path}
//     `;
//     res.send(responseText);
// })

// app.get('/queryViewer', (req, res) => {
//     console.log(req.query);
//     res.end();
// })

// app.get('/greetings', (req, res) => {
//     const name= req.query.name;
//     const race= req.query.race;

//     if(!name) {
//         return res.status(400).send('Please provide a name')
//     }

//     if (!race) {
//         return res.status(400).send('Please provide a race')
//     }

//     const greeting = `Greetings ${name} the ${race}, welcome to our kingdom.`;
//     res.send(greeting);
// })