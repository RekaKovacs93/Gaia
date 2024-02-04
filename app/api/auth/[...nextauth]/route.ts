import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

authOptions.secret = process.env.AUTH_SECRET;


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
