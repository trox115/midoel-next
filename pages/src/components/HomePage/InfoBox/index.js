import styled from '@emotion/styled';


function InfoBox({ title, icon, description }) {
    return (
        <Box>
            <Icon>{icon} </Icon>
            <div>
                <Title>{title}</Title>
                <SubTitle>{description}</SubTitle>
            </div>
        </Box>
    )
}

const Box = styled.div`
    width: 330px;
    height: 200px;
    display: flex;
    gap: 20px;
`

const Icon = styled.div`
    color: grey;
`

const Title = styled.h4`
    margin: 0;
    color: black;
    font-size: 18px;
    width: 100%;
    font-weight: 800;
    width: 200px;
`

const SubTitle = styled.p`
    margin-top: 10px;
    color: grey;
    font-size: 14px;
    font-weight: 400;
    width: 200px;
    text-align: justify;
    text-transform: uppercase;
`

export default InfoBox;
