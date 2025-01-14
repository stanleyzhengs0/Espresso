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
                    scope: "email profile",
                    access_type: "offline",
                    prompt: "consent"
                },
            },
        }),
    ],
   
    callbacks:{
        async jwt({account, profile, token}){
            if (account){
                token.accessToken = account.access_token,
                token.refreshToken = account.refresh_token 
                token.idToken = account.id_token || null; // Handle missing id_token
                token.provider = account.provider
            }

            if (profile){
            token.profile = profile
            }

            return token

        },

        async session({session, token}){
            // console.log("session callback authconfig", {session, token})
            return {
                ...session, 
                user: {
                  ...session.user, 
                  id: token.id,
                },
                accessToken: token.accessToken,
                refreshToken: token.refreshToken
              }
        }
    }
})