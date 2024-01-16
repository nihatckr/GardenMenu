
import styled from 'styled-components'
import MenuCardCocktails from '../MenuCardCocktails'
import { MenuItems } from '../Styled'

const MenuItemCocktails = ({ ...props }) => {
  return (
    <MenuItems>
      {props.monomenus?.nodes.map((menuItems, index) => {
        return <div key={index}>
          <Grid key={menuItems.id}>
            {menuItems.menu?.map((menu, index) => {
              return <MenuCardCocktails key={index} menu={menu} />
            })}
          </Grid>
        </div>
      })}
    </MenuItems>

  )
}

export default MenuItemCocktails


const Grid = styled.div` 
   
  display:grid;     
  grid-template-columns:repeat(5,1fr); 
  margin-bottom:35px;  
`;

