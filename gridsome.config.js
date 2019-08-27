// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Michael Rupert',
  transformers: {
    remark: {}
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        route: '/blog/:slug'
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        latest: true,
        contentTypeName: 'Post',
        feedOptions: {
          title: 'RupertDev Blog',
          feed_url: 'https://rupertdev.com/rss.xml',
          site_url: 'https://rupertdev.com'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://rupertdev.com/' + node.path,
          author: 'Michael Rupert <michaelrupert@fastmail.com>'
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    }
  ]
}
