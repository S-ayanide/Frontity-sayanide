const settings = {
  name: "frontity-sayanide",
  state: {
    frontity: {
      url: "https://painter255254257.wordpress.com/",
      title: "Sayan",
      description: "Let's Catch Up!",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [["Home", "/"]],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api:
            "https://public-api.wordpress.com/wp/v2/sites/painter255254257.wordpress.com/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
