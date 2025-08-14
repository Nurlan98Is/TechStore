import NextAuth from "next-auth";
import Google from "@auth/core/providers/google";
import Apple from "@auth/core/providers/apple";
export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Google,
        Apple,

    ]
})