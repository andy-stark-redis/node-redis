// EXAMPLE: connect_basic_tls
// REMOVE_START
import assert from "node:assert";
// REMOVE_END

// STEP_START connect_basic_tls
import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: 'jj7hRGi1K22vop5IDFvAf8oyeeF98s4h',
    socket: {
        host: 'redis-14669.c338.eu-west-2-1.ec2.redns.redis-cloud.com',
        port: 14669,
        tls: true,
        ca: [readFileSync('/Users/andrew.stark/Documents/Repos/forks/node-redis/doctests/redis_ca.pem')]
    }
});

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();
// REMOVE_START
await client.del('foo');
// REMOVE_END

await client.set('foo', 'bar');
const result = await client.get('foo');
console.log(value)  // >>> bar
// STEP_END

// REMOVE_START
assert.equal("bar", result)
// REMOVE_END

