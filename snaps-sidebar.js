/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebar = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // snapsSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  snapsSidebar: [
    "index",
    {
      type: "category",
      label: "Get started",
      link: { type: "generated-index", slug: "/get-started" },
      collapsed: false,
      items: [{ type: "autogenerated", dirName: "get-started" }],
    },
    {
      type: "category",
      label: "How to",
      link: { type: "generated-index", slug: "/how-to" },
      items: [{ type: "autogenerated", dirName: "how-to" }],
    },
    {
      type: "category",
      label: "Concepts",
      link: { type: "generated-index", slug: "/concepts" },
      items: [{ type: "autogenerated", dirName: "concepts" }],
    },
    {
      type: "category",
      label: "Tutorials",
      link: { type: "generated-index", slug: "/tutorials" },
      items: [{ type: "autogenerated", dirName: "tutorials" }],
    },
    {
      type: "category",
      label: "Reference",
      link: { type: "generated-index", slug: "/reference" },
      items: [
        {
          type: "doc",
          id: "reference/rpc-api",
        },
        {
          type: "doc",
          id: "reference/exports",
        },
        {
          type: "doc",
          id: "reference/permissions",
        },
        {
          type: "category",
          label: "Snaps command line interface",
          link: {
            type: "doc",
            id: "reference/cli/index",
          },
          items: [
            {
              type: "doc",
              id: "reference/cli/options",
            },
            {
              type: "doc",
              id: "reference/cli/subcommands",
            },
          ],
        },
        {
          type: "category",
          label: "Keyring API",
          link: {
            type: "doc",
            id: "reference/keyring-api/index",
          },
          customProps: {
            flask_only: true,
          },
          items: require("./snaps/reference/keyring-api/typedoc-sidebar.cjs"),
        },
      ],
    },
  ],
};

module.exports = sidebar;
