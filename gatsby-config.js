const src = process.env.__SRC__;

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    "gatsby-plugin-styled-jsx",
    {
      resolve: "gatsby-theme-mdx-deck",
      options: {
        cli: true,
        contentPath: src,
      },
    },
    {
      resolve: "gatsby-plugin-compile-es6-packages",
      options: {
        modules: ["mdx-deck", "@mdx-deck/themes"],
      },
    },
  ],
};
