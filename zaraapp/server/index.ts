import app from './app';
import db from '../server/connection';

// Setting the port and listening for connections
const port: number = 5000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
