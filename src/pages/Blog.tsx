import styled from 'styled-components'
import Post from '../components/Post';
import { articles } from '../data/article';

const StyledBlog = styled.section`
    width: min(950px,90%);
    margin: 0 auto;
    padding-top: clamp(33px,8vw,66px);
`
const Title = styled.h1`  
   text-align: center;
   margin-bottom: clamp(33px,8vw,62px);
`
const AllPost = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(350px,1fr));
    gap: 2rem;
    margin: 20px 0 clamp(33px,8vw,62px);
`
const Blog = () => {
    return (
        <main>
            <StyledBlog>
                <Title>Blog</Title>
                <p>All Post</p>
                <AllPost>
                    {
                        articles.map((post, index) => (
                            <Post key={index} post={post} />
                        ))
                    }
                </AllPost>
            </StyledBlog>
        </main>
    )
}

export default Blog
