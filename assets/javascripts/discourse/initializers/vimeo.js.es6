import { withPluginApi } from 'discourse/lib/plugin-api';

function initializeVimeo(api) {

}

export default {
  name: "discourse-vimeo",

  initialize(container) {
    const siteSettings = container.lookup('site-settings:main');
    const currentUser = container.lookup('current-user:main');

    if (siteSettings.discourse_vimeo_enabled) {
      withPluginApi('0.5', initializeVimeo);
    }
  }
};