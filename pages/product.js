import Layout from "../components/MyLayout.js";
import fetch from "isomorphic-unfetch";

const Product = props => (
  <Layout>
    <h1>{props.product.title.rendered}</h1>
    <p>{props.product.excerpt.rendered}</p>
  </Layout>
);

Product.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(
    `http://swancollections.tilnet.co.il/wp-json/wp/v2/product/${id}`
  );
  const product = await res.json();

  console.log(`Fetched product: ${product.id}`);

  return { product };
};

export default Product;
