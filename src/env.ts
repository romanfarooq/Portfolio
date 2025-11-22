import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    RESEND_API_KEY: z.string().min(1)
  },
  runtimeEnv: {
    RESEND_API_KEY: process.env.RESEND_API_KEY
  }
});
