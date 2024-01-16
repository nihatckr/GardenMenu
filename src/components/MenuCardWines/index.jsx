
import styled from 'styled-components';
import { TextDesc, TextPrice, TextTitle } from '../Styled';

const MenuCardWines = ({ ...props }) => {
  return (
    <Card >
      <BoxColorOverlay $background={props.menu?.color} />
      <CardBody>
        <TextTitle> {props.menu?.title} </TextTitle>
        <CardFooter>
          {props.menu?.bottle ?
            <Price menu={props.menu} />
            :
            <DefaultPrice menu={props.menu} />
          }
        </CardFooter>
      </CardBody>
    </Card>

  )
}

export default MenuCardWines

const Price = ({ ...props }) => {
  return (
    <Box>
      <BottlePrice menu={props.menu} />
      {props.menu?.glass ?

        <GlassPrice menu={props.menu} />
        :
        null
      }
      <Dlc menu={props.menu} />

    </Box>
  )
}
const BottlePrice = ({ ...props }) => {
  return (
    <Box>
      <Span />
      <BoxFlex>
        <CardPrice>
          <TextDesc>  BOTTLE  </TextDesc>
          <TextPrice> {props.menu?.bottle}</TextPrice>
        </CardPrice>
      </BoxFlex>
    </Box>
  )
}
const GlassPrice = ({ ...props }) => {
  return (
    <Box>
      <Span />
      <BoxFlex>
        <CardPrice>
          <TextDesc>  GLASS </TextDesc>
          <TextPrice>{props.menu?.glass}</TextPrice>
        </CardPrice>
      </BoxFlex>
    </Box>
  )
}

const Dlc = ({ ...props }) => {
  return (
    <Box>
      {props.menu?.dlc === true ? <TextDesc> DLC </TextDesc> : null}
    </Box>
  )
}

const DefaultPrice = ({ ...props }) => {
  return (
    <Box>
      <CardPrice>
        <TextDesc> {props.menu?.cl}  </TextDesc>
        <TextPrice>{props.menu?.price}</TextPrice>
      </CardPrice>
    </Box>
  )
}
const Box = styled.div`  
 display:flex;
align-items:flex-end;
 justify-content: space-between;
`
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







