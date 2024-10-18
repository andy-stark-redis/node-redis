// EXAMPLE: connect_basic_tls_client_auth
// REMOVE_START
import assert from "node:assert";
// REMOVE_END

// STEP_START connect_basic_tls_client_auth
import { createClient } from 'redis';

const client = createClient({
    username: 'yourUsername',
    password: 'yourPassword',
    socket: {
        host: 'localhost',
        port: 6379,
        tls: true,
        key: readFileSync('./redis_user_private.key'),
        cert: readFileSync('./redis_user.crt'),
        ca: [readFileSync('./redis_ca.pem')]
    }
});

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

await client.set('foo', 'bar');
const result = await client.get('foo');
console.log(value)  // >>> bar
// STEP_END

// REMOVE_START
assert.equal("bar", result)
// REMOVE_END

