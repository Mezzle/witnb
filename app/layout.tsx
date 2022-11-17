import React from 'react';
import '../styles/global.css';


export default function RootLayout({
  children,
  params: {location, level},
}: {
  children: React.ReactNode;
  params: {location?: string; level?: number};
}) {
  return (
    <html>
    <head>
      <title>WITNB</title>
    </head>
    <body>
    <div className="container m-4">
      <h1 className="text-3xl font-bold m-2 mb-8">When is the next blackout? </h1>
      {children}
    </div>
    </body>
    </html>
  );
}
