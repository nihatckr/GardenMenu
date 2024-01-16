
import styled from 'styled-components';
import { TextDesc, TextPrice, TextTitle } from '../Styled';

const MenuDrinksCard = ({ ...props }) => {
  return (
    <Card >
      <BoxColorOverlay $background={props.menu?.color} />
      <CardBody>
        <TextTitle> {props.menu?.title} </TextTitle>
        <CardFooter>
          <Span />
          {props.menu?.bottle ? <BoxFlex>
            <CardPrice>
              <TextDesc>
                BOTTLE
              </TextDesc>
              <TextPrice> {props.menu?.bottle}</TextPrice>
            </CardPrice>
            <Span />
            <CardPrice>
              <TextDesc>
                GLASS
              </TextDesc>
              <TextPrice>{props.menu?.glass}</TextPrice>
            </CardPrice>

            {props.menu?.dlc === true ? <TextDesc style={{
              marginBottom: '2px'
            }}>DLC</TextDesc> : null}
          </BoxFlex>
            : <CardPrice>
              <TextDesc>
                {props.menu?.cl}
              </TextDesc>
              <TextPrice>{props.menu?.price}</TextPrice>
            </CardPrice>}
        </CardFooter>
      </CardBody>
    </Card>

  )
}

export default MenuDrinksCard

const Card = styled.div`  
 display:flex;
 position:relative; 
 :last-child{
  grid-column:1/4
 }
`
const CardBody = styled.div`  
 display:flex; 
 height:100%;
 flex-direction:column;
 justify-content:space-between; 
 padding:5px;
`
const BoxFlex = styled.div`  
 display:flex;  
 flex-direction:row;
 align-items:flex-end;
 justify-content:space-between; 
 
 height:100%; 
 
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







