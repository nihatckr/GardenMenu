
import styled from 'styled-components'
import { TextSubtitleCenter, TextTitleCenter } from '../Styled'

const HeaderSubCenter = ({ ...props }) => {
    return (
        <HStack $alignItems={props.alignItems}>
            <TextTitleCenter >{props.description}</TextTitleCenter>
            <TextSubtitleCenter>{props.name}</TextSubtitleCenter>
        </HStack>
    )
}

export default HeaderSubCenter

const HStack = styled.div`
width:100%;
display:flex;
flex-direction:column; 
align-items: ${props => props.$alignItems || 'center'};
height:26px;   
`
