export default {
  preact: true,
  inlineCss: true,
  // extractCssChunks: {},
  siteRoot: process.env.PUBLIC_URL,
  getSiteData: () => ({
    title: 'SPB Frontend Competition',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/App'
      }
    ]
  },
}
