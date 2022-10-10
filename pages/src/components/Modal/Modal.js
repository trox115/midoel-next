import styled from '@emotion/styled';

function Modal({closeModal}) {
  const onSubmit = () => {

  }

  return (
    <>
        <OverLay onClick={closeModal} />       
           <Form onSubmit={onSubmit}>
            <FormTitle>Pedir Informações</FormTitle>
            <FormLabel>O seu nome:</FormLabel>
           <FormInput type='text' required/>
           <FormLabel>O seu Email</FormLabel>
           <FormInput required type='email' />
           
         </Form>
         </>
    )
}

const OverLay = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4);
`

const FormTitle = styled.h3`
  font-size: 23px;
  text-align: center;
`

const FormInput = styled.input`
  width:100%;
  height: 40px;
  border-radius:8px;
  border: 1px solid black;
  margin-bottom: 40px;
`

const FormLabel = styled.label`
  font-size: 20px;
  font-weight: 700;
`

const Form = styled.form`
  left: 25%;
  top: 25%;
  margin: auto;
  background: white;
  position: absolute;
  z-index: 2;
  padding: 40px;
  min-width: 400px;
  min-height: 600px;
  border-radius: 8px;
`

export default Modal
