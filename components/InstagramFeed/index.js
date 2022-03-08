import React, { useState } from "react";
import { useRouter } from "next/router";
import DropdownLink from "../DropdownLink";
import FeedCard from "./FeedCard";

const InstagramFeed = ({ posts }) => {
  const router = useRouter();
  const [filter, setFilter] = useState("All");
  const socials = [
    {
      name: "Witech Enterprise",
      link: "https://www.instagram.com/hooela.app/",
    },
    {
      name: "Hooela",
      link: "https://www.instagram.com/witechenterprise/",
    },
  ];
  const dummyFeed = [
    {
      displayName: "Witech Enterprise",
      image: "/img/dummy_witech.jpg",
      date: "23 Feb, 2022",
      caption:
        "Dear Winners (Witech Enterprise Partners), berikut hal yang perlu Winners ketahui jika ingin menggunakan aplikasi android pada Windows 11. Pada 2021 lalu Microsoft mengumumkan bahwa aplikasi Android akan dapat berjalan di PC atau laptop berbasis Windows 11. Artinya Winners dapat menggunakan aplikasi seperti TikTok, Instagram dan sebagainya langsung melalui PC atau laptop",
      feedImage: "/img/feed_dummy_1.jpg",
    },
    {
      displayName: "Witech Enterprise",
      image: "/img/dummy_witech.jpg",
      date: "18 Feb, 2022",
      caption:
        "Ternyata Bukan Cuma Dino Run, Ada beberapa Game Tersembunyi di Google, berikut infonya. Tic Tac Toe. Game ini adalah permainan sederhana dari papan dengan ukuran 3X3 yang dimainkan oleh dua orang.",
      feedImage: "/img/feed_dummy_2.jpg",
    },
    {
      displayName: "Hooela",
      image: "/img/dummy_hooela.jpg",
      date: "22 Feb, 2022",
      caption:
        "Perkenalkan, kami Hooela! Hooela hadir untuk membantu teman - teman yang memiliki usaha makanan seperti food court, cafe, atau restoran agar memiliki sistem manajemen yang lebih praktis, mulai dari sistem pemesanan, hingga laporan catatan penjualan otomatis yang modern.",
      feedImage: "/img/feed_dummy_3.jpg",
    },
    {
      displayName: "Hooela",
      image: "/img/dummy_witech.jpg",
      date: "22 Feb, 2022",
      caption:
        "Pake Hooela banyak loh benefitnya buat usaha kamu, berikut perbedaannya antara tempat makan yang memakai Hooela dengan yang tidak.",
      feedImage: "/img/feed_dummy_4.jpg",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div className="flex font-bold text-lg items-center">
          Social Media Feed
          <ul className="flex ml-10 text-sm">
            <li
              onClick={() => setFilter("All")}
              className={`list-none mr-5 cursor-pointer ${
                filter === "All" ? "font-semibold" : "link-inactive font-medium"
              }`}
            >
              All
            </li>
            {socials.map((social, index) => (
              <li
                key={index}
                onClick={() => setFilter(social.name)}
                className={`list-none mr-5 cursor-pointer ${
                  social.name === filter
                    ? "font-semibold"
                    : "link-inactive font-medium"
                }`}
              >
                {social.name}
              </li>
            ))}
          </ul>
        </div>
        <DropdownLink datas={socials} title="View More" />
      </div>
      <FeedCard datas={dummyFeed} />
    </div>
  );
};

export default InstagramFeed;