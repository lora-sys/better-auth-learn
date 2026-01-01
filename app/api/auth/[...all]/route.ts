import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
// api/auth/*
export const { POST, GET } = toNextJsHandler(auth);
