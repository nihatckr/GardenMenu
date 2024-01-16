
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Layout = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    )
}

export default Layout


const Container = styled.main`   
    display:flex; 
    position:relative; 
    margin:auto;   
    width:390px;  
` 
