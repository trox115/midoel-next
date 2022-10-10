import { useRouter } from 'next/router'
import axios from 'axios';
import styled from '@emotion/styled';
import Product from '../src/components/Product';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import Link from 'next/link';

function ProductCategory({ products, header, footerData }) {

  return (
    <>
      <Header logo={header.siteLogoUrl} items={header.headerMenuItems} siteDescription={header.siteDescription} siteLogo={header.siteLogo} siteTitle={header.siteTitle} />
      <ProductGrid>
        {
          products?.map(product => {
            return (
              <Product key={product.id} images={product.images} name={product.name} slug={product.slug} />
            )
          })
        }
      </ProductGrid>
      <Footer footerData={footerData} />
    </>
  )
}

const ProductGrid = styled.div`
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`

export const getServerSideProps = async (context) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`);

  const { data: products } = await axios.get(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/get-product-by-category?slug=${context.params.slug}`);
  const { data: footerData } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/rae/v1/posts-by-tax?post_type=post&taxonomy=category&slug=footer`);

  return { props: { products: products.products, header: data.data.header, footerData: footerData.data } };
}

export default ProductCategory
