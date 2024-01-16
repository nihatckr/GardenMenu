
import styled from 'styled-components'
import { TextDesc, TextPrice, TextSubTitle, TextTitle } from '../Styled'

const MenuCardCocktails = ({ ...props }) => {
  return (
    <GridItem>
      <Flex>
        <ImageStyled src={props.menu?.image} />
      </Flex>
      <FlexDesc>
        <MenuTitle>
          <TextTitle>{props.menu?.title}</TextTitle>
          <TextPrice>{props.menu?.price}</TextPrice>
        </MenuTitle>
        <TextDesc>{props.menu?.description}</TextDesc>
        <TextSubTitle>{props.menu?.subtitle}</TextSubTitle>
        <TextDesc>{props.menu?.descriptionen}</TextDesc>
      </FlexDesc>
    </GridItem>
  )
}

export default MenuCardCocktails


const MenuTitle = styled.div`  
 display:flex;
 flex-direction:row; 
 align-items:center;
 justify-content:space-between; 
`
const GridItem = styled.div`   
 
  `;

const Flex = styled.div` 
height:150px;
`
const FlexDesc = styled.div` 
 margin-bottom:15px;

`
const ImageStyled = styled.img`   
  border-radius:5px;   
  margin-bottom:5px;  
  width:100%;
  object-fit:cover;
  height:100%;
`;

