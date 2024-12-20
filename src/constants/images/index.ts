const IMAGES = {
  template: {
    header: {
      logoWhite: require('@/assets/images/template/header/logo-white.svg')
        .default.src,
    },
    footer: {
      logoIcon: require('@/assets/images/template/footer/logo-icon.png').default
        .src,
      downloadAppFromCafebazzar:
        require('@/assets/images/template/footer/download-app-from-cafebazar.svg')
          .default.src,
      downloadAppFromIapps:
        require('@/assets/images/template/footer/download-app-from-iapps.svg')
          .default.src,
      namadSamandehi:
        require('@/assets/images/template/footer/namad-samandehi.png').default
          .src,
      namadSep: require('@/assets/images/template/footer/namad-sep.jpg').default
        .src,
      namadEtehadieh:
        require('@/assets/images/template/footer/namad-etehadieh.png').default
          .src,
    },
  },
  routes: {
    auth: {
      bottomBackground:
        require('@/assets/images/routes/auth/bottom-background.svg').default
          .src,
      logoPurple: require('@/assets/images/routes/auth/logo-purple.svg').default
        .src,
    },
  },
};

export default IMAGES;
