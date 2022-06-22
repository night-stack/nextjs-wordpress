import React from "react";
import Head from "next/head";
import Layout from "~/components/Layout/layout";
import Container from "~/components/Container/container";
import Navbar from "~/components/Navbar/navbar";
import Footer from "~/components/Footer/footer";

import { useRouter } from "next/router";

const Disclaimers = () => {
  const { locale } = useRouter();

  return (
    <>
      <Layout>
        <Head>
          <title>Witech Enterprise - Disclaimer</title>
        </Head>
        <Navbar />
        <div
          id="blog"
          className="bg-witech-dark-blue mx-auto text-center py-25 lg:py-25 md:py-20 text-white"
        >
          <h1 className="font-semibold text-3.5xl leading-11 mb-5">
            {locale === "en" ? "Clients Safety" : "Keamanan Klien"}
          </h1>
          <p className="text-base font-medium px-2 md:px-0">
            {locale === "en"
              ? "Read our disclaimer to understand our intention to provide security to our potential customers."
              : "Baca disclaimer kami untuk memahami niat kami untuk memberikan keamanan kepada calon pelanggan kami."}
          </p>
        </div>
        <Container>
          <div id="rule" className="flex justify-between w-full">
            <div className="text-justify w-2/3">
              <h3 className="font-semibold text-xl mb-2">
                {locale === "en" ? "Introduction" : "Pengantar"}
              </h3>
              <p className="mb-10">
                {locale === "en"
                  ? `If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at halo@witech.co.id`
                  : `Jika Anda memerlukan informasi lebih lanjut atau memiliki pertanyaan tentang disclaimer situs kami, jangan ragu untuk menghubungi kami melalui email di halo@witech.co.id`}
              </p>

              <h3 className="font-semibold text-xl mb-2">
                {locale === "en" ? "Disclaimers" : "Disclaimer"}
              </h3>
              <p className="mb-4">
                {locale === "en" ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `All the information on this website - <strong>https://witech.co.id</strong> - is published in good faith and for general information purpose only. Witech Enterprise does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (Witech Enterprise), is strictly at your own risk. Witech Enterprise will not be liable for any losses and/or damages in connection with the use of our website.`,
                    }}
                  />
                ) : (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `Semua informasi di situs web ini - <b>https://witech.co.id</b> - diterbitkan dengan itikad baik dan hanya untuk tujuan informasi umum. Witech Enterprise tidak memberikan jaminan apa pun tentang kelengkapan, keandalan, dan keakuratan informasi ini. Segala tindakan yang Anda ambil atas informasi yang Anda temukan di situs web ini (Witech Enterprise), sepenuhnya merupakan risiko Anda sendiri. Witech Enterprise tidak akan bertanggung jawab atas kerugian dan/atau kerusakan sehubungan dengan penggunaan situs web kami.`,
                    }}
                  />
                )}
              </p>
              <p className="mb-4">
                {locale === "en"
                  ? `From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.`
                  : `Dari situs web kami, Anda dapat mengunjungi situs web lain dengan mengikuti hyperlink ke situs eksternal tersebut. Meskipun kami berusaha untuk hanya menyediakan tautan berkualitas ke situs web yang bermanfaat dan etis, kami tidak memiliki kendali atas konten dan sifat situs tersebut. Tautan ke situs web lain ini tidak menyiratkan rekomendasi untuk semua konten yang ditemukan di situs ini. Pemilik situs dan konten dapat berubah tanpa pemberitahuan dan dapat terjadi sebelum kami memiliki kesempatan untuk menghapus tautan yang mungkin 'buruk'.`}
              </p>
              <p className="mb-10">
                {locale === "en"
                  ? `Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policy of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.`
                  : `Perlu diketahui juga bahwa ketika Anda meninggalkan situs web kami, situs lain mungkin memiliki kebijakan dan ketentuan privasi berbeda yang berada di luar kendali kami. Pastikan untuk memeriksa Kebijakan Privasi situs-situs ini serta "Ketentuan Layanan" mereka sebelum terlibat dalam bisnis apa pun atau mengunggah informasi apa pun.`}
              </p>

              <h3 className="font-semibold text-xl mb-2">
                {locale === "en" ? "Consent" : "Izin"}
              </h3>
              <p className="mb-10">
                {locale === "en"
                  ? `By using our website, you hereby consent to our disclaimer and agree to its terms.`
                  : `Dengan menggunakan situs web kami, Anda dengan ini menyetujui penafian kami dan menyetujui persyaratannya.`}
              </p>

              <h3 className="font-semibold text-xl mb-2">Update</h3>
              <p className="mb-10">
                {locale === "en"
                  ? `Should we update, amend or make any changes to this document, those changes will be prominently posted here.`
                  : `Jika kami memperbarui, mengubah, atau membuat perubahan apa pun pada dokumen ini, perubahan tersebut akan diposting dengan jelas di sini.`}
              </p>
            </div>
            <div id="sticky" className="w-1/3 pl-10 h-full top-5 sticky">
              <div className="p-10 border rounded-lg sticky">
                <h3 className="font-semibold text-xl mb-2">
                  {locale === "en" ? `Get a question?` : `Ada pertanyaan?`}
                </h3>
                {locale === "en"
                  ? `Let's contact us for further information.`
                  : `Yuk hubungi kami untuk informasi lebih lanjut.`}
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=628116513338&text=Hi%20Witech%20Enterprise!%0AI%20want%20to%20discuss%20something."
                  className="flex justify-center items-center py-2 px-4 bg-witech-dark-blue text-white font-semibold mt-5"
                >
                  {locale === "en" ? "Contact Us" : "Hubungi Kami"}
                  <svg
                    className="ml-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.92 11.6202C17.8724 11.4974 17.801 11.3853 17.71 11.2902L12.71 6.29019C12.6168 6.19695 12.5061 6.12299 12.3842 6.07253C12.2624 6.02207 12.1319 5.99609 12 5.99609C11.7337 5.99609 11.4783 6.10188 11.29 6.29019C11.1968 6.38342 11.1228 6.49411 11.0723 6.61594C11.0219 6.73776 10.9959 6.86833 10.9959 7.00019C10.9959 7.26649 11.1017 7.52188 11.29 7.71019L14.59 11.0002H7C6.73478 11.0002 6.48043 11.1055 6.29289 11.2931C6.10536 11.4806 6 11.735 6 12.0002C6 12.2654 6.10536 12.5198 6.29289 12.7073C6.48043 12.8948 6.73478 13.0002 7 13.0002H14.59L11.29 16.2902C11.1963 16.3831 11.1219 16.4937 11.0711 16.6156C11.0203 16.7375 10.9942 16.8682 10.9942 17.0002C10.9942 17.1322 11.0203 17.2629 11.0711 17.3848C11.1219 17.5066 11.1963 17.6172 11.29 17.7102C11.383 17.8039 11.4936 17.8783 11.6154 17.9291C11.7373 17.9798 11.868 18.006 12 18.006C12.132 18.006 12.2627 17.9798 12.3846 17.9291C12.5064 17.8783 12.617 17.8039 12.71 17.7102L17.71 12.7102C17.801 12.6151 17.8724 12.5029 17.92 12.3802C18.02 12.1367 18.02 11.8636 17.92 11.6202Z"
                      fill="#fff"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <Footer />
        </Container>
      </Layout>
    </>
  );
};

export default Disclaimers;
