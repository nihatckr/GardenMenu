
import styled from 'styled-components'
import MenuCards from '../MenuCards'

const MenuItems = ({ ...props }) => {
  return (
    <MenuItem>
      {props.monomenus?.nodes.map((menuItems, index) => {

        return <div key={index}>
          <Grid key={menuItems.id}>
            {menuItems.menu?.map((menu, index) => {

              return <MenuCards key={index} menu={menu} />
            })}
          </Grid>
        </div>
      })}
    </MenuItem>
  )
}

export default MenuItems

const MenuItem = styled.section`   
 margin-top: 17.5px!important;    
  
`;
const Grid = styled.div` 
  display:grid;     
  grid-template-columns:repeat(3, 1fr);
  width:100%;
  
  margin-bottom:35px;
  gap:2px;
  
`;


