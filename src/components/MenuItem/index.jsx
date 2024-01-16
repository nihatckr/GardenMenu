
import styled from 'styled-components'
import MenuCardBreakFast from '../MenuCardBreakFast'
import { MenuItems } from '../Styled'

const MenuItem = ({ ...props }) => {
  return (
    <MenuItems>
      {props.monomenus?.nodes.map((menuItems, index) => {
        return <div key={index}>
          <Grid key={menuItems.id}>
            {menuItems.menu?.map((menu, index) => {
              return <MenuCardBreakFast key={index} menu={menu} />
            })}
          </Grid>
        </div>
      })}
    </MenuItems>

  )
}

export default MenuItem

const Grid = styled.div` 
  display:grid;     
  grid-template-columns:repeat(3, 1fr);
  width:100%; 
  margin-bottom:35px;
  gap:2px;
   
`;


