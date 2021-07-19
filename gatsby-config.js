module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Åre 2021",
  },
  plugins: [
    "gatsby-theme-material-ui",
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "-DLZ4H60Cb3Zng4nMRK3uvmwaHfdaYLeEqILyFmj4ZQ",
        spaceId: "mt0kvcyico1u",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
