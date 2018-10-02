import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <Layout>
    <h1>Swan Collection</h1>
    <ul>
      {props.products.map(product => (
        <li key={product.id}>
          <Link
            as={`/product/${product.id}`}
            href={`/product?id=${product.id}`}
          >
            <a>{product.title.rendered}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const res = await fetch(
    "http://swancollections.tilnet.co.il/wp-json/wp/v2/product"
  );
  const data = await res.json();

  console.log(`Products data fetched. Count: ${data.length}`);

  return {
    products: data
  };
};

export default Index;
