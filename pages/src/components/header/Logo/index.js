import Image from "next/image";
import styled from '@emotion/styled';

function Logo({image}) {

    return (
      <Container>
        <div>
          <Image src={image} alt='midoel-logo' height='50px' width='180px'/>
        </div>
      </Container>
    )
}

export default Logo

const Container = styled.div`
  with: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  padding: 40px;
`