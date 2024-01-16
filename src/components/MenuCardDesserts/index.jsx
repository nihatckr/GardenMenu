
import styled from 'styled-components'
import { TextDesc, TextPrice, TextSubTitle, TextTitle } from '../Styled'

const MenuCardDesserts = ({ ...props }) => {
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

export default MenuCardDesserts

const MenuTitle = styled.div`  
    display:flex;
    flex-direction:row; 
    align-items:center;
    justify-content:space-between; 
`
const GridItem = styled.div`    
    margin-bottom:10px; 
 `;

const ImageStyled = styled.img`   
    border-radius:5px;   
    margin-bottom:5px;   
    width:100%; 
     
`;
const ImageBox = styled.div`  
    margin-bottom:10px;
    background-color: #F48787;  
    max-height:106.75px;
    height: 100%;
    opacity: 0.2;
    
`;