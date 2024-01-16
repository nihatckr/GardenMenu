
import React from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { Loading, Spinner } from '../Styled';
import { GET_MENU } from '../../libs/queries';
import Links from './Links';


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation = () => {

  const { loading, error, data } = useQuery(GET_MENU);


  if (loading) return <Loading> <Spinner /> </Loading>
  if (error) return <p>Error! {error}</p>;
  return (
    <React.Fragment>
      <Flex variants={variants}  >
        {data.monomenuCategories.nodes.map((items, index) => {
          return (<Links key={index} links={items} />)
        })
        }
      </Flex>
    </React.Fragment>
  )
}

export default Navigation

const Flex = styled(motion.ul)`     
  display:flex;     
  flex-direction:column;    
  
`
