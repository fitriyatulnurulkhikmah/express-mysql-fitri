const express = require('express');

const app = express();

const usersRoutes = require('./routes/users.js');

const middlewareLogRequest = require('./middleware/logs.js');

app.use(middlewareLogRequest);

app.use(express.json());

app.use((req, res, next) =>{
    console.log('Middleware kedua');
    next();
})

app.use('/users', usersRoutes);

app.listen(4000,() =>{
    console.log('server di jelaskan di port 4000 berhasil')
});

// app.use('/', (req, res, next) => {
//     res.send('Hello PPLG...!!!');
// })

// app.get('/', (req, res, next) => {
//     res.send('Hello, Get Method')
// });

// app.post('/', (req, res, next) => {
//     res.json({
//         nama: 'Fitriya',
//         email: 'khikmahnrl2011@gmail.com' 
//     });
// });