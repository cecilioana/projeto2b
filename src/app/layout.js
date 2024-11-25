import "./globals.css";
import Header from './componets/Header/'


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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}