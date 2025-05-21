import "./globals.css";

export const metadata = {
  title: "Author",
  description: "Created By Faisal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" /> */}
      <body>
        {children}
      </body>
    </html>
  );
}
