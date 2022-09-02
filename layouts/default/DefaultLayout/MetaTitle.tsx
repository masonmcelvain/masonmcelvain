import Head from "next/head";

type MetaTitleProps = { addendum?: string };

export function MetaTitle({ addendum }: MetaTitleProps) {
   const name = "Mason McElvain";
   const title = addendum ? `${name} - ${addendum}` : name;
   return (
      <Head>
         <title>{title}</title>
      </Head>
   );
}
