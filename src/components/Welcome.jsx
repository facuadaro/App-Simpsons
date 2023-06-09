import styled from 'styled-components'
import Logo from '../the-simpson.png'

function Welcome(props) {

  const { clickeo } = props

 
  return (
    <ContentLogo>
        <WelcomeText>Bienvenido, para poder utilizar las frases pincha sobre la imagen</WelcomeText>
        <ImageLogo src={Logo} onClick={clickeo} alt="Logo simpsons"/>
    </ContentLogo>
  )
}


const ImageLogo = styled.img`
  width: 450px;
  height: auto;

  &:hover {
    cursor: pointer;
  }
`

const ContentLogo = styled.div`
  width: 100%;
  text-align: center;
`

const WelcomeText = styled.p`
  color: #2a9d8f;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px 0;
  font-size: 25px;
`

export default Welcome