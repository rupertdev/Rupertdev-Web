// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import BootstrapVue from "bootstrap-vue";
import Meta from "vue-meta";

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Work+Sans",
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto",
  });

  // Set default layout as a global component
  Vue.use(BootstrapVue);
  Vue.use(Meta);
  Vue.component("Layout", DefaultLayout);
}
