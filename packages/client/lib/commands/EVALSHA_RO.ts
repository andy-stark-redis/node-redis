import { Command } from '../RESP/types';
import EVAL, { parseEvalArguments } from './EVAL';

export default {
  IS_READ_ONLY: true,
  parseCommand(...args: Parameters<typeof parseEvalArguments>) {
    args[0].push('EVALSHA_RO');
    parseEvalArguments(...args);
  },
  transformReply: EVAL.transformReply
} as const satisfies Command;
