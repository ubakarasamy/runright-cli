1
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

  console.log('\n📊 Test Summary');
  console.log('------------------');
  console.log(`Status  : ${final.status}`);
  console.log(`Result  : ${final.result}`);

  if (final.error) {
    console.log(`❌ Error   : ${final.error}`);
  }

  if (final.logs?.length) {
    console.log('\n🧾 Logs:');
    final.logs.forEach((log, i) => {
      console.log(` ${i + 1}. ${log.step} - ${log.message}`);
    });
  }

  if (final.result === 'passed') {
    process.exit(0);
  } else {
    process.exit(1);
  }
}
