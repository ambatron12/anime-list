import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import githubAuth from "next-auth/providers/github";
// import {} from "next-auth/providers/google";
export const authOption = {
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOption);
console.log(authOption);

export {handler as GET, handler as POST};
