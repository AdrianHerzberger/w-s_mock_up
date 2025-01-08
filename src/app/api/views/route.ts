import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

/**
 * Handles GET requests to fetch the current view count.
 * 
 * This function fetches the view count from the database using Prisma. 
 * If no entry exists, it invokes a new record with a count of 0. 
 * The view count is then returned as a JSON response.
 * 
 * @async
 * @function GET
 * @param {Request} req - The incoming HTTP request object.
 * @returns {Promise<NextResponse>} A JSON response with the current view count.
*/

export async function GET(req: Request) {
    console.log(`Method: GET, URL: ${req.url}`);
    const viewCount = await prisma.viewCount.findUnique({
        where: { id: 1 },
    });

    if (!viewCount) {
        await prisma.viewCount.create({ data: { id: 1, count: 0 } });
    }

    return NextResponse.json({ count: viewCount ? viewCount.count : 0 });
}

/**
 * Handles POST requests to increment the view count.
 * 
 * This function increments the view count in the database using Prisma's `upsert` method. 
 * If no entry exists, it creates a new entry with a count of 1. 
 * The updated view count is returned as a JSON response.
 * 
 * @async
 * @function POST
 * @param {Request} req - The incoming HTTP request object.
 * @returns {Promise<NextResponse>} A JSON response with the updated view count.
 */

export async function POST(req: Request) {
    console.log(`Method: POST, URL: ${req.url}`);
    const updatedViewCount = await prisma.viewCount.upsert({
        where: { id: 1 },
        update: { count: { increment: 1 } },
        create: { count: 1 },
    });

    return NextResponse.json(updatedViewCount);
}
