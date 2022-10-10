import styled from '@emotion/styled';
import Image from 'next/image';

const Footer = ({footerData}) => {
  return (
    <FooterContainer>
      {
        footerData.posts?.map(post => {
          return (
            <Column key={ post.id }>
              <Title>
                {post.title}
              </Title>
              <Image src={post.attachment_image.img_src[0]} width='300px' height='100px' alt={post.title} />
            </Column>
          )
        })
      }
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  background: black;
  padding: 40px;
  color: white;
  width: 100%;
  display:flex;
  gap: 40px;
  margin-top: 40px;
  box-sizing: border-box;
`

const Column = styled.div`
  width: 25%;
`

const Title = styled.h3`
  font-size: 20px;
  color: white;
`

export default Footer;