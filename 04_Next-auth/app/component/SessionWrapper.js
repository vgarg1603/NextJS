"use client"
const { SessionProvider } = require("next-auth/react")

const SessionWrapper = ({children}) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default SessionWrapper