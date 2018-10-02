const fetch = require("isomorphic-unfetch");

module.exports = {
  async exportPathMap() {
    const response = await fetch(
      "http://swancollections.tilnet.co.il/wp-json/wp/v2/product"
    );
    const productList = await response.json();

    const pages = productList.reduce(
      (pages, product) =>
        Object.assign({}, pages, {
          [`/product/${product.id}`]: {
            page: "/product",
            query: { id: product.id }
          }
        }),
      {}
    );

    return Object.assign({}, pages, {
      "/": { page: "/" },
      "/about": { page: "/about" }
    });
  }
};
