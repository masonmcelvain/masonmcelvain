export const BUTTONDOWN_API_KEY = requireEnvVariable(
   process.env.BUTTONDOWN_API_KEY,
   "BUTTONDOWN_API_KEY",
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
