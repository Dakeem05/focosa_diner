import { Montserrat } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const xeroda = localfont({
  src: [
    {
      path: "../../public/xeroda-font/XerodaRegular-p7dwr.otf",
    },
  ],
  variable: "--font-xeroda",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="You are invited to the 'Decoding The Future' event organized by FACOSA Uniuyo."
        />
        {/* <link rel="icon" type="image/x-icon" href="@/public/favicon.ico" /> */}
        <link rel="icon" href="/assets/icon.svg" type="image/x-icon" />
        <title>Decoding The Future</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://decodingthefuture.xyz" />
        <meta property="og:title" content="Decoding The Future" />
        <meta
          property="og:description"
          content="You are invited to the 'Decoding The Future' event organized by FACOSA Uniuyo."
        />
        <meta property="og:image" content="/assets/logo.svg" />
        <meta
          name="twitter:card"
          content="You are invited to the 'Decoding The Future' event organized by FACOSA Uniuyo."
        />
        <meta
          name="twitter:url"
          content="https://decodingthefuture.xyz"
        />
        <meta name="twitter:title" content="Decoding The Future" />
        <meta
          name="twitter:description"
          content="You are invited to the 'Decoding The Future' event organized by FACOSA Uniuyo."
        />
        <meta name="twitter:image" content="/assets/logo.svg" />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
      </head>
      <body
        className={`${xeroda.variable} ${montserrat.className} font-xeroda !text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
