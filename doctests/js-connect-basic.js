// EXAMPLE: connect_basic
// REMOVE_START
import assert from "node:assert";
// REMOVE_END

// STEP_START connect_basic
import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('foo', 'bar');
const result = await client.get('foo');
console.log(value)  // >>> bar
// STEP_END

// REMOVE_START
assert.equal("bar", result)
// REMOVE_END

