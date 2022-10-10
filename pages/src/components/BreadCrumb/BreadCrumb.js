
import styled from '@emotion/styled';
import Link from 'next/link';

function BreadCrumb({categories}) {
    return (
        <BreadCrumbContainer>
        {
          categories?.map(category => {
            return (
              <BreadCrumbField key={category.id}>
                <Link href={`/product-category/${category.slug}`} >{`${category.name} -> `}</Link>
              </BreadCrumbField>
            )
          })
        }
        </BreadCrumbContainer>
    )
}

const BreadCrumbContainer = styled.div`
  width: 100%;
  display: flex;
  font-size: 22px;
  color: black;
  padding: 40px;
  box-sizing: border-box;
`

const BreadCrumbField = styled.span`
  cursor: pointer;
  a {
    text-decoration: none;
  }

  &:hover {
    color: blue;
  }
`

export default BreadCrumb
