
import styled from 'styled-components'
import MonoTerrace from '../Icons/monoterrace'
const Footer = () => {
    return (
        <VStack $marginTop={'88px'} $marginBottom={'64px'}>
            <MonoTerrace height={'42.5px'} />
        </VStack>
    )
}

export default Footer

const VStack = styled.section`   
display:flex; 
justify-content:center; 
margin-top:${props => props.$marginTop};   
margin-bottom:${props => props.$marginBottom};  
 
`