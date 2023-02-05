import React, { useImperativeHandle, useRef } from 'react'
import styled from 'styled-components'
import { work, workBg } from '../assets'
import Brands from '../components/Brands'
import Contact from '../components/Contact'
import { AboutCard, CardImage, CardRight, CardText, StyledAbout, Tilte } from './About'

const StyledWork = styled(StyledAbout)`
    background:url(${workBg});
    background-size: cover;
`
const More = styled.div`
     margin-top: clamp(70px,18vw,140px);
`
const Work = React.forwardRef<HTMLDivElement, { props?: any }>(
    (_, ref) => {
        const refContact = useRef<HTMLDivElement>(null);
        useImperativeHandle(ref, () => refContact.current!);
        return (
            <main>
                <StyledWork>
                    <Tilte>Work With Me</Tilte>
                    <AboutCard>
                        <CardImage>
                            <img src={work} alt="" />
                        </CardImage>
                        <CardRight>
                            <CardText>
                                <h2>I am passionate about sharing my knowledge, travel experience and the useful tips I’ve learned on the trail.</h2>
                                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            </CardText>
                        </CardRight>
                    </AboutCard>
                    <More ref={refContact}>
                        <Brands />
                        <Contact />
                    </More>
                </StyledWork>
            </main>
        )
    }
);

export default Work