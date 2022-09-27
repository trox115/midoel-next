import Footer from './src/components/footer'
import Header from './src/components/header'
import axios from 'axios';
import HomePage from './src/components/HomePage';

export default function Home({ header, image, products, featured }) {

  return (
    <>
      <Header logo={header.siteLogoUrl} items={header.headerMenuItems} siteDescription={header.siteDescription} siteLogo={header.siteLogo} siteTitle={header.siteTitle} />
      <HomePage image={ image } newProducts={products} featured={ featured }/>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`);
  const newData = await axios.get(`${process.env.NEXT_PUBLIC_URL}/wp-json/rae/v1/post?post_id=48`);
  const { data :newProducts } = await axios.get(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/get-new`);
  const { data :featured } = await axios.get(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/get-fetured`);

  return {
    props: {
      header: data.data.header || {},
      image: newData.data.post_data.attachment_image.img_src[0] || {},
      products: newProducts.products,
      featured: featured.products,
      revalidate: 1
    }
  };
}
