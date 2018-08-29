'use strict';

/**
 * Build a URL by transform relative url to absolute one
 */
module.exports = function buildAbsolutePath(href) {
  var link = document.createElement('a');
  link.href = href;
  return link.href;
};
