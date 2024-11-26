import "./globals.css";
import Header from './componets/Header/'
import Footer from "./componets/Footer";


export const metadata = {
  title: "Yuqi",
  description: "G idle",
  charset : 'UTF-8',
  author: 'Ana Paula Cecilio',
  Keywords: 'G Idle, kpop, carreira, membros, músicas',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}