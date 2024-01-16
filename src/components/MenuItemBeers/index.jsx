
import styled from 'styled-components'
import HeaderCenter from '../HeaderCenter'
import MenuCardBeers from '../MenuCardBeers'
import { MenuItems } from '../Styled'

const MenuItemBeers = ({ ...props }) => {
  return (
    <MenuItems>
      <HeaderCenter alignItems={'start'} description={'FICI BiRALAR'} name={'DRAFT BEERS'} />
      {props.monomenus?.nodes.map((menuItems, index) => {
        const filredItem = menuItems.menu.filter((filter) => filter.tag === 'draftbeers')

        return <div key={index}>
          <Grid key={menuItems.id}>
            {filredItem?.map((menu, index) => {
              return <MenuCardBeers key={index} menu={menu} />
            })}
          </Grid>
        </div>
      })}
      <HeaderCenter alignItems={'start'} description={'ŞİŞE BiRALAR'} name={'BOTTLE BEERS'} />
      {props.monomenus?.nodes.map((menuItems, index) => {
        const filredItem = menuItems.menu.filter((filter) => filter.tag === 'bottlebeers')
        return <div key={index}>
          <Grid key={menuItems.id}>
            {filredItem?.map((menu, index) => {

              return <MenuCardBeers key={index} menu={menu} />
            })}
          </Grid>
        </div>
      })}
    </MenuItems>

  )
}

export default MenuItemBeers

export const Grid = styled.div` 
  display:grid;     
  grid-template-columns:repeat(3,1fr);
  width:100%;
  
  margin-bottom:35px;
  gap:8px; 
 
`;

