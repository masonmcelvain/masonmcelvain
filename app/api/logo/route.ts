const max = 24;

export async function GET() {
   const int = Math.floor(Math.random() * max + 1);
   return Response.json(`/assets/images/logos/logo-${int}.png`);
}
