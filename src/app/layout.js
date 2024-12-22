// app/layout.jsx
'use client';

import { useServerInsertedHTML } from 'next/navigation';
import './globals.css'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    return sheet.getStyleElement();
  });

  return (
    <html lang="en">
      <body>
        <StyleSheetManager sheet={sheet.instance}>{children}</StyleSheetManager>
      </body>
    </html>
  );
}
