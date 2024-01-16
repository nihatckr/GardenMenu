
import styled from 'styled-components';
import { TextDesc, TextPrice, TextTitle } from '../Styled';

const MenuCardBeers = ({ ...props }) => {
  return (
    <Card >
      <BoxColorOverlay
        $background={'rgba(244, 135, 135, 1)'} />
      <CardBody>
        <TextTitle> {props.menu?.title} </TextTitle>
        <CardFooter>
          <Span />
          <CardPrice>
            <TextDesc>
              {props.menu?.cl}
            </TextDesc>
            <TextPrice>{props.menu?.price}</TextPrice>
          </CardPrice>
        </CardFooter>
      </CardBody>
    </Card>

  )
}

export default MenuCardBeers

const Card = styled.div`  
 display:flex;
 position:relative; 
 
`
const CardBody = styled.div`  
 display:flex; 
 height:100%;
 flex-direction:column;
 justify-content:space-between; 
 padding:5px;
`

const BoxColorOverlay = styled.div`  
background-color: ${props => props.$background} ;
 display:flex;
 position:absolute;
 width:100%;
 height:100%; 
 opacity:0.2; 
`

const CardFooter = styled.div`  
 display:flex;
 align-items:center;
 
`
const Span = styled.span` 
    width:0.05em;
    height:100%;
    background-color:#727272; 
    margin-right:5px;
    
    
`
const CardPrice = styled.div`  
  display: flex;   
  flex-direction:column;
  margin-right:5px;
`;







