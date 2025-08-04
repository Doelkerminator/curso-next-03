import { Todo } from '@/generated/prisma';
import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';
import * as yup from 'yup';

interface Segments {
    params: {
        id: string
    }
}

const getTodo = async (id: string): Promise<Todo | null> => {
    const todo = await prisma.todo.findFirst({
        where: { id }
    });

    return todo;
}

export async function GET(request: NextRequest, { params }: Segments) { 

    const { id } = params;

    const todo = await getTodo(id);

    if( !todo ) {
        return NextResponse.json({
            message: `El TODO con ID ${params.id} no fue hallado.`
        }, { status: 404 });
    }

    return NextResponse.json({
        request: request.url,
        data: todo
    })
}

const putSchema = yup.object({
    description: yup.string().optional(),
    completed: yup.boolean().optional().default(false)
});

export async function PUT(request: NextRequest, { params }: Segments) {
    try {
        const { id } = await params;
        const todo = await getTodo(id);

        if( !todo ) {
            return NextResponse.json({ message: `No existe un todo con id ${id}` }, { status: 400 });
        }

        const { completed, description } = await putSchema.validate(await request.json());

        const updatedTodo = await prisma.todo.update({
            where: { id: id },
            data: { 
                completed,
                description
            }
        });

        return NextResponse.json({
            updatedTodo
        });
    } catch (error: any) {
        return NextResponse.json({
            error: error
        }, { status: 400 }); 
    }
}

// export async function DELETE(request: NextRequest, { params }: Segments) {
//     const { id } = params;
//     const todo = await prisma.todo.findFirst({ where: { id: id } });

//     if( !todo ) {
//         return NextResponse.json({ message: `No existe un todo con id ${id}` }, { status: 400 });
//     }

//     const deleted = await prisma.todo.delete({
//         where: { id }
//     });

//     return NextResponse.json({
//         data: deleted
//     });
// }