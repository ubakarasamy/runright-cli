import { api } from './api.js';
import { pollStatus } from './poll.js';

export async function runCommand(options) {
  const client = api();

  console.log('🚀 Triggering test run...');

  const res = await client.post('/api/test-runs', {
    project_id: Number(options.project)
  });

  const runId = res.data.test_run_id;
  console.log(`🧪 Test Run ID: ${runId}`);

  const final = await pollStatus(client, runId);

  console.log(`✅ Finished with result: ${final.result}`);

  if (final.result === 'passed') {
    process.exit(0);
  } else {
    process.exit(1);
  }
}
