import styled from '@emotion/styled';
import { useRouter } from 'next/router';


function Product({ name, price, images, slug }) {
  const router = useRouter();

  return (
    <ProductContainer onClick={() => router.push(`/produto/${slug}`)}>
      <ProductImage images={ images } />
      <ProductName>
        {`${name} - ${ price ? price : 'preço sob consulta' }`}
      </ProductName>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid grey;
  cursor: pointer;
`

const ProductImage = styled.div`
  background-image: url(${ props => props.images[0].src});
  background-size:cover;
  background-repeat:no-repeat;
  width:300px;
  height:200px;

  &:hover{
       background-image: url(${ props => props.images.length > 1 ? props.images[1].src : props.images[0].src});
       width:400px;
       height:200px;
  }
`

const ProductName = styled.h3`
  font-size: 18px;
  padding: 10px;
`

export default Product
