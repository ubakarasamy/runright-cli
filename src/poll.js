export async function pollStatus(client, runId) {
  while (true) {
    const { data } = await client.get(`/api/test-runs/${runId}`);

    console.log(`⏳ Status: ${data.status}`);

    if (data.status === 'finished') {
      return data;
    }

    await new Promise(r => setTimeout(r, 3000));
  }
}
