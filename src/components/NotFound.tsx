import React from 'react'
import styled from 'styled-components'

const StyledNotFound = styled.div`
    padding-top: 50px;
    margin-bottom: 50px;
    h1{
        text-align: center;
    }
`
const NotFound = () => {
    return (
        <main>
            <StyledNotFound>
                <h1>404 Not Found</h1>
            </StyledNotFound>
        </main>
    )
}

export default NotFound