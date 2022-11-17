export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
  <title>WITNB</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
