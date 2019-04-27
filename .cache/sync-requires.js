const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/404.jsx"))),
  "component---src-pages-activities-jsx": hot(preferDefault(require("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/activities.jsx"))),
  "component---src-pages-faq-jsx": hot(preferDefault(require("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/faq.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/index.jsx"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/page-2.js"))),
  "component---src-pages-registry-jsx": hot(preferDefault(require("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/registry.jsx"))),
  "component---src-pages-travel-jsx": hot(preferDefault(require("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/travel.jsx")))
}

