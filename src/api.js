import axios from 'axios';

const BASE_URL = process.env.RUNRIGHT_URL || 'http://127.0.0.1:8000';

export function api() {
  if (!process.env.RUNRIGHT_TOKEN) {
    console.error('❌ RUNRIGHT_TOKEN not set');
    process.exit(2);
  }

  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${process.env.RUNRIGHT_TOKEN}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
