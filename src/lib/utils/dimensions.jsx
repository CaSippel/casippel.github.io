import * as Constants from '@lib/constants';

const isScreenMobile = () => {
  return window.innerWidth <= Constants.BREAKPOINTS.mobile;
};

export {
  isScreenMobile,
}
