import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../config/site.config'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Pijanify's OneDrive Index" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          {siteConfig.googleFontLinks.map(link => (
            <link key={link} rel="stylesheet" href={link} />
          ))}
        </Head>
        <body>
          <SCRIPT language="JavaScript">
var _0xdb15=["\x6D\x61\x6E\x74\x61\x70","\x4D\x61\x73\x75\x6B\x6B\x61\x6E\x20\x70\x61\x73\x73\x77\x6F\x72\x64","","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x69\x6A\x61\x6E\x69\x66\x79\x2E\x74\x6B"];var password;var pass1=_0xdb15[0];password= prompt(_0xdb15[1],_0xdb15[2]);if(password!= pass1){window[_0xdb15[3]]= _0xdb15[4]}
</SCRIPT>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
