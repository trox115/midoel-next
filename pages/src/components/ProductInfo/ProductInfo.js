import styled from '@emotion/styled';
import { useState } from 'react';
import Accordeon from '../Accordeon/Accordeon';
import Modal from '../Modal/Modal';

function ProductInfo({product}) {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <InformationContainer>
        <TitleContainer>
          {product.name}
        </TitleContainer>
        <Information>
          {`SKU: ${ product.sku}`}
        </Information>
        <Information>
          {product.price ? product.price : 'Preço sob consulta'}
        </Information>
        {product.price && <Button>Adicionar ao carrinho</Button> }
        {!product.price && <Button onClick={() => setShowForm(true)}>Pedir Informações</Button> }
        <Accordeon items={[{name: 'Descrição curta', value: product.description },{name: 'Descrição Longa', value: product.description }]} />
      </InformationContainer>
      {
        showForm && <Modal closeModal={ () => setShowForm(false)} />
      }
      </>
    )
}

const InformationContainer = styled.div`
  width: 25%;
`

const TitleContainer = styled.h1`
  font-size: 22px;
  margin-top: 0;
`

const Information = styled.p`
  font-size: 18px;
`

const Button = styled.button`
  background: transparent;
  border: 1px solid black;
  color: black;
  width: 100%;
  font-size: 20px;
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover{
    background: black;
    color: white;
  }
`


export default ProductInfo
