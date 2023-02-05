import styled from 'styled-components'
import { bgVideo, me } from '../../assets'

const StyledHero = styled.section`
    position: relative;
`
const StyledVideo = styled.video`
    width: 100%;
    height: clamp(550px,146vw,90vh);
    object-fit: cover;
    object-position: center center;
`
const Welcome = styled.div`
    position: absolute;
    top: 0;
    left: ${props => props.theme.space.padPage};
    padding: 2rem 3rem;
    z-index: 1;
    text-align: center;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.copper};
    >*+*{
        margin-top: 5px;
    }
    img{
        width: 100%;
        aspect-ratio: 1;
        border-radius: 50%;
    }
    h2{
        font-family: ${props => props.theme.fonts.playFair};
        font-size: 3rem;
        font-weight: 600;
    }
    p{
        font-size: 1.7rem;
        font-weight: 500;
    }
`
const Hero = () => {
    return (
        <StyledHero>
            <StyledVideo
                autoPlay
                playsInline
                loop
                preload="auto"
                muted
                disablePictureInPicture
                src={bgVideo}
            />
            <Welcome>
                <img src={me} alt="Join my journey" />
                <h2>Welcome!</h2>
                <p>Join my journey</p>
            </Welcome>
        </StyledHero >
    )
}

export default Hero