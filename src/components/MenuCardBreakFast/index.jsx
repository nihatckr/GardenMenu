
import styled from 'styled-components'
import { TextDesc, TextPrice, TextSubTitle, TextTitle } from '../Styled'

const MenuCardBreakFast = ({ ...props }) => {
  return (

    <GridItem>
      {props.menu.image !== '' ?
        <ImageStyled src={props.menu?.image} />
        :
        <ImageBox />
      }
      <MenuTitle>
        <TextTitle>{props.menu?.title}</TextTitle>
        <TextPrice>{props.menu?.price}</TextPrice>
      </MenuTitle>
      <TextDesc>{props.menu?.description}</TextDesc>
      <TextSubTitle>{props.menu?.subtitle}</TextSubTitle>
      <TextDesc>{props.menu?.descriptionen}</TextDesc>
    </GridItem>

  )
}

export default MenuCardBreakFast



export const MenuTitle = styled.div`  
 display:flex;
 flex-direction:row; 
 align-items:center;
 justify-content:space-between; 
`
export const GridItem = styled.div`   
  min-height:180px; 
  &:first-child{ 
    grid-column:1/4;
    }
    &:nth-child(2){ 
    grid-column:1/4;
    }
    margin-bottom:10px; 
  `;

export const ImageStyled = styled.img`   
  border-radius:5px;   
  margin-bottom:5px;    
  width:100%;
  @media (max-width: 600px)    { 
  } 
`;
export const ImageBox = styled.div`  
  margin-bottom:10px;
  background-color: #F48787; 
  max-width:350px; 
  max-height:115.39px;
  height: 100%;
  opacity: 0.2;
  @media (max-width: 600px){   
}
`;