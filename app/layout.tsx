import React from 'react';
import '../styles/global.css';

type Props = { children: React.ReactNode };

const RootLayout: React.FC<Props> = ({ children }) => (
  <html>
    <head>
      <title>WITNB</title>
    </head>
    <body>
      <div className="container m-4">
        <h1 className="text-3xl font-bold m-2 mb-8">
          When is the next blackout?
        </h1>
        {children}
      </div>
    </body>
  </html>
);

export default RootLayout;
