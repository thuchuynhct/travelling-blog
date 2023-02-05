import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { about } from '../assets'

export const StyledAbout = styled.section`
    padding: clamp(33px,8vw,66px) ${props => props.theme.space.padPage} clamp(50px,13vw,100px);
`
export const Tilte = styled.h1`
    margin-bottom:clamp(33px,8vw,66px);
    text-align:center;
`
export const AboutCard = styled.div`   
    background-color: ${props => props.theme.colors.copper};   
    border: 1px solid #333;
    @media screen and (min-width:${props => props.theme.screens.lg}){
        display: grid;
        grid-template-columns:repeat( 5,1fr);
    }
`
export const CardImage = styled.div`  
    img{
        width: 100%;
        height: 100%;
        object-position: right;
    }
    @media screen and (min-width:${props => props.theme.screens.lg}){
        grid-column: span 2;
    }
`
export const CardRight = styled.div`
    padding: clamp(33px,8vw,66px) 10px;
    color: ${props => props.theme.colors.white};
    border: 1px solid #333;
    @media screen and (min-width:${props => props.theme.screens.lg}){
        grid-column: span 3;
    }
`
export const CardText = styled.div`
     width: min(400px,100%);
     margin: 0 auto;
     h2+p{
        margin-top: 30px;
    }
    p+p{
        margin-top: 20px;
    }
`
const Button = styled(Link)`
   margin-top: clamp(33px,8vw,60px);
   padding :15px ;
   text-align: center;
   background-color: ${props => props.theme.colors.darkGreen};
   @media screen and (max-width:${props => props.theme.screens.lg}){
       margin-left: auto;
       margin-right: auto;
    }
`
const About = () => {
    return (
        <main>
            <StyledAbout>
                <Tilte>About Me</Tilte>
                <AboutCard>
                    <CardImage>
                        <img src={about} alt="" />
                    </CardImage>
                    <CardRight>
                        <CardText>
                            <h2>Hi, thanks for dropping by!</h2>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            <p>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                            <Button to="/work">Let's Work Together</Button>
                        </CardText>
                    </CardRight>
                </AboutCard>
            </StyledAbout>
        </main>
    )
}

export default About