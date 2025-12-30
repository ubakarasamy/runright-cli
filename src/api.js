import axios from 'axios';

const BASE_URL = process.env.RUNRIGHT_URL;

export function api() {
  if (!BASE_URL) {
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
