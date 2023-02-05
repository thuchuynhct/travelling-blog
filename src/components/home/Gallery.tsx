import React from 'react'
import styled from 'styled-components'
import { gallery1 } from '../../assets'
import { gallerys } from '../../data/gallery'

const StyledGallery = styled.section`
    display: grid; 
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 20px;
    margin-top: clamp(40px,10vw,80px);
    padding: 0 ${props => props.theme.space.padPage} clamp(20px,5vw,50px);

    @media screen and (min-width:${props => props.theme.screens.lg}){
        grid-template-columns: repeat(4,minmax(0,1fr));
    } 
`
const GalleryItem = styled.div`
    position: relative;
    cursor: pointer;
    &:hover{
        &::before {
            position: absolute;
            content:"#hash: #thuchuynh, #website, #freewebsite, #websitetemplate";
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            text-align: center;
            font-size: ${props => props.theme.fontSize.base};
            color: #fff;
            background-color:rgba(0, 0, 0,0.5);
    }
    }
     
    img {
        width: 100%;
        aspect-ratio: 1;
        cursor: pointer;     
    }
`
const Gallery = () => {
    return (
        <StyledGallery>
            {
                gallerys.map((item, index) => (
                    <GalleryItem key={index}>
                        <img src={item} alt="" />
                    </GalleryItem>
                ))
            }
        </StyledGallery>
    )
}

export default Gallery