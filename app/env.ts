export const APP_ORIGIN = requireEnvVariable(
   process.env.APP_ORIGIN,
   "APP_ORIGIN",
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
