import Head from "next/head";
import "./globals.css";
import Sidemenu from "./components/sidemenu";

export const metadata = {
  title: "Parada - Communication & design studio",
  description: "",
  openGraph: {
    title: "Parada - Communication & design studio",
    siteName: "Parada - Communication & design studio",
    images: [
      {
        url: "/og-1200x630.png",
        width: "1200",
        height: "630",
      },
    ],
  },
  // ogImage: "/og-1200x630.png", // Provide the correct path to your image
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" /> */}
        {/* Add other meta tags or links here */}
      </Head>
      <body
        id="body"
        className="bg-[#0D0D0D] 
      xl:overflow-hidden lg:overflow-hidden overflow-auto 
      min-h-screen min-w-screen"
      >
        <div className="flex change-on-mobile relative align-middle justify-between min-w-screen min-h-screen">
          <Sidemenu />
          {children}
        </div>

        {/* <div className="grid align-middle min-h-screen min-w-screen w-full h-full custom-grid">
        </div> */}
      </body>
    </html>
  );
}
