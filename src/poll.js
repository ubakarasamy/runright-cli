export async function pollStatus(client, runId) {
  while (true) {
    await new Promise(r => setTimeout(r, 2000));

    const res = await client.get(`/api/test-runs/${runId}`);

    const run = res.data;

    if (run.status === 'finished') {
      return run;
    }

    console.log(`⏳ Status: ${run.status}...`);
  }
}