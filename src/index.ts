import { app } from './app'
import { AddressInfo } from 'net'
// import * as dotenv from "dotenv";

// dotenv.config({ path: './config/.env' });

app.set('port', process.env.PORT || 3333)

const server = app.listen(app.get('port'), 'localhost', () => {
    const { port, address } = server.address() as AddressInfo;
    console.log('🏃 Running Server on:', 'http://' + address + ':' + port);
});