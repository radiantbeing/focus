export async function fetcher(
  url: string,
  options?: RequestInit
): Promise<unknown> {
  const res = await fetch("/api" + url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    throw new Error("성공 응답을 수신하지 못했습니다.");
  }

  return await res.json();
}
