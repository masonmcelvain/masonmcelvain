import Link from "next/link";

export default function NotFound() {
   return (
      <main className="flex flex-1 flex-col items-center justify-center">
         <h1 className="text-8xl font-bold">404</h1>
         <p className="mt-4 text-xl">Page not found</p>
         <Link
            href="/"
            className="text-foreground-muted hover:text-foreground mt-6 underline underline-offset-4"
         >
            Go home
         </Link>
      </main>
   );
}
