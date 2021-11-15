import express from 'express';
import bodyparser from 'body-parser';
import userRoutes from './routes/users.js';

const app = express();

const PORT = 5000;

//middleware
app.use(bodyparser.json());

//starting with users routes
app.use('/', userRoutes);

//routes
app.get('/', (req, res) =>{
    res.send('hello from page');
});

app.listen(PORT, ()=> console.log(`Server Running On http://localhost:${PORT}`));