import { createGlobalStyle } from 'styled-components'

const StyledBase = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 10px;
        font-family: ${props => props.theme.fonts.raleway};
        scroll-behavior: smooth;
    }
    ::-webkit-scrollbar {
        width: 10px;
    }  
    
    ::-webkit-scrollbar-thumb {
        background: #999;
        border-radius: 999px;
    }
    ul{
        list-style: none;;
    }
    span, a, img, button, label, textarea{
      display: block;
   }
    h1,h2,h3,h4{
        font-family: ${props => props.theme.fonts.playFair};
        font-weight: 600;
        line-height: 1.4;
    }
    
    h1{
        font-size: 3rem;
    }
    h2{
        font-size: ${props => props.theme.fontSize.xl};
    }
    h3{
        font-size: ${props => props.theme.fontSize.lg};     
    }
    a{
        font-size: ${props => props.theme.fontSize.sm};
        color: inherit;
        text-decoration: none;
    }
    p,input,input::placeholder,textarea{
        font-size: ${props => props.theme.fontSize.base};
        line-height: 1.5;
        color: inherit;
    }
    input{
        background-color: transparent;
        outline: none;
        border: none;
    }
    textarea{
        font-family: inherit;
        resize: none;
        border: none;
    }
    span{
        font-size: ${props => props.theme.fontSize.min};
    }
    img{
        max-width: 100%;
        object-fit: cover;
        object-position: center;
    }
    button{
        font-size: ${props => props.theme.fontSize.base};
        color: inherit;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`

export default StyledBase
