module.exports = {
  siteMetadata: {
    title: "Your Site Title",
    titleTemplate: "%s · Your Site Name", // 添加这一行
    description: "Your site description",
    url:"",
    image:"",
    twitterUsername:"",
    // 其他字段...
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://labs.antalpha.com", // Used for sitemap generation
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
