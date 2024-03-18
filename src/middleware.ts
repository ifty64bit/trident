import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["((?!^/upload).*)", "/api/webhooks(.*)"],
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
