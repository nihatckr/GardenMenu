import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import { GET_SOFTMENU } from '../../libs/queries'
import MenuCardSoft from '../MenuCardSoft'
import { Loading, Spinner } from '../Styled'

const MenuItemSoft = () => {
  const soft = useQuery(GET_SOFTMENU);

  if (soft?.loading) return <Loading> <Spinner> </Spinner></Loading>;
  if (soft.error) return <p>Error! {soft?.error}</p>;

  return (
    <MenuItems>
      {soft?.data.monoSoftKategoriler.nodes.map((item) => {

        if (item.slug === 'garden')
          return (
            <Menu key={item.id} >
              {item.monomenus.nodes.map((menu, index) => {
                const filter = menu.menu.filter((item) => item.mngarden_show_content === false)
                return (
                  <Grid key={index}>
                    {filter.map((menus, i) => {
                      return <MenuCardSoft key={i} menu={menus} />
                    })}
                  </Grid>
                )
              })}
            </Menu>)
      })}
    </MenuItems>

  )
}

export default MenuItemSoft

const MenuItems = styled.section`  
 margin: 10px 0;
 
`;

const Menu = styled.section`  
 margin-bottom: 10px ;
 
`;
export const Grid = styled.div` 
  display:grid;     
  grid-template-columns:repeat(3,1fr);
  width:100%;
  
  margin-bottom:35px;
  gap:8px;
 
`;


