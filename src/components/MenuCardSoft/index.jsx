
import styled from 'styled-components';
import { TextDesc, TextPrice, TextTitle } from '../Styled';

const MenuCardSoft = ({ ...props }) => {
  return (
    <Card>
      <BoxColorOverlay $background={props.menu?.color} />
      <CardBody>
        <TextTitle> {props.menu?.title} </TextTitle>
        <CardFooter>
          {props.menu?.title ? <Span /> : null}
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

export default MenuCardSoft

const Card = styled.div`  
 display:flex;
 position:relative; 
 min-height:44px;
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
 align-items:flex-end;
 height:100%;
`
const Span = styled.span` 
  width:1px;
  height:20px;
  background-color:#727272; 
  
  margin-right:5px;
`
const CardPrice = styled.div`  
  display: flex;   
  flex-direction:column;
  margin-right:5px;
  
`;







