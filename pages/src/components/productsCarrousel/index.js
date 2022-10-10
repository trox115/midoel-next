import styled from '@emotion/styled';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import ArrowButton from '../Buttons/ArrowButton';
import Product from '../Product';


function ProductsCarrousel({ title, products }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);

  const handleNext = useCallback(() => {
    if (ref.current) {
      const container = ref.current;
      container.scrollTo(offset + 300, 0);
      setOffset(offset + 300);
    }
  }, [offset]);

  const handlePrevious = useCallback(() => {
    if (ref.current) {
      const container = ref.current;
      container.scrollTo(offset - 300, 0);
      setOffset(offset - 300);
    }
  }, [offset])

  useLayoutEffect(() => {
    setWidth(ref.current.scrollWidth - ref.current.clientWidth);
  }, []);

  return (
    <>
      <Title>
        {title}
        <ArrowButton onClick={handleNext} disabled={offset >= width} />
        <ArrowButton isNext={false} onClick={handlePrevious} disabled={offset === 0} />
      </Title>
      <ProductsCarrouselContainer ref={ref}>
        {
          products?.map(product => {
            return (
              <Product key={product.id} images={product.images} name={product.name} />
            )
          })
        }
      </ProductsCarrouselContainer>
    </>
  )
}

const ProductsCarrouselContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  gap: 20px;
  padding-left: 40px;
  padding-right: 40px;
  scroll-behavior: smooth;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Title = styled.h4`
  font-size: 22px;
  padding-left: 40px;
  display: flex;
  align-items: center;
  gap: 20px;
`

export default ProductsCarrousel;
