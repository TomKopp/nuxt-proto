import GithubProvider from 'next-auth/providers/github';
import { NuxtAuthHandler } from '#auth';

export default NuxtAuthHandler({
    // A secret string you define, to ensure correct encryption
    secret: 'your-secret-here',
    // pages: {
    //     // Change the default behavior to use `/login` as the path for the sign-in page
    //     signIn: '/login'
    // },
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
            clientId: '5854a146b6ed03847390',
            clientSecret: '4fcd84c0ae9f1740a3e401c75900fed9628b3121'
        })
    ]
});
