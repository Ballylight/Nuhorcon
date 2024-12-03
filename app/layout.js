// import "./globals.css";
// import Header from "./components/HomeLayouts/Header"
// // import Footer from "./components/HomeLayouts/FooterWrapper"
// import { Roboto } from 'next/font/google';
// import { mergeText } from "./components/addons/addons";

// const inter = Roboto({
//   weight: ['300', '400', '500', '700', '900'],
//   subsets: ['greek'],
//   display: 'swap',
//   fallback: ['Arial', 'sans-serif'],
// });

// export const metadata = {
//   title: "PngFitFam",
//   description: "A Healthier LifeStyle",
// };

// export default function RootLayout(props: any) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Meta Viewport for Responsive Design */}
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//       </head>
//       <body>
//         <Header/>
//         <main className={mergeText(inter.className)}>{props.children}</main>
//         {/* <FooterWrapper /> */}
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import Header from "./components/HomeLayouts/Header"
// import FooterWrapper from "@/components/HomeLayouts/FooterWrapper";
import { Roboto } from 'next/font/google';
import { mergeText } from "./components/addons/addons";
import FooterWrapper from "./components/HomeLayouts/FooterWrapper";
const inter = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['greek'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const metadata = {
  title: "Scolarite",
  description: "Empowering Your Educational Journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta Viewport for Responsive Design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Header />
        <main className={inter.className}>{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
