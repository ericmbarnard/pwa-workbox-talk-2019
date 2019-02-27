
export async function fetchData() {
    const resp = await fetch('/api/some-data');
    return resp.json();
}