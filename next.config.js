require("dotenv").config();

module.exports = {
  images: {
    domains: ["secure.gravatar.com", "blog.witech.co.id"],
  },
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "en",
    localeDetection: false,
  },
  env: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
  },
};
