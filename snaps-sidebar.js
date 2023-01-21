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
    'index',
    {
      type: 'category',
      label: 'Get started',
      link: { type: 'generated-index' },
      collapsed: false,
      items: [
        'get-started/install-snaps',
        'get-started/quickstart'
      ]
    },
    {
      type: 'category',
      label: 'How to',
      link: { type: 'generated-index' },
      items: [
        'how-to/develop-a-snap',
        'how-to/request-permissions',
        'how-to/patch-dependencies'
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      link: { type: 'generated-index' },
      items: [
        'reference/rpc-api',
        'reference/exports',
        'reference/cli'
      ]
    },
    {
      type: 'category',
      label: 'Concepts',
      link: { type: 'generated-index' },
      items: [
        'concepts/anatomy'
      ]
    },
    {
      type: 'category',
      label: 'Tutorials',
      link: { type: 'generated-index' },
      items: [
        'tutorials/tutorials'
      ]
    }
  ]
};

module.exports = sidebar;