import { ViewTransitions } from "next-view-transitions";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import "./globals.css";

export const metadata = {
  title: "Author",
  description: "Created By Faisal",
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </body>
      </html>
    </ViewTransitions>
  );
}
