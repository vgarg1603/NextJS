import NextAuth from 'next-auth'
// import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
        // OAuth authentication providers...
        GitHubProvider({
            clientId: example.env.ID,
            clientSecret: example.env.SECRET
        })
    ]
})

export {handler as GET, handler as POST}
