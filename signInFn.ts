'use server'
import {signIn} from "@/auth";
const signInFn = async () => {
    await signIn('google')
}