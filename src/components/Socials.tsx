import styled from 'styled-components'
import { soicals } from '../data/socials'

const StyledSocials = styled.div`
    position: fixed;
    top: 50%;
    right: 0;
    padding: 20px 15px;
    background-color: ${props => props.theme.colors.copper};
    transform: translateY(-50%);
    border: 1px solid #333;
    >*+*{
        margin-top: 15px;
    }
    svg{
        font-size: 2.5rem;
        &:hover{
            color: ${props => props.theme.colors.creamYellow};
        }
    }
    @media screen and (max-width:${props => props.theme.screens.sm}){
        display: none;
    }
`
const Socials = () => {
    return (
        <StyledSocials>
            {soicals.map((item, index) => (
                <a key={index} href={item.link}>
                    {item.icon}
                </a>
            ))}
        </StyledSocials>
    )
}

export default Socials