// EXAMPLE: connect_cluster
// REMOVE_START
import assert from "node:assert";
// REMOVE_END

// STEP_START connect_cluster
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
    ]
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

