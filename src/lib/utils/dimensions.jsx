import * as Constants from '@lib/constants';

const isScreenMobile = () => {
  const width = window.innerWidth > window.outerWidth ? window.outerWidth : window.innerWidth; 
  return width <= Constants.BREAKPOINTS.mobile;
};

export {
  isScreenMobile,
}
