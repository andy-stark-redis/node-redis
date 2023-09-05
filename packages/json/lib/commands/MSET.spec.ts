import { strict as assert } from 'assert';
import testUtils, { GLOBAL } from '../test-utils';
import MSET from './MSET';

describe('JSON.MSET', () => {
  it('transformArguments', () => {
    assert.deepEqual(
      MSET.transformArguments([{
        key: '1',
        path: '$',
        value: 1
      }, {
        key: '2',
        path: '$',
        value: '2'
      }]),
      ['JSON.MSET', '1', '$', '1', '2', '$', '"2"']
    );
  });

  testUtils.testWithClient('client.json.mSet', async client => {
    assert.equal(
      await client.json.mSet([{
        key: '1',
        path: '$',
        value: 1
      }, {
        key: '2',
        path: '$',
        value: '2'
      }]),
      'OK'
    );
  }, GLOBAL.SERVERS.OPEN);
});
