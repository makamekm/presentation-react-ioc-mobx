const src = process.env.__SRC__;

module.exports = {
  plugins: [
    "@wardpeet/gatsby-plugin-static-site",
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
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://unpkg.com/blotterjs-fork@0.1.0/build/blotter.min.js",
      },
    },
  ],
};
