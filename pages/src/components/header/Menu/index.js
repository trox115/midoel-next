import Link from "next/link"
import styled from '@emotion/styled'

function Menu({ items }) {

  return (
      <Navigation>
      {
        items.length > 0 && items.map(item => {

          return(
             <Link href={`${item.url}`} key={item.ID} passHref><a>{item.title}</a></Link>
          )
        })
      }
      </Navigation>
    )
}

const Navigation = styled.nav`
  width: 100%;
  height: 40px;
  background-color: #4297c9;
  color: white;
  display: flex;
  gap: 60px;
  align-items: center;
  padding-left: 40px;
  box-sizing: border-box;
  
  a {
    text-decoration: none;
    font-size: 15px;
    color: white;
    font-weight:800;
  }
`


export default Menu
