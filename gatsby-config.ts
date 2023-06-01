import type { GatsbyConfig } from "gatsby"
import { createProxyMiddleware } from "http-proxy-middleware"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Antalpha Labs",
    titleTemplate: "%s · Antalpha Labs", // 添加这一行
    description: "Antalpha Labs is a web3 developer community",
    url: "https://labs.antalpha.com/",
    image:
      "https://labs.antalpha.com/static/mainlogo-eabcf082112087699216b13369d1413c.svg",
    twitterUsername: "Antalpha_Labs",
  },
  developMiddleware: (app) => {
    app.use(
      "/api", // 代理的路径
      createProxyMiddleware({
        target: "https://woshizhengqiuwan.substack.com", // 目标 API 的 URL
        changeOrigin: true, // 是否更改源（允许跨域）
      }),
    )
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antalpha Labs`,
        short_name: `AL`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        // Generate PWA icons and a favicon
        icon: `static/images/favicon.png`,
      },
    },
  ],
}

export default config
