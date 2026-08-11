export const RESEND_API_KEY = requireEnvVariable(
   process.env.RESEND_API_KEY,
   "RESEND_API_KEY",
);

export const RESEND_AUDIENCE_ID = requireEnvVariable(
   process.env.RESEND_AUDIENCE_ID,
   "RESEND_AUDIENCE_ID",
);

function requireEnvVariable(
   env: string | null | undefined,
   envName: string,
): string {
   if (env == null) {
      throw new Error(`environment variable "${envName}" is not defined`);
   }
   return env;
}
