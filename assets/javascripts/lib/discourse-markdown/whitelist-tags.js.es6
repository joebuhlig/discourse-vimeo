export function setup(helper) {
  helper.whiteList([ 'iframe[webkitallowfullscreen]' ]);
  helper.whiteList([ 'iframe[mozallowfullscreen]' ]);
  helper.whiteList([ 'iframe[allowfullscreen]' ]);
}