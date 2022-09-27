
import styled from '@emotion/styled';
import InfoBox from './InfoBox';
import PrintIcon from '@mui/icons-material/Print';
import CampaignIcon from '@mui/icons-material/Campaign';
import FoundationIcon from '@mui/icons-material/Foundation';
import ProductsCarrousel from '../productsCarrousel';

function HomePage({ image, newProducts, featured }) {

  return (
    <>
      <ImageBackground url={image} />
      <InfoContainer> 
        <InfoBox title='Artes Gráficas' icon={<PrintIcon fontSize='large'/>} description='Conheça o nosso potencial e alguns dos nossos trabalhos no setor das artes gráficas' />
        <InfoBox title='Publicidade' icon={<CampaignIcon fontSize='large'/>} description='COM OS EQUIPAMENTOS ADEQUADOS, PRODUZIMOS PUBLICIDADE GRÁFICA PERSONALIZADA E ÚNICA ' />
        <InfoBox title='Mobiliário Urbano' icon={<FoundationIcon fontSize='large'/>} description='DISPOMOS DE TODO O TIPO DE SOLUÇÕES PARA MOBILIÁRIO URBANO E SINALÉTICA' />
      </InfoContainer>
      <ProductsCarrousel title='Acabados de chegar' products={ newProducts }/>
      { featured.length > 0 && <ProductsCarrousel title='Produtos em destaque' products={ featured }/>}
    </>
  )
}

const ImageBackground = styled.div`
min-height: 610px;
width: 100%;
background-image: url(${ props => props.url});
background-size: cover
`

const InfoContainer = styled.div`
  width:100%;
  display: flex;
  justify-content:center;
  margin-top: 50px;
`

export default HomePage
