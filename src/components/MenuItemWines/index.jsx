
import styled from 'styled-components'
import MenuCardWines from '../MenuCardWines'
import { MenuItems } from '../Styled'

const MenuItemWines = ({ ...props }) => {
  return (
    <MenuItems>
      {props.monomenus?.nodes.map((menuItems, index) => {
        return <div key={index}>
          <Grid key={menuItems.id}>
            {menuItems.menu?.map((menu, index) => {
              return <MenuCardWines key={index} menu={menu} />
            })}
          </Grid>
        </div>
      })}
    </MenuItems>

  )
}

export default MenuItemWines



export const Grid = styled.div` 
  display:grid;     
  grid-template-columns:repeat(3,1fr);
  width:100%;
  
  margin-bottom:35px;
  gap:8px;
   
`;


