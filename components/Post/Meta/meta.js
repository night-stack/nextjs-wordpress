import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:standard"
      />
      <link rel="canonical" href="https://www.witech.co.id/" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content="Kami adalah software house yang menyediakan jasa pembuatan aplikasi & website custom di Medan. Punya proyek? Kontak sekarang"
      />
      <meta
        property="og:title"
        content="Witech Enterprise | Your Business Solution"
      />
      <meta
        name="og:description"
        content="Kami adalah software house yang menyediakan jasa pembuatan aplikasi & website custom di Medan. Punya proyek? Kontak sekarang"
      />
      <meta
        property="og:image"
        content="https://blog.witech.co.id/wp-content/uploads/2022/03/og-image.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://blog.witech.co.id/wp-content/uploads/2022/03/og-image.png"
      />
      <meta property="og:image:width" content="513" />
      <meta property="og:image:height" content="513" />
      <meta property="og:image:alt" content="thumbnail witech enterprise" />
      <meta property="og:image:type" content="image/jpeg" />
    </Head>
  );
}
