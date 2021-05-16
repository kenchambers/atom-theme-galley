import WebFont from 'webfontloader';

const initializeWebFont = function () {
  WebFont.load({
    google: {
      families: ['Comfortaa', 'Share Tech Mono', 'Fugaz One']
    }
  });
}

export default initializeWebFont
