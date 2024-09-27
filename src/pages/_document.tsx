import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />
      <script>
        AOS.init();
      </script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
