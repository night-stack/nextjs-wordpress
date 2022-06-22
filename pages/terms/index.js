import React from "react";
import Head from "next/head";
import Layout from "~/components/Layout/layout";
import Container from "~/components/Container/container";
import Navbar from "~/components/Navbar/navbar";
import Footer from "~/components/Footer/footer";

import { useRouter } from "next/router";

const Terms = () => {
  const { locale } = useRouter();

  return (
    <>
      <Layout>
        <Head>
          <title>Witech Enterprise - Terms & Conditions</title>
        </Head>
        <Navbar />
        <div
          id="blog"
          className="bg-witech-dark-blue mx-auto text-center py-25 lg:py-25 md:py-20 text-white"
        >
          <h1 className="font-semibold text-3.5xl leading-11 mb-5">
            {locale === "en" ? "Terms and Conditions" : "Syarat dan Ketentuan"}
          </h1>
          <p className="text-base font-medium px-2 md:px-0">
            {locale === "en"
              ? "Read our terms and conditions to understand our intention to provide security for a better experiences."
              : "Baca syarat dan ketentuan kami untuk memahami niat kami untuk memberikan keamanan untuk pengalaman yang lebih baik."}
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
                {locale === "en"
                  ? "Welcome to Witech Enterprise!"
                  : "Selamat datang di Witech Enterprise!"}
              </p>
              <p className="mb-4">
                {locale === "en"
                  ? `These terms and conditions outline the rules and regulations for the use of Witech Enterprise's Website, located at https://witech.co.id.`
                  : `Syarat dan ketentuan ini menguraikan aturan dan ketentuan penggunaan Situs Witech Enterprise, yang terletak di https://witech.co.id.`}
              </p>
              <p className="mb-4">
                {locale === "en"
                  ? `By accessing this website we assume you accept these terms and conditions. Do not continue to use Witech Enterprise if you do not agree to take all of the terms and conditions stated on this page.`
                  : `Dengan mengakses situs web ini, kami menganggap Anda menerima syarat dan ketentuan ini. Jangan terus menggunakan Witech Enterprise jika Anda tidak setuju untuk mengambil semua syarat dan ketentuan yang tercantum di halaman ini.`}
              </p>
              <p className="mb-4">
                {locale === "en"
                  ? `The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves.`
                  : `Terminologi berikut berlaku untuk Syarat dan Ketentuan ini, Pernyataan Privasi dan Pemberitahuan Penafian dan semua Perjanjian: "Klien", "Anda" dan "Anda" mengacu pada Anda, orang yang masuk ke situs web ini dan mematuhi syarat dan ketentuan Perusahaan. "Perusahaan", "Kami Sendiri", "Kami", "Kami" dan "Kami", mengacu pada Perusahaan kami. "Pihak", "Para Pihak", atau "Kami", mengacu pada Klien dan kami sendiri.`}
              </p>
              <p className="mb-10">
                {locale === "en"
                  ? `All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.`
                  : `Semua istilah mengacu pada penawaran, penerimaan, dan pertimbangan pembayaran yang diperlukan untuk melakukan proses bantuan kami kepada Klien dengan cara yang paling tepat untuk tujuan yang jelas dalam memenuhi kebutuhan Klien sehubungan dengan penyediaan layanan yang dinyatakan Perusahaan, sesuai dengan dan tunduk pada, hukum yang berlaku di Belanda. Setiap penggunaan terminologi di atas atau kata lain dalam bentuk tunggal, jamak, huruf besar dan/atau dia, dianggap dapat dipertukarkan dan oleh karena itu mengacu pada yang sama.`}
              </p>

              <h3 className="font-semibold text-xl mb-2">Cookies</h3>
              <p className="mb-4">
                {locale === "en"
                  ? `We employ the use of cookies. By accessing Witech Enterprise, you agreed to use cookies in agreement with the Witech Enterprise's Privacy Policy.`
                  : `Kami menerapkan penggunaan cookie. Dengan mengakses Witech Enterprise, Anda setuju untuk menggunakan cookie sesuai dengan Kebijakan Privasi Witech Enterprise.`}
              </p>
              <p className="mb-10">
                {locale === "en"
                  ? `Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.`
                  : `Sebagian besar situs web interaktif menggunakan cookie untuk memungkinkan kami mengambil detail pengguna untuk setiap kunjungan. Cookie digunakan oleh situs web kami untuk mengaktifkan fungsionalitas area tertentu untuk memudahkan orang mengunjungi situs web kami. Beberapa mitra afiliasi/iklan kami juga dapat menggunakan cookie.`}
              </p>

              <h3 className="font-semibold text-xl mb-2">
                {locale === "en" ? "License" : "Lisensi"}
              </h3>
              <p className="mb-4">
                {locale === "en"
                  ? `Unless otherwise stated, Witech Enterprise and/or its licensors own the intellectual property rights for all material on Witech Enterprise. All intellectual property rights are reserved. You may access this from Witech Enterprise for your own personal use subjected to restrictions set in these terms and conditions.`
                  : `Kecuali pada pernyataan lain, Witech Enterprise dan/atau pemberi lisensinya memiliki hak kekayaan intelektual untuk semua materi di Witech Enterprise. Semua hak kekayaan intelektual dilindungi. Anda dapat mengakses ini dari Witech Enterprise untuk penggunaan pribadi Anda dengan batasan yang diatur dalam syarat dan ketentuan ini.`}
              </p>
              <div className="mb-4">
                {locale === "en"
                  ? "You must not :"
                  : "Kamu tidak diperbolehkan :"}
                <ul className="list-disc mt-4 pl-5">
                  <li>
                    {locale === "en"
                      ? `Republish material from Witech Enterprise`
                      : `Publikasikan ulang materi dari Witech Enterprise`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `Sell, rent or sub-license material from Witech Enterprise`
                      : `Menjual, menyewakan, atau mensublisensikan materi dari Witech Enterprise`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `Reproduce, duplicate or copy material from Witech Enterprise`
                      : `Mereproduksi, menggandakan, atau menyalin materi dari Witech Enterprise`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `Redistribute content from Witech Enterprise`
                      : `Distribusikan ulang konten dari Witech Enterprise`}
                  </li>
                </ul>
              </div>
              <p className="mb-4">
                {locale === "en"
                  ? "This Agreement shall begin on the date hereof."
                  : "Perjanjian ini akan dimulai pada tanggal penerbitan Perjanjian ini."}
              </p>
              <p className="mb-4">
                {locale === "en"
                  ? `Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Witech Enterprise does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Witech Enterprise,its agents and/or affiliates.`
                  : `Bagian dari situs web ini menawarkan kesempatan bagi pengguna untuk memposting dan bertukar pendapat dan informasi di area tertentu dari situs web. Witech Enterprise tidak memfilter, mengedit, menerbitkan, atau meninjau Komentar sebelum kehadirannya di situs web. Komentar tidak mencerminkan pandangan dan opini Witech Enterprise, agen dan/atau afiliasinya`}
              </p>
              <p className="mb-4">
                {locale === "en"
                  ? `Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Witech Enterprise shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.`
                  : `Komentar mencerminkan pandangan dan pendapat orang yang memposting pandangan dan pendapat mereka. Sejauh diizinkan oleh undang-undang yang berlaku, Witech Enterprise tidak akan bertanggung jawab atas Komentar atau untuk setiap kewajiban, kerusakan atau pengeluaran yang disebabkan dan/atau diderita sebagai akibat dari penggunaan dan/atau posting dan/atau tampilan Komentar pada situs ini.`}
              </p>
              <p className="mb-4">
                {locale === "en"
                  ? `Witech Enterprise reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.`
                  : `Witech Enterprise berhak untuk memantau semua Komentar dan menghapus Komentar apa pun yang dapat dianggap tidak pantas, menyinggung, atau menyebabkan pelanggaran terhadap Syarat dan Ketentuan ini.`}
              </p>
              <div className="mb-4">
                {locale === "en"
                  ? "You warrant and represent that"
                  : "Kamu menjamin dan menyatakan bahwa"}
                <ul className="list-disc mt-4 pl-5">
                  <li>
                    {locale === "en"
                      ? `You are entitled to post the Comments on our website and have all necessary licenses and consents to do so`
                      : `Kamu berhak memposting Komentar di situs web kami dan memiliki semua lisensi dan persetujuan yang diperlukan untuk melakukannya`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party`
                      : `Komentar tidak menyerang hak kekayaan intelektual apa pun, termasuk namun tidak terbatas pada hak cipta, paten, atau merek dagang dari pihak ketiga mana pun`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy`
                      : `Komentar tidak mengandung materi yang memfitnah, memfitnah, menyinggung, tidak senonoh atau melanggar hukum yang merupakan pelanggaran privasi`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity`
                      : `Komentar tidak akan digunakan untuk meminta atau mempromosikan bisnis atau kebiasaan atau menyajikan aktivitas komersial atau aktivitas yang melanggar hukum`}
                  </li>
                </ul>
              </div>
              <p className="mb-10">
                {locale === "en"
                  ? `You hereby grant Witech Enterprise a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.`
                  : `Kamu dengan ini memberikan Witech Enterprise lisensi non-eksklusif untuk menggunakan, mereproduksi, mengedit, dan mengizinkan orang lain untuk menggunakan, mereproduksi, dan mengedit Komentar Anda dalam segala bentuk, format, atau media.`}
              </p>

              <h3 className="font-semibold text-xl mb-2">
                {locale === "en"
                  ? "Hyperlinking to our Content"
                  : "Hyperlink ke Konten kami"}
              </h3>
              <div className="mb-4">
                {locale === "en"
                  ? `The following organizations may link to our Website without prior written approval :`
                  : `Organisasi berikut dapat menautkan ke Situs Web kami tanpa persetujuan tertulis sebelumnya :`}
                <ul className="list-disc mt-4 pl-5">
                  <li>
                    {locale === "en"
                      ? "Government agencies;"
                      : "Agensi pemerintahan;"}
                  </li>
                  <li>
                    {locale === "en" ? `Search engines;` : `Mesin pencari;`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `News organizations;`
                      : `Organisasi berita;`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and`
                      : `Distributor direktori online dapat menautkan ke Situs Web kami dengan cara yang sama seperti mereka menautkan tautan ke Situs Web bisnis lain yang terdaftar; dan`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Website.`
                      : `Bisnis Terakreditasi di seluruh sistem kecuali meminta organisasi nirlaba, pusat perbelanjaan amal, dan kelompok penggalangan dana amal yang mungkin tidak hyperlink ke Situs Web kami.`}
                  </li>
                </ul>
              </div>
              <p className="mb-4">
                {locale === "en"
                  ? `These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.`
                  : `Organisasi-organisasi ini dapat menautkan ke beranda kami, ke publikasi, atau ke informasi Situs Web lainnya selama tautan tersebut: (a) sama sekali tidak menipu; (b) tidak secara keliru menyiratkan sponsorship, pengesahan atau persetujuan dari pihak yang menautkan dan produk dan/atau layanannya; dan (c) sesuai dengan konteks situs pihak yang menautkan.`}
              </p>
              <div className="mb-4">
                {locale === "en"
                  ? `We may consider and approve other link requests from the following types of organizations :`
                  : `Kami dapat mempertimbangkan dan menyetujui permintaan tautan lain dari jenis organisasi berikut:`}
                <ul className="list-disc mt-4 pl-5">
                  <li>
                    {locale === "en"
                      ? `commonly-known consumer and/or business information sources;`
                      : `sumber informasi konsumen dan/atau bisnis yang umum diketahui;`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `dot.com community sites;`
                      : `situs komunitas dot.com;`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `associations or other groups representing charities;`
                      : `asosiasi atau kelompok lain yang mewakili badan amal;`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `online directory distributors;`
                      : `distributor direktori online;`}
                  </li>
                  <li>
                    {locale === "en" ? `internet portals;` : `portal internet;`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `accounting, law and consulting firms; and`
                      : `firma akuntansi, hukum dan konsultan; dan`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `educational institutions and trade associations.`
                      : `lembaga pendidikan dan asosiasi perdagangan.`}
                  </li>
                </ul>
              </div>
              <p className="mb-4">
                {locale === "en"
                  ? `We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Witech Enterprise; and (d) the link is in the context of general resource information.`
                  : `Kami akan menyetujui permintaan tautan dari organisasi ini jika kami memutuskan bahwa: (a) tautan tidak akan membuat kami terlihat tidak baik bagi diri kami sendiri atau bisnis terakreditasi kami; (b) organisasi tidak memiliki catatan negatif apapun dengan kami; (c) manfaat bagi kami dari visibilitas hyperlink mengkompensasi tidak adanya Witech Enterprise; dan (d) tautannya berada dalam konteks informasi sumber daya umum.`}
              </p>
              <p className="mb-4">
                {locale === "en"
                  ? `These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.`
                  : `Organisasi-organisasi ini dapat menautkan ke beranda kami selama tautan tersebut: (a) sama sekali tidak menipu; (b) tidak secara keliru menyiratkan sponsorship, dukungan atau persetujuan dari pihak yang menghubungkan dan produk atau layanannya; dan (c) sesuai dengan konteks situs pihak yang menautkan.`}
              </p>
              <p className="mb-4">
                {locale === "en"
                  ? `If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Witech Enterprise. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.`
                  : `Jika Anda adalah salah satu organisasi yang tercantum dalam paragraf 2 di atas dan tertarik untuk menautkan ke situs web kami, Anda harus memberi tahu kami dengan mengirimkan email ke Witech Enterprise. Harap sertakan nama Anda, nama organisasi Anda, informasi kontak serta URL situs Anda, daftar URL apa pun yang ingin Anda tautkan ke Situs Web kami, dan daftar URL di situs kami yang ingin Anda tuju tautan. Tunggu 2-3 minggu untuk tanggapan.`}
              </p>
              <div className="mb-4">
                {locale === "en"
                  ? `Approved organizations may hyperlink to our Website as follows :`
                  : `Organisasi yang disetujui dapat membuat hyperlink ke Situs Web kami sebagai berikut :`}
                <ul className="list-disc mt-4 pl-5">
                  <li>
                    {locale === "en"
                      ? `By use of our corporate name; or`
                      : `Dengan menggunakan nama perusahaan kami; atau`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `By use of the uniform resource locator being linked to; or`
                      : `Dengan menggunakan pencari sumber daya seragam yang ditautkan ke; atau`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.`
                      : `Dengan menggunakan deskripsi lain apa pun dari Situs Web kami yang ditautkan, yang masuk akal dalam konteks dan format konten di situs pihak yang menautkan.`}
                  </li>
                </ul>
              </div>
              <p className="mb-10">
                {locale === "en"
                  ? `No use of Witech Enterprise's logo or other artwork will be allowed for linking absent a trademark license agreement.`
                  : `Tidak diperbolehkan penggunaan logo Witech Enterprise atau karya seni lainnya yang diizinkan untuk menghubungkan jika tidak ada perjanjian lisensi merek dagang.`}
              </p>

              <h3 className="font-semibold text-xl mb-2">
                {locale === "en" ? "iFrames" : "iFrame"}
              </h3>
              <p className="mb-10">
                {locale === "en"
                  ? `Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.`
                  : `Tanpa persetujuan dan izin tertulis sebelumnya, Anda tidak boleh membuat bingkai di sekitar Halaman Web kami yang mengubah presentasi visual atau tampilan Situs Web kami dengan cara apa pun.`}
              </p>

              <h3 className="font-semibold text-xl mb-2">
                {locale === "en"
                  ? "Content Liability"
                  : "Tanggung Jawab Konten"}
              </h3>
              <p className="mb-10">
                {locale === "en"
                  ? `We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.`
                  : `Kami tidak akan bertanggung jawab atas konten apa pun yang muncul di Situs Web Anda. Anda setuju untuk melindungi dan membela kami dari semua klaim yang muncul di Situs Web Anda. Tidak boleh ada tautan yang muncul di Situs Web mana pun yang dapat ditafsirkan sebagai fitnah, cabul, atau kriminal, atau yang melanggar, jika tidak, melanggar, atau mendukung pelanggaran atau pelanggaran lain terhadap, hak pihak ketiga mana pun.`}
              </p>

              <h3 className="font-semibold text-xl mb-2">
                {locale === "en" ? "Reservation of Rights" : "Reservasi Hak"}
              </h3>
              <p className="mb-10">
                {locale === "en"
                  ? `We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.`
                  : `Kami berhak meminta Anda menghapus semua tautan atau tautan tertentu ke Situs Web kami. Anda menyetujui untuk segera menghapus semua tautan ke Situs Web kami berdasarkan permintaan. Kami juga berhak untuk mengubah syarat dan ketentuan ini dan kebijakan tautannya kapan saja. Dengan terus menautkan ke Situs Web kami, Anda setuju untuk terikat dan mengikuti syarat dan ketentuan penautan ini.`}
              </p>

              <h3 className="font-semibold text-xl mb-2">
                {locale === "en"
                  ? "Removal of links from our website"
                  : "Penghapusan tautan dari situs web kami"}
              </h3>
              <p className="mb-4">
                {locale === "en"
                  ? `If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.`
                  : `Jika Anda menemukan tautan apa pun di Situs Web kami yang menyinggung karena alasan apa pun, Anda bebas untuk menghubungi dan memberi tahu kami kapan saja. Kami akan mempertimbangkan permintaan untuk menghapus tautan tetapi kami tidak berkewajiban untuk atau lebih atau untuk menanggapi Anda secara langsung.`}
              </p>
              <p className="mb-10">
                {locale === "en"
                  ? `We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.`
                  : `Kami tidak memastikan bahwa informasi di situs web ini benar, kami tidak menjamin kelengkapan atau keakuratannya; kami juga tidak berjanji untuk memastikan bahwa situs web tetap tersedia atau materi di situs web selalu diperbarui.`}
              </p>

              <h3 className="font-semibold text-xl mb-2">Disclaimer</h3>
              <div className="mb-4">
                {locale === "en"
                  ? `To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will :`
                  : `Sejauh diizinkan oleh hukum yang berlaku, kami mengecualikan semua pernyataan, jaminan, dan ketentuan yang berkaitan dengan situs web kami dan penggunaan situs web ini. Tidak ada dalam penafian ini yang akan :`}
                <ul className="list-disc mt-4 pl-5">
                  <li>
                    {locale === "en"
                      ? `limit or exclude our or your liability for death or personal injury;`
                      : `membatasi atau mengecualikan tanggung jawab kami atau Kamu atas kematian atau cedera pribadi;`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `limit or exclude our or your liability for fraud or fraudulent misrepresentation;`
                      : `membatasi atau mengecualikan tanggung jawab kami atau Kamu atas penipuan atau pernyataan yang salah;`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `limit any of our or your liabilities in any way that is not permitted under applicable law; or`
                      : `membatasi kewajiban kami atau Kamu dengan cara apa pun yang tidak diizinkan menurut hukum yang berlaku; atau`}
                  </li>
                  <li>
                    {locale === "en"
                      ? `exclude any of our or your liabilities that may not be excluded under applicable law.`
                      : `mengecualikan salah satu kewajiban kami atau Kamu yang mungkin tidak dikecualikan menurut hukum yang berlaku.`}
                  </li>
                </ul>
              </div>
              <p className="mb-4">
                {locale === "en"
                  ? `The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.`
                  : `Batasan dan larangan tanggung jawab yang diatur dalam Bagian ini dan di tempat lain dalam penafian ini: (a) tunduk pada paragraf sebelumnya; dan (b) mengatur semua kewajiban yang timbul berdasarkan disclaimer, termasuk kewajiban yang timbul dalam kontrak, dalam perbuatan melawan hukum dan untuk pelanggaran kewajiban hukum.`}
              </p>
              <p className="mb-10">
                {locale === "en"
                  ? `As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.`
                  : `Selama situs web dan informasi serta layanan di situs web disediakan secara gratis, kami tidak akan bertanggung jawab atas kehilangan atau kerusakan apa pun.`}
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

export default Terms;
