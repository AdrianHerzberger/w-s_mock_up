
import prisma from "../lib/prisma";

export const Footer = async () => {

    const viewCount = await prisma.viewCount.findUnique({
        where: { id: 1 },
    });
 
    return (
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>© 2025 W&S Mock up</p>
        <p>Visitor count: {viewCount ? viewCount.count : 0 }</p>
        <a href="/about" className="text-blue-500 hover:underline">About Us</a>
        <a href="/contact" className="text-blue-500 hover:underline">Contact</a>
      </footer>
    );
}