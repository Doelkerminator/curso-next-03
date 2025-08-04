import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) { 
    console.log(request);
    return NextResponse.json({
        method: request.method,
        message: "Hello!"
    });
}