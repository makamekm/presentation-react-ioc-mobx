module.exports = {
  plugins: [
    "@wardpeet/gatsby-plugin-static-site",
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-jsx",
    {
      resolve: "gatsby-theme-mdx-deck",
      options: {
        cli: true,
        contentPath: "index.mdx",
      },
    },
    {
      resolve: "gatsby-plugin-compile-es6-packages",
      options: {
        modules: ["mdx-deck", "@mdx-deck/themes"],
      },
    },
    // You can add additional scripts here
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_CHTML",
      },
    },
  ],
};
