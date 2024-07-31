import { NextResponse } from 'next/server';
export async function GET() {
  const url = process.env.NEXT_PUBLIC_API_URL as string

  const res = await fetch(
    `${url}/api/clinics`
  );
  const data = await res.json();
  return NextResponse.json(data);
}