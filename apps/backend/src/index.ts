import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { db } from './db';

//For env File 
dotenv.config();

const app: Application = express();
app.use(cors())
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await db.user.create({
    data: {
        username,
        password,
        firstName,
        lastName
    }
  })
  console.log(res);
}

insertUser("admin1", "123456", "utkarsh", "singh")

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});