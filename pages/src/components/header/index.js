import Head from "next/head";
import styled from '@emotion/styled';
import UpperBar from "./UpperBar";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = ({ siteTitle, siteDescription,logo, items,...props }) => {

  return (
    <>
      <Head>
        <title>{siteTitle} - {siteDescription} </title>
      </Head>
      <HeaderContainer>
        <UpperBar />
        <Logo image={ logo } />
        <Menu items={items} />
      </HeaderContainer>
    </>
  )
}

const HeaderContainer = styled.header`
  width: 100%;
`

export default Header;