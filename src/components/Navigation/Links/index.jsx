import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { TextMenuNavTitle, TextMenuNavSubTitle } from '../../Styled'
import { IoIosArrowForward } from "react-icons/io";
const itemMenu = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};


const Links = ({ ...props }) => {
    return (
        <List
            variants={itemMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            <LinkStyled color={props.links.color} direction={'column'} height={'27px'} to={`${props.links.id}`} >
                <FlexTitle>
                    <TextMenuNavTitle> {props.links.name} </TextMenuNavTitle>
                    <TextMenuNavSubTitle> {props.links.description} </TextMenuNavSubTitle>
                </FlexTitle>
            </LinkStyled>
            <IoIosArrowForward width={'24px'} />
        </List>
    )
}

export default Links
/* to={`${props.links.id}`} */
const List = styled(motion.li)`     
  display:flex;   
  justify-content:space-between;
  align-items:center;
  z-index:1;
  margin-bottom:16px; 
`
const LinkStyled = styled(Link)`  
display:flex;
text-decoration:none;
color:#727272;     
  transition: all .8s ease-in-out;
    :hover{ 
        color:#727272;
        padding-right:10px;
    }
`

const FlexTitle = styled('div')`  
   height:26px;

`

