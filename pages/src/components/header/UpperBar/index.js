import styled from '@emotion/styled';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function UpperBar() {
  return (
    <BarContainer>
      <Schedule>
        <Text>
          <Icon>
            <AccessTimeIcon fontSize='11px' />
          </Icon>
          Seg-Sex: 09:00 -12:30 - 14:00 - 18:30</Text>
        <Text>
          <Icon>
            <EmailIcon fontSize='11px' />
          </Icon>
          geral@midoel.com</Text>
      </Schedule>
      <Social>
        <IconLink href='https://www.instagram.com/midoel_pub/'>
          <InstagramIcon />
        </IconLink>
        <IconLink href='https://www.facebook.com/Midoel-Publicidade-Artes-Gr%C3%A1ficas-412095118883491/'>
          <FacebookIcon />
        </IconLink>
      </Social>
    </BarContainer>


  )
}

const BarContainer = styled.div`
  width: 100%;
  display: flex;
  height: 30px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
`

const Text = styled.div`
  vertical-align: middle;
  border-right: 1px solid #e6e6e6;
  padding: 0 20px 0 20px;
  text-align: left;
`

const Icon = styled.span`
  color: red;
  font-size: small;
  color:#4297c9;
  margin-right: 5px;
  margin-top: 5px;
`

const IconLink = styled.a`
  color:#4297c9;
`

const Social = styled.div`
  display: flex;
  gap: 5px;
`

const Schedule = styled.div`
  max-width: 50%;
  display: flex;
  gap: 5px;
  font-size: 12px;
`



export default UpperBar
