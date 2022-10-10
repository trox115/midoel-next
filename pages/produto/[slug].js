import Footer from "../src/components/footer";
import Header from "../src/components/header";
import axios from 'axios';
import BreadCrumb from "../src/components/BreadCrumb/BreadCrumb";
import styled from '@emotion/styled';
import ProductImage from "../src/components/ProductImage/ProductImage";
import ProductInfo from "../src/components/ProductInfo/ProductInfo";

function Product({ product, header, footerData }) {
  console.log(product);
    return (
      <>
      <Header logo={header.siteLogoUrl} items={header.headerMenuItems} siteDescription={header.siteDescription} siteLogo={header.siteLogo} siteTitle={header.siteTitle} />
      <p className="text-3xl font-bold underline">
    </p>
      <BreadCrumb categories={[...product.categories, {name:product.name, slug: '#'}]} />
      <ProductContainer>
        <ProductImage images={product.images} />
        <ProductInfo product={product} />
      </ProductContainer>
      <Footer footerData={footerData} />
      </>

    );
}

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const getServerSideProps = async (context) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`);
  const { data: product } = await axios.get(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/get-product?slug=${context.params.slug}`);
  const { data : footerData } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/rae/v1/posts-by-tax?post_type=post&taxonomy=category&slug=footer`);

  return { props: { header: data.data.header, product: product.products[0], footerData: footerData.data } };
}

export default Product
