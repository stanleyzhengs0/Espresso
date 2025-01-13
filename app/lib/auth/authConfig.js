import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

export const {handlers, auth} = NextAuth({

    trustHost: true,
    secret: process.env.NEXTAUTH_SECRET,

    session:{
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },

    pages:{
        signIn: "/auth/sign-in"
    },
    providers:[
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
            // Requesting sepcific scopes for Google API's
            params:{
                // response_type: "code",
                scope: 'openid https://www.googleapis.com/auth/drive.activity https://www.googleapis.com/auth/drive email profile',
                access_type: "offline",
                prompt: "consent"
                
            },
            },
        }),
    ],

    callbacks:{
        async jwt(){

        },

        async session(){

        }
    }
})