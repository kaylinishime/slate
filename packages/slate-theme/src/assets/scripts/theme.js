import '../styles/theme.scss';

import {pageLinkFocus} from '@shopify/slate-a11y';
import {cookiesEnabled} from '@shopify/slate-cart';
import {wrapTable, wrapIframe} from '@shopify/slate-rte';

window.slate = window.slate || {};
window.theme = window.theme || {};

/* = =============== Templates ================ */
// import './templates/customers-addresses';
// import './templates/customers-login.js';

$(document).ready(() => {
  // Common a11y fixes
  pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', evt => {
    pageLinkFocus($(evt.currentTarget.hash));
  });

  // Target tables to make them scrollable
  const tableSelectors = '.rte table';

  wrapTable({
    $tables: $(tableSelectors),
    tableWrapperClass: 'rte__table-wrapper',
  });

  // Target iframes to make them responsive
  const iframeSelectors =
    '.rte iframe[src*="youtube.com/embed"],' +
    '.rte iframe[src*="player.vimeo"]';

  wrapIframe({
    $iframes: $(iframeSelectors),
    iframeWrapperClass: 'rte__video-wrapper',
  });

  // Apply a specific class to the html element for browser support of cookies.
  if (cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace(
      'supports-no-cookies',
      'supports-cookies'
    );
  }
});
