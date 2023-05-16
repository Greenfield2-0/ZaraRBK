import app from './app';
import connection from './connection';

connection

// Setting the port and listening for connections
const port: number = 5000;

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
