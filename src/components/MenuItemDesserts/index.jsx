
import styled from 'styled-components'
import MenuCardDesserts from '../MenuCardDesserts'
import { MenuItems } from '../Styled'

const MenuItemDesserts = ({ ...props }) => {
  return (
    <MenuItems>
      {props.monomenus.nodes.map((menuItems, index) => {
        return <div key={index}>
          <Grid key={menuItems.id}>
            {menuItems.menu?.map((menu, index) => {
              return <MenuCardDesserts key={index} menu={menu} />
            })}
          </Grid>
        </div>
      })}
    </MenuItems>
  )
}

export default MenuItemDesserts

export const Grid = styled.div` 
  display:grid;     
  grid-template-columns:repeat(2,1fr);
  width:100%;
  
  margin-bottom:35px;
  gap:2px;
  
`;

