import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

function Accordeon({ items }) {
  const [open, setOpen] = useState(null);

  const handleClick = (index) => {
    if(open === null){
      setOpen(index)
    } else if(open === index){
      console.log(open === index)
      setOpen(null);
    } else {
      setOpen(index);
    }
  }
  
  return (
    <AccordeonContainer>
      {
        items?.map((item, index) => {
          console.log(index);
          return (
            <AccordeonBody key={index} className={open === index ? 'open' : ''}>
              <AccordeonTitle onClick={() => handleClick(index)} key={index}>
                {item.name}
                <div>{ open === index ? '-' : '+' }</div>
              </AccordeonTitle>
              <BoddyContainer dangerouslySetInnerHTML={{__html:item.value}} className={open === index ? 'open' : ''} />

            </AccordeonBody>
          )
        })
      }
    </AccordeonContainer>
  )
}

const AccordeonContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`

const AccordeonBody = styled.div`
  margin-top: 10px;
  box-sizing: border-box;
  height: 70px;
  overflow: hidden;
  transition: height 1s ease;
  border-bottom: 1px solid gray;

  &.open {
    height: auto; 
   }
`

const BoddyContainer = styled.div`
   &.open{
    padding:5px 40px;
    box-sizing: border-box;
   }
`

const AccordeonTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  box-sizing: border-box;
  cursor: pointer;
`

export default Accordeon
