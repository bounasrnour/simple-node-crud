
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
const users = [
    {
        id:'4',
        firstName:"Nour",
        lastName: "Bou Nasr",
        age: 24
    }
];

router.get('/users', (req, res) =>{
    res.send(users);
});

router.post('/users',(req, res)=>{
    const user = req.body;
    users.push({ ... user, id: uuidv4()});
});

router.get('/users/:id', (req,res) =>{
    const {id} = req.params;
    const userF = users.find((user) => user.id === id);
    res.send(userF);
    console.log(userF);
});

router.delete('/users/:id', (req,res)=>{
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);    
});

router.patch('/users/:id', (req, res) =>{
    const {id} = req.params;
    const userF = users.find((user) => user.id === id);
    const { firstName, lastName, age} = req.body;
    if(firstName){
        userF.firstName = firstName
    }
    if(lastName){
        userF.lastName = lastName;
    }
    if(age){
        userF.age = age;
    }
});
export default router;