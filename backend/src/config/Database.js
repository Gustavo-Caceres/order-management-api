import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../../.env') })

const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoHost = process.env.MONGO_HOST || 'localhost';
const mongoPort = process.env.MONGO_PORT || 27017;
const mongoDatabase = process.env.MONGO_DATABASE || 'order-management';

const connectionString = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDatabase}?authSource=admin`;

async function connectDB(){
    try {
        await mongoose.connect(connectionString);
        console.log('conexão com o MongoDB realizada!')
    } catch (error){
        console.error('Erro ao conectar ao MongoDb:', error);
        process.exit(1);
    }
}

export default connectDB;