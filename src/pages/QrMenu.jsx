
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_SINGLEMENU } from '../libs/queries';
import { Spinner } from '../components/Styled';
import styled from 'styled-components';
import Mono from '../components/Icons/Mono';
import MenuItem from '../components/MenuItem';
import MenuItemBeers from '../components/MenuItemBeers';
import MenuItemHardDrinks from '../components/MenuItemHardDrinks';
import MenuItems from '../components/MenuItems';
import MenuItemDesserts from '../components/MenuItemDesserts';
import MenuItemCocktails from '../components/MenuItemCocktails';
import MenuItemWines from '../components/MenuItemWines';
import MenuItemSoft from '../components/MenuItemSoft';
import HeaderCenter from '../components/HeaderCenter';
import MenuItemWraps from '../components/MenuItemWraps';
import MonoTerrace from '../components/Icons/Monoterrace';


const QrMenu = () => {
  const { id } = useParams()

  const category = useQuery(GET_SINGLEMENU, {
    variables: { where: { termTaxonomId: id } },
  });

  const categories = useQuery(GET_SINGLEMENU, {
    variables: { where: { exclude: id } },
  });

  if (category?.loading) return <Container>

    <Wrap> <Spinner> </Spinner></Wrap>
  </Container>
  if (category?.error) return <p>Error!  {category?.error}</p>;
  return (
    <Container>
      <Wrap>
        <LogoBox>
          <Link to={'/gardenmenu'}>
            <Mono />
          </Link>
        </LogoBox>
      </Wrap>
      <Wrap>
        <Article >
          {category?.data?.monomenuCategories?.nodes.map((items) => {
            const { id, description, monomenus, name } = items

            if (description === 'Starters') {
              return (
                <HeadingBox key={id}  >
                  <HeaderCenter name={name} description={description} />
                  <MenuItems key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }
            if (description === 'Salads') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItems key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }
            if (description === 'Pastas') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItems key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }
            if (description === 'Wraps and Burgers') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItemWraps key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }
            if (description === 'Maın Courses') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItems key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }
            if (description === 'Desserts') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItemDesserts key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }

            if (description === 'Cocktaıls') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItemCocktails key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }


            if (description === 'Wınes') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItemWines key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }
            if (description === 'Soft Drınks') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItemSoft key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }
            if (description === 'Beer') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItemBeers key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }
            if (description === 'Hard Drınks') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} ></HeaderCenter>
                  <MenuItemHardDrinks key={id} />
                </HeadingBox>
              )
            }
            return (
              <HeadingBox key={id}>
                <HeaderCenter name={name} description={description} />
                <MenuItem key={id} monomenus={monomenus} />
              </HeadingBox>
            )
          })}
          {categories?.data?.monomenuCategories?.nodes.map((items) => {
            const { id, description, monomenus, name } = items

            if (description === 'Starters') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItems key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }
            if (description === 'Salads') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItems key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }
            if (description === 'Pastas') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItems key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }
            if (description === 'Wraps and Burgers') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItemWraps key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }
            if (description === 'Maın Courses') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItems key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }
            if (description === 'Desserts') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItemDesserts key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }
            if (description === 'Cocktaıls') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItemCocktails key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }

            if (description === 'Wınes') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItemWines key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }
            if (description === 'Soft Drınks') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItemSoft key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }
            if (description === 'Beer') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} />
                  <MenuItemBeers key={id} monomenus={monomenus} />
                </HeadingBox>
              )
            }
            if (description === 'Hard Drınks') {
              return (
                <HeadingBox key={id}>
                  <HeaderCenter name={name} description={description} ></HeaderCenter>
                  <MenuItemHardDrinks key={id} />
                </HeadingBox>
              )
            }
            return (
              <HeadingBox key={id}>
                <HeaderCenter name={name} description={description} />
                <MenuItem key={id} monomenus={monomenus} />
              </HeadingBox>
            )
          })}
        </Article>
      </Wrap>
      <Wrap>
        <LogoBox>
          <MonoTerrace />
        </LogoBox>
      </Wrap>
    </Container>

  )
}

export default QrMenu

const Container = styled.section`   
   display:flex; 
    position:relative;
    flex-direction:column;      
    padding-top:22.5px!important; 
    width:390px!important;  
    justify-content:center!important;
    align-items:center!important;
`
const Wrap = styled.div`   
margin-top: 17.5px!important;   
margin-bottom: 17.5px!important;   
width:100%!important;   
 
`;
const LogoBox = styled.div`  
 display:flex;
 justify-content:center;
 justify-items:center!important;
 width:100%!important;  
`;

const Article = styled.article` 
  display:flex;     
  flex-direction:column;     
`;
const HeadingBox = styled.div` 
display:flex;
flex-direction:column;
`;


