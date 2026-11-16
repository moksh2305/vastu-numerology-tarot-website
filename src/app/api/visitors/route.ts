import { NextResponse } from 'next/server';

const COUNTER_KEY = 'bhumishah_vastu_visitors';
const BASE_URL = 'https://countapi.mileshilliard.com/api/v1';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const shouldIncrement = searchParams.get('inc') === 'true';
  const endpoint = shouldIncrement
    ? `${BASE_URL}/hit/${COUNTER_KEY}`
    : `${BASE_URL}/get/${COUNTER_KEY}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(endpoint, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (typeof data.value === 'number') {
        return NextResponse.json({ count: Math.max(3500, data.value) });
      }
    }
  } catch (error) {
    console.error('Visitor counter API error:', error);
  }

  // Fallback default
  return NextResponse.json({ count: 3500 });
}
