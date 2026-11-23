import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE = 'The meeting could have been an email, so we booked a follow-up meeting to discuss why nobody reads emails.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), JOKE);
