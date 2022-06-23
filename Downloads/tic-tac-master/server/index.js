import express from 'express';
import cors from 'cors';
import { StreamChat } from 'stream-chat';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';


const app = express();

app.use(cors());
app.use(express.json());
 
const api_key = '3gcm3cdcnch7';
const api_secret = 'rb4grzf7gpy2hfj9enzgkpb8tr9d6jx6fbwnv5nq4xj8vz5a78wesartn4nkp92b';
const serverClient = new StreamChat.getInstance(api_key, api_secret);

app.post('/signup', (req, res) => {
    const {firstName, lastName, userName, password} = req.body //recieve the first name etc all the properties from front
    const userId = uuivd4();
    const hashedPassword = await bcrpyt.hash(password, 10);
    const token = serverClient.createToken(userId);
    res.json({token, userId, firstName, lastName, userName, hashedPassword});
 })

app.post('/login', ())


app.listen(3001, () => {
    console.log('server');
});

