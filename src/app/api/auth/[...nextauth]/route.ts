import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials, req) {
                const {email,password} = credentials as {email: string, password: string}

                if (email === 'test@test.com' && password === 'password') {
                    return {id:"1",name:"Test User",email:"test@test.com"}
                }
                try {

                    const response = await fetch("/api/user/login",{
                        method:"POST",
                        body:JSON.stringify({email,password}),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    })
                    const data = await response.json()
                    if (data.error) {
                        return null
                    }
                    return data
                    
                } catch (error) {
                    
                }
                
                
                return null
            },
        })
    ],
    session:{
        strategy:"jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn: "/login",
        signOut: "/logout",
    }
});

export {handler as GET , handler as POST}