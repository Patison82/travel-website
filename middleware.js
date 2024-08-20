import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./next-i18next.config";

const isProtectedRoute = createRouteMatcher(["/api/checkout_sessions(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

export function middleware(request) {
  return i18nRouter(request, i18nConfig);
}
