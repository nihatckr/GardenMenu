
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Mono from '../components/Icons/Mono';
import MonoTerrace from '../components/Icons/Monoterrace';
import Navigation from '../components/Navigation';


const Qr = () => {

  return (
    <Container>
      <Wrap>
        <LogoBox>
          <Link to={'/gardenmenu'}>
            <Mono />

          </Link>
        </LogoBox>
      </Wrap>
      <Wrap>
        <Navigation />
      </Wrap>
      <Wrap>
        <LogoBox>
          <MonoTerrace />
        </LogoBox>
      </Wrap>

    </Container >
  )
}

export default Qr


const Container = styled.section`   
    display:flex; 
    position:relative;
    flex-direction:column;      
    padding-top:20px!important; 
    width:430px!important;  
    justify-content:center!important;
    align-items:center!important;
`

const Wrap = styled.div`   
margin-top: 20px!important;   
margin-bottom: 20px!important;   
width:100%!important;   
 
`;

const LogoBox = styled.div`  
 display:flex;
 justify-content:center;
 justify-items:center!important;
 width:100%!important;  
`;