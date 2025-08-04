import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) { 

    await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data: [
            { description: "Conocer al bicho SIUUUU" },
            { description: "Pedir 4 de asada", completed: true },
            { description: "Cometer fraude fiscal" },
            { description: "Reintegrar la Unión Soviética" },
            { description: "No despertar accidentalmente un horror cósmico" },
            { description: "Fiesta de karaoke a las 8pm" }
        ]
    });

    return NextResponse.json({
        message: "Seed executed!"
    })
}