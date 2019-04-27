// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-jsx": () => import("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/404.jsx" /* webpackChunkName: "component---src-pages-404-jsx" */),
  "component---src-pages-activities-jsx": () => import("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/activities.jsx" /* webpackChunkName: "component---src-pages-activities-jsx" */),
  "component---src-pages-faq-jsx": () => import("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/faq.jsx" /* webpackChunkName: "component---src-pages-faq-jsx" */),
  "component---src-pages-index-jsx": () => import("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-pages-page-2-js": () => import("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */),
  "component---src-pages-registry-jsx": () => import("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/registry.jsx" /* webpackChunkName: "component---src-pages-registry-jsx" */),
  "component---src-pages-travel-jsx": () => import("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/travel.jsx" /* webpackChunkName: "component---src-pages-travel-jsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/.cache/data.json")

