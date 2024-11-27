
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: new Map([
['index.csr.html', {size: 503, hash: '15d4f03f81d8d7fd45ab5603d81e5807e9a8bf1ddcb4553a43b82d2ca4ef724d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1016, hash: '4ad9bd0c74f420ce0795e652ee5cd6b5564a1c0661792dffe63e50a4d167d384', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 842, hash: '5d3e611eea581cf1a9fc855c51933b3743313253743ccecd26cc3b29076b0173', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
