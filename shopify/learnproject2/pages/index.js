import {Button} from "@shopify/polaris";
import {withRouter} from "next/router.js";
import Link from "next/link.js";

const Index = ({router}) => {

  return (
    <div>
      This is index page
      <Button onClick={() => router.push({ pathname: "/", query: {test: 111}})}>Go to index page</Button>
      <Link href="/products">Go to products</Link>
    </div>
  );
};

export default withRouter(Index);

