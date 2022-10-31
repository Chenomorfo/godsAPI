import mongoose from 'mongoose';

class Database {

    StartDB():void{
        mongoose.connect('mongodb://localhost:27017/godsAPI')
        .then((db)=> console.log('Database open'))
        .catch((err) => console.error(err));
    }

}

const db = new Database()
export default db;