import styled from "styled-components"

export const Container = styled.div`
   width:min(100%, ${props => props.theme.space.screen});
   margin: 0 auto;
`
export const Typography = styled.h2<{ line: number }>`
    display: -webkit-box;
    -webkit-line-clamp: ${props => props.line};
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap: break-word;
`   