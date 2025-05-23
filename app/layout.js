import "./globals.css";

export const metadata = {
  title: "Author",
  description: "Created By Faisal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
