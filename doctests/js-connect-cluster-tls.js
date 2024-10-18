// EXAMPLE: connect_cluster_tls
// REMOVE_START
import assert from "node:assert";
// REMOVE_END

// STEP_START connect_cluster_tls
import { createCluster } from 'redis';

const cluster = createCluster({
    rootNodes: [
        {
            url: 'redis://127.0.0.1:16379'
        },
        {
            url: 'redis://127.0.0.1:16380'
        },
        // ...
    ],
    username: 'yourUsername',
    password: 'yourPassword',
    socket: {
        host: 'localhost',
        port: 6379,
        tls: true,
        ca: [readFileSync('./redis_ca.pem')]
    }
});

cluster.on('error', (err) => console.log('Redis Cluster Error', err));

await cluster.connect();
await client.set('foo', 'bar');
const result = await client.get('foo');
console.log(value)  // >>> bar
// STEP_END

// REMOVE_START
assert.equal("bar", result)
// REMOVE_END

