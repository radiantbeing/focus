export async function fetcher(
  url: string,
  options?: RequestInit
): Promise<unknown> {
  const res = await fetch(`${getBaseUrl()}${url}`, {
    headers: { "Content-Type": "application/json" },
    ...options
  });

  if (!res.ok) {
    throw new Error("성공 응답을 수신하지 못했습니다.");
  }

  return await res.json();
}

function getBaseUrl(): string {
  if (import.meta.env.MODE === "development") {
    return "http://localhost:3532";
  }

  if (import.meta.env.VITE_API_URL !== undefined) {
    return import.meta.env.VITE_API_URL;
  }

  return window.location.origin;
}
