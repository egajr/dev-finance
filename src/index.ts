import { app } from './app';
import { AddressInfo } from 'net';
import dotenv from 'dotenv';

dotenv.config();

app.listen(process.env.PORT || 3333, () => {
    console.log('🏃 Server running');
});