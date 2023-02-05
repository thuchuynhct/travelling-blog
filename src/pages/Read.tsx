import { Navigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { me } from '../assets'
import Post from '../components/Post'
import { articles } from '../data/article'

const StyledRead = styled.section`
    display: grid;
    align-items: flex-start;   
    gap: 43px;
    width: min(950px,100%);
    margin: 0 auto;
    @media screen and (min-width:${props => props.theme.screens.lg}){
        grid-template-columns: repeat(3,minmax(0,1fr));
    }
`
const BlogRead = styled.div`
    grid-column: span 2;
    padding: 30px;
    h1{
        font-size: 4rem;
        opacity: 0.9;
    }
`
const BlogContent = styled.div`
    margin-top: 40px;
    >*+*{
        margin-top: 20px;
    }
    h4{
        font-family: ${props => props.theme.fonts.raleway};
        font-size: ${props => props.theme.fontSize.md};
    }
    img{
        width: 100%;
        max-height: 400px;
    }

    blockquote{
        padding-left: 20px;
        font-size: ${props => props.theme.fontSize.md};
        font-style: italic;
        border-left: 2px solid ${props => props.theme.colors.copper};
    }
`
const BlogAuthor = styled.div`
    margin-top: 80px;
    padding: 50px 45px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.copper};
    >*+*{
        margin-top: 30px;
    }
    img{
        width: 100%;
        aspect-ratio: 1;
        border-radius: 50%;
    }
    @media screen and (max-width:${props => props.theme.screens.lg}){
        display: none;
    }
`
const SuggestArticle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
    align-items: flex-start;
    gap: 20px;
    margin-top: clamp(20px,5vw,50px);
`
const Read = () => {
    const { id } = useParams();
    const article = articles.find(s => s.id === Number(id));
    if (!article)
        return <Navigate to="/blog" />
    const suggestArticles = articles.filter(s => s.id !== Number(id)).slice(0, 2);
    return (
        <main>
            <StyledRead>
                <BlogRead>
                    <h1>{article.title}</h1>
                    <BlogContent dangerouslySetInnerHTML={{ __html: article.content }} />
                    <SuggestArticle>
                        {suggestArticles.map(item => (
                            <Post post={item} key={item.id} />
                        ))}
                    </SuggestArticle>
                </BlogRead>
                <BlogAuthor>
                    <img src={me} alt="" />
                    <h2>Hi, thanks for dropping by!</h2>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
                </BlogAuthor>
            </StyledRead>
        </main>
    )
}

export default Read