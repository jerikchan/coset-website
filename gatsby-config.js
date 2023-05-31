
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: "Antalpha Labs",
    titleTemplate: "%s · Antalpha Labs", // 添加这一行
    description: "Antalpha Labs is a web3 developer community",
    url:"https://hackhack111-8mf4.vercel.app",
    image:"https://hackhack111-8mf4.vercel.app/static/mainlogo-eabcf082112087699216b13369d1413c.svg",
    twitterUsername:"",
    // 其他字段...
  },
  developMiddleware: (app) => {
    app.use(
      "/api", // 代理的路径
      createProxyMiddleware({
        target: "https://woshizhengqiuwan.substack.com", // 目标 API 的 URL
        changeOrigin: true, // 是否更改源（允许跨域）
      })
    );
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://hackhack111-8mf4.vercel.app", // Used for sitemap generation    https://labs.antalpha.com
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "Antalpha Labs", // Used in manifest.json
          shortName: "Antalpha Labs", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },



        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
  ],
};
