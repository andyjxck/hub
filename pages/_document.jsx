// pages/_document.jsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="The Andysocial Zone — A collection of apps built with intention. From mindful reflection to competitive gaming." />
        <meta name="keywords" content="Andysocial, Game Void, Social Void, Zen Void, Void Survival, apps, mobile games, web apps" />
        <meta name="author" content="Andrew Blewett" />
        <meta name="theme-color" content="#0a0a14" />
        
        {/* Open Graph */}
        <meta property="og:title" content="The Andysocial Zone" />
        <meta property="og:description" content="A collection of apps built with intention. From mindful reflection to competitive gaming." />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Andysocial Zone" />
        <meta name="twitter:description" content="A collection of apps built with intention." />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
