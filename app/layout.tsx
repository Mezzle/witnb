import React from 'react';
import '../styles/global.css';

type Props = { children: React.ReactNode };

const RootLayout: React.FC<Props> = ({ children }) => (
  <html>
    <head>
      <title>WITNB</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <div className="container m-4">
        <span className="text-2xl font-bold mb-8">
          When is the next blackout?
        </span>
        {children}
      </div>
    </body>
  </html>
);

export default RootLayout;
