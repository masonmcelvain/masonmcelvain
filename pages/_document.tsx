import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <link
                  href="https://fonts.googleapis.com/css2?family=Muli&display=optional"
                  rel="stylesheet"
               />
               <Favicon />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;

function Favicon() {
   return (
      <>
         <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
         />
         <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
         />
         <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
         />
         <link rel="manifest" href="/favicon/site.webmanifest" />
         <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
         />
         <meta name="msapplication-TileColor" content="#da532c" />
         <meta name="theme-color" content="#ffffff" />
      </>
   );
}
