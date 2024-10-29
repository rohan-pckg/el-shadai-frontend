/* eslint-disable react/prop-types */
import "./global.css";

export const metadata = {
  title: "El-Shadai",
  description: "committed to delivering the best primary healthcare.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/favicon1.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
