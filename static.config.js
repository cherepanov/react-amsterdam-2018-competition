import React, { Component } from 'react'
// TODO: import css
const css = '*{font-family:sans-serif}.fonts-loaded *{font-family:\'Open Sans\'!important}html{line-height:1.15}a{background-color:transparent}strong{font-weight:bolder}video{display:inline-block}img{border-style:none}a,body,div,footer,h1,h2,header,html,img,p,small,strong,video{margin:0;padding:0;border:0;font:100% inherit;vertical-align:baseline}footer,header{display:block}body{line-height:1}.HH{padding:0;color:#00dd3b;overflow:hidden;position:relative;min-height:100vh;flex-direction:column}.HH,.HLS{display:flex}.HLS{margin-bottom:40px}.HL{height:80px}.HL + .HL{margin-left:40px}.HT{font:900 100px/1.16 sans-serif;padding-bottom:.1em;color:#fff}video{z-index:-1;object-fit:cover}.HO,video{position:absolute;width:100%;height:100%;top:0;left:0}.HO{z-index:0}.HO:after{content:\'\';background-image:linear-gradient(45deg,black 26%,transparent 25%,transparent 75%,black 75%,black),linear-gradient(45deg,black 26%,transparent 25%,transparent 75%,black 75%,black);background-size:4px 4px;background-position:-4px -4px,2px 2px;opacity:.8;top:0;left:0;bottom:0;right:0;position:absolute;z-index:-1;background-color:rgba(10,10,10,0.4)}.HW{position:relative;min-height:100%;z-index:1;display:flex;flex-direction:column;justify-content:center;align-items:center;align-content:center;flex-grow:1}.BB{display:flex;padding:32px;flex-direction:column;background:#1a1d1b;color:#fff}.BC{max-width:1260px;margin:0 auto;position:relative;padding:34px 0 80px;color:#fff}.BC p{font:200 20px/1.6 sans-serif;max-width:960px;margin:18px auto}.BC strong{font-weight:900}.BT{width:100%;font:900 68px/1.12 sans-serif;text-transform:uppercase;margin:14px 0 46px;background:linear-gradient(150deg,#9f0,#00dd3b);background-clip:text;-webkit-background-clip:text;color:transparent}.BIS{display:flex;justify-content:center;height:280px}.BIS img{width:calc(100% / 3);height:280px;margin-bottom:20px;flex-grow:1;object-fit:cover}.BT small{font:100 34px/1.4 sans-serif;margin:58px 0 14px;color:#fff}.FF{display:flex;justify-content:center;padding:0 32px 32px;background:#1a1d1b;color:#fff}a,a:visited{color:#007bff;text-decoration:none;background-color:transparent}a:hover{text-decoration:underline}.FF a,.FF a:visited{color:inherit}.FF a:hover{color:#0056b3}';

export default {
  preact: true,
  inlineCss: true,
  // extractCssChunks: {},
  siteRoot: process.env.PUBLIC_URL,
  renderToHtml: (render, Comp, meta) => {
    const html = render(<Comp />)
    meta.styleTags = React.createElement('style', {
      dangerouslySetInnerHTML: {
        __html: css
      }
    });
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {renderMeta.styleTags}
        </Head>
        <Body>{children}</Body>
        </Html>
      )
    }
  },
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
