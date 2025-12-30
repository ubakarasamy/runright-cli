export async function pollStatus(client, runId) {
  while (true) {
    const res = await client.get(`/api/test-runs/${runId}`);

    if (['finished', 'failed'].includes(res.data.status)) {
      return res.data;
    }

    await new Promise(r => setTimeout(r, 2000));
  }
}