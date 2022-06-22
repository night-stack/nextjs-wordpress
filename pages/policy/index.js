import React from "react";
import Head from "next/head";
import Layout from "~/components/Layout/layout";
import Container from "~/components/Container/container";
import Navbar from "~/components/Navbar/navbar";
import Footer from "~/components/Footer/footer";

import { useRouter } from "next/router";

const Policy = () => {
  const { locale } = useRouter();

  return (
    <>
      <Layout>
        <Head>
          <title>Witech Enterprise - Privacy Policy</title>
        </Head>
        <Navbar />
        <div
          id="blog"
          className="bg-witech-dark-blue mx-auto text-center py-25 lg:py-25 md:py-20 text-white"
        >
          <h1 className="font-semibold text-3.5xl leading-11 mb-5">
            {locale === "en" ? "Privacy Policy" : "Kebijakan Privasi"}
          </h1>
          <p className="text-base font-medium px-2 md:px-0">
            {locale === "en"
              ? "Read our privacy policy to understand our intention to provide security to our potential customers"
              : "Baca kebijakan privasi kami untuk memahami niat kami untuk memberikan keamanan kepada calon pelanggan kami."}
          </p>
        </div>
        <Container>
          <div id="rule" className="flex justify-between w-full">
            <div className="text-justify w-2/3">
              <h3 className="font-semibold text-xl mb-2">
                {locale === "en" ? "Introduction" : "Pengantar"}
              </h3>
              <p className="mb-4">
                {locale === "en"
                  ? `At Witech Enterprise, accessible from https://witech.co.id, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Witech Enterprise and how we use it.`
                  : `Di Witech Enterprise, dapat diakses dari https://witech.co.id, salah satu prioritas utama kami adalah privasi pengunjung kami. Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh Witech Enterprise dan bagaimana kami menggunakannya.`}
              </p>
              <p className="mb-10">
                {locale === "en"
                  ? `If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.`
                  : `Jika Anda memiliki pertanyaan tambahan atau memerlukan informasi lebih lanjut tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi kami.`}
              </p>

              <h3 className="font-semibold text-xl mb-2">
                {locale === "en" ? "Log Files" : "File Log"}
              </h3>
              <p className="mb-4">
                {locale === "en"
                  ? `Witech Enterprise follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics.`
                  : `Witech Enterprise mengikuti prosedur standar menggunakan file log. File-file ini mencatat pengunjung ketika mereka mengunjungi situs web. Semua perusahaan hosting melakukan ini dan merupakan bagian dari analisis layanan hosting.`}
              </p>
              <p className="mb-4">
                {locale === "en"
                  ? `The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.`
                  : `Informasi yang dikumpulkan oleh file log termasuk alamat protokol internet (IP), jenis browser, Penyedia Layanan Internet (ISP), cap tanggal dan waktu, halaman rujukan/keluar, dan mungkin jumlah klik. Ini tidak terkait dengan informasi apa pun yang dapat diidentifikasi secara pribadi.`}
              </p>
              <p className="mb-10">
                {locale === "en"
                  ? `The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.`
                  : `Tujuan dari informasi ini adalah untuk menganalisis tren, mengelola situs, melacak pergerakan pengguna di situs web, dan mengumpulkan informasi demografis.`}
              </p>

              <h3 className="font-semibold text-xl mb-2">
                {locale === "en"
                  ? "Cookies and Web Beacons"
                  : "Cookie dan Web Beacon"}
              </h3>
              <p className="mb-4">
                {locale === "en"
                  ? `Like any other website, Witech Enterprise uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.`
                  : `Seperti situs web lainnya, Witech Enterprise menggunakan 'cookies'. Cookie ini digunakan untuk menyimpan informasi termasuk preferensi pengunjung, dan halaman di situs web yang diakses atau dikunjungi pengunjung. Informasi tersebut digunakan untuk mengoptimalkan pengalaman pengguna dengan menyesuaikan konten halaman web kami berdasarkan jenis browser pengunjung dan/atau informasi lainnya.`}
              </p>
              <p className="mb-10">
                {locale === "en"
                  ? `For more general information on cookies, please read "Cookies" article from Terms & Conditions page.`
                  : `Untuk informasi lebih umum tentang cookie, silakan baca artikel "Cookies" dari halaman Syarat & Ketentuan.`}
              </p>

              <h3 className="font-semibold text-xl mb-2">
                {locale === "en" ? "Privacy Policies" : "Kebijakan Privasi"}
              </h3>
              <p className="mb-4">
                {locale === "en"
                  ? `You may consult this list to find the Privacy Policy for each of the advertising partners of Witech Enterprise.`
                  : `Anda dapat berkonsultasi dengan daftar ini untuk menemukan Kebijakan Privasi untuk masing-masing mitra periklanan Witech Enterprise.`}
              </p>
              <p className="mb-4">
                {locale === "en"
                  ? `Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Witech Enterprise, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.`
                  : `Server iklan atau jaringan iklan pihak ketiga menggunakan teknologi seperti cookie, JavaScript, atau Web Beacon yang digunakan dalam iklan masing-masing dan tautan yang muncul di Witech Enterprise, yang dikirim langsung ke browser pengguna. Mereka secara otomatis menerima alamat IP Anda ketika ini terjadi. Teknologi ini digunakan untuk mengukur efektivitas kampanye iklan mereka dan/atau untuk mempersonalisasi konten iklan yang Anda lihat di situs web yang Anda kunjungi.`}
              </p>
              <p className="mb-10">
                {locale === "en"
                  ? `Note that Witech Enterprise has no access to or control over these cookies that are used by third-party advertisers.`
                  : `Perhatikan bahwa Witech Enterprise tidak memiliki akses atau kontrol terhadap cookie ini yang digunakan oleh pengiklan pihak ketiga.`}
              </p>

              <h3 className="font-semibold text-xl mb-2">
                {locale === "en"
                  ? "Third Party Privacy Policies"
                  : "Kebijakan Privasi Pihak Ketiga"}
              </h3>
              <p className="mb-4">
                {locale === "en"
                  ? `Witech Enterprise's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.`
                  : `Kebijakan Privasi Pihak Ketiga Oleh karena itu, kami menyarankan Anda untuk berkonsultasi dengan Kebijakan Privasi masing-masing dari server iklan pihak ketiga ini untuk informasi lebih rinci. Ini mungkin termasuk praktik dan instruksi mereka tentang cara memilih keluar dari opsi tertentu.`}
              </p>
              <p className="mb-10">
                {locale === "en"
                  ? `You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?`
                  : `Anda dapat memilih untuk menonaktifkan cookie melalui opsi browser individual Anda. Untuk mengetahui informasi lebih rinci tentang manajemen cookie dengan browser web tertentu, dapat ditemukan di situs web masing-masing browser. Apa Itu Cookie?`}
              </p>

              <h3 className="font-semibold text-xl mb-2">
                {locale === "en" ? `Children's Information` : `Informasi Anak`}
              </h3>
              <p className="mb-4">
                {locale === "en"
                  ? `Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.`
                  : `Bagian lain dari prioritas kami adalah menambahkan perlindungan bagi anak-anak saat menggunakan internet. Kami mendorong orang tua dan wali untuk mengamati, berpartisipasi, dan/atau memantau dan memandu aktivitas online mereka.`}
              </p>
              <p className="mb-10">
                {locale === "en"
                  ? `Witech Enterprise does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.`
                  : `Witech Enterprise tidak secara sadar mengumpulkan Informasi Identifikasi Pribadi apa pun dari anak di bawah 13 tahun. Jika Anda berpikir bahwa anak Anda memberikan informasi semacam ini di situs web kami, kami sangat menganjurkan Anda untuk menghubungi kami segera dan kami akan melakukan upaya terbaik kami untuk segera menghapus informasi tersebut dari catatan kami.`}
              </p>

              <h3 className="font-semibold text-xl mb-2">
                {locale === "en"
                  ? "Online Privacy Policy Only"
                  : "Hanya Kebijakan Privasi Online"}
              </h3>
              <p className="mb-10">
                {locale === "en"
                  ? `This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Witech Enterprise. This policy is not applicable to any information collected offline or via channels other than this website.`
                  : `Kebijakan Privasi ini hanya berlaku untuk aktivitas online kami dan berlaku untuk pengunjung situs web kami sehubungan dengan informasi yang mereka bagikan dan/atau kumpulkan di Witech Enterprise. Kebijakan ini tidak berlaku untuk informasi apa pun yang dikumpulkan secara offline atau melalui saluran selain situs web ini.`}
              </p>

              <h3 className="font-semibold text-xl mb-2">
                {locale === "en" ? "Consent" : "Izin"}
              </h3>
              <p className="mb-10">
                {locale === "en"
                  ? `By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.`
                  : `Dengan menggunakan situs web kami, Anda dengan ini menyetujui Kebijakan Privasi kami dan menyetujui Syarat dan Ketentuannya.`}
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

export default Policy;
