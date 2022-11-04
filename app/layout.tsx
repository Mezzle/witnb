export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://raw.githubusercontent.com/elad2412/the-new-css-reset/main/css/reset.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
