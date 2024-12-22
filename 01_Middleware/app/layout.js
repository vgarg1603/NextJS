import "./globals.css";
import Navbar from "@/component/Navbar";


export const metadata = {
  title: "Blog",
  description: "I am a blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
