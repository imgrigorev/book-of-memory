export const CREDENTIAL_NEXTGIS = import.meta.env.VITE_CREDENTIAL_NEXTGIS as string;

export async function apiGet(url: string): Promise<void> {
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: '*/*',
      Authorization: CREDENTIAL_NEXTGIS,
    },
  }).then(console.log);
}

async function apiFetch(method: string, url: string): Promise<void> {
  return fetch(url, {
    method,
    headers: {
      Accept: '*/*',
      Authorization: `hackathon_34-hackathon_34_25`,
    },
  }).then(console.log);
}

export async function apiPost(url: string): Promise<void> {
  return apiFetch('POST', url);
}

export async function apiPostWithCredentials(url: string): Promise<void> {
  return apiFetch('POST', url);
}

export async function apiPatch(url: string): Promise<void> {
  return apiFetch('PATCH', url);
}

export async function apiPut(url: string): Promise<void> {
  return apiFetch('PUT', url);
}

export async function apiDelete(url: string): Promise<void> {
  return apiFetch('DELETE', url);
}
