// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-activities-js": preferDefault(require("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/activities.js")),
  "component---src-pages-faq-js": preferDefault(require("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/faq.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/index.js")),
  "component---src-pages-registry-js": preferDefault(require("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/registry.js")),
  "component---src-pages-rsvp-js": preferDefault(require("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/rsvp.js")),
  "component---src-pages-travel-js": preferDefault(require("/Users/hscofield/Documents/coding-docs/personal_projects/wedding-website/src/pages/travel.js"))
}

