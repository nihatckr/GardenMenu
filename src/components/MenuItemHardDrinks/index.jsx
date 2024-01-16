import { useQuery } from '@apollo/client';
import React from 'react'
import styled from 'styled-components'
import { GET_HARD } from '../../libs/queries';
import HeaderSubCenter from '../HeaderSubCenter';

import { Spinner, TextClHard, TextPriceHard, TextTitleHard } from '../Styled'
const MenuItemHardDrinks = () => {

  const hardDrinks = useQuery(GET_HARD);
  if (hardDrinks?.loading) return <Container> <Wrap ><Spinner /> </Wrap></Container>;
  if (hardDrinks?.error) return <p>Error! ${hardDrinks?.error}</p>;

  return (
    <React.Fragment>

      {hardDrinks.data?.monoHardDrinksCategory?.nodes.map((menuItems) => {

        return (
          <Box key={menuItems.id} >
            <HeaderSubCenter alignItems={'start'} name={menuItems.name} description={menuItems.description} />
            {menuItems.monomenus?.nodes?.map((menu, index) => {
              const filteredItem = menu.menu.filter((filter) => filter.tag === menuItems.description)

              const tekilaMap = filteredItem.map((item) => item.tag === "Tequılas")
              const likorMap = filteredItem.map((item) => item.tag === "Lıqueurs")
              const rumsMap = filteredItem.map((item) => item.tag === "Rums")
              const rakiMap = filteredItem.map((item) => item.tag === "Rakı")
              const vermouthsMap = filteredItem.map((item) => item.tag === "Vermouths")
              const champaingsMap = filteredItem.map((item) => item.tag === "Champaıngs")


              let titleCl = !tekilaMap[2] ? "4 CL / 8 CL" : "5 CL"
              let subtitleCl = !vermouthsMap[2] ? "35 CL / 50 CL / 70 CL" : "75 CL"


              let existLikor = !likorMap[2] ? true : false
              let existRums = !rumsMap[2] ? true : false
              let existRaki = !rakiMap[0] ? true : false
              let existVermouths = !vermouthsMap[0] ? true : false
              let existChampaings = !champaingsMap[0] ? true : false

              if (existVermouths === false || existChampaings === false) {
                subtitleCl = '75 CL'
              }
              if (existRaki === false) {
                titleCl = "4 CL / 8 CL"
              }
              if (existChampaings === false) {
                titleCl = "GLASS"
              }
              if (existRums === false | existLikor === false) {
                subtitleCl = ''
              }
              return <Detail key={index} menu={filteredItem} titleCl={titleCl} subtitleCl={subtitleCl} />
            })}
          </Box>
        )
      })}
    </React.Fragment>

  )
}

export default MenuItemHardDrinks


const Detail = ({ ...props }) => {

  return (
    <Flex>
      <ClBox>
        <TextClHard>
          {props.titleCl}
        </TextClHard>
        <ClLeft>
          <TextClHard>
            {props.subtitleCl}
          </TextClHard>
        </ClLeft>
      </ClBox>
      <Prices menu={props.menu} />
    </Flex>
  )
}

const Prices = ({ ...props }) => {

  return (
    <PricesBox>
      {props.menu?.map((menu, index) => {
        let hidePrice = true
        if (menu.tag === 'Rums' | "Lıqueurs") {
          hidePrice = false
        }
        return (
          <PriceBox key={index} >
            <Price>
              <TextTitleHard > {menu?.title}</TextTitleHard>
            </Price>
            <Price>
              <FirstPrice>
                {menu.fourcl ?
                  <>
                    <TextPriceHard>{menu?.fourcl}</TextPriceHard>
                  </>
                  : <Emty />}
                {menu.fivecl ?
                  <><Span>  / </Span>
                    <TextPriceHard>{menu?.fourcl}</TextPriceHard>
                  </>
                  : <Emty />}
                {menu.eightcl ?
                  <>
                    <Span>  / </Span>
                    <TextPriceHard>{menu?.eightcl}</TextPriceHard>
                  </>
                  : <Emty />}
              </FirstPrice>

            </Price>
            <Price>

              {hidePrice ? <PriceLeft>
                {menu.thirtyfivecl ?
                  <>
                    <TextPriceHard>{menu?.thirtyfivecl}</TextPriceHard>
                  </>
                  : <Emty />}
                {menu.fiftycl ?
                  <>

                    <TextPriceHard>{menu?.fiftycl}</TextPriceHard>
                  </>
                  : <Emty />}
                {menu.seventycl ?
                  <>

                    <TextPriceHard>{menu?.seventycl}</TextPriceHard>
                  </>
                  : <Emty />}
              </PriceLeft>
                : <>
                  <PriceLeft> </PriceLeft>
                </>
              }

            </Price>
          </PriceBox>
        )
      })}
    </PricesBox>
  )
}
const Container = styled.section`   
    display:flex; 
    position:relative;
    flex-direction:column;      
    padding-top:20px!important; 
    width:430px!important;  
    justify-content:center!important;
    align-items:center!important;
`

const Wrap = styled.div`   
margin-top: 20px!important;   
margin-bottom: 20px!important;   
width:100%!important;   
 
`;

const Box = styled.div` 
display:flex;
 flex-direction:column;
 margin-top:25px;
 margin-bottom: 30px; 
`;


const PricesBox = styled.ul`     
  display:flex;     
  flex-direction:column; 

`
const Flex = styled.div`     
  display:flex;     
  flex-direction:column; 
  
`

const ClBox = styled.div` 
  display:flex;     
  justify-content:flex-end;
  align-items:end;
  height:14px;
  margin-bottom:14px; 
`;
const ClLeft = styled.div` 
  display:flex; 
  justify-content:end; 
  min-width:150px;
`;
const PriceBox = styled.li`     
  display:flex;   
  justify-content:space-between; 
  
      
`
const Price = styled.div` 
  display:flex;   
 
`;


const PriceLeft = styled.div` 
  display:flex;      
   min-width:130px;
   justify-content:end;
`;


const Span = styled.p`     
  display:flex; 
  align-items:center;
  font-size:10px;
`
const FirstPrice = styled.div`     
  display:flex;     
  
`


const Emty = styled.div`     
  display:none;      
 min-width:22px;
  background-color:white;
`