import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ArticleType } from '../../data/article'
import { Typography } from '../../styled/StyledGlobal'

const StyledFeatured = styled(Link)`
    padding: 1.6rem 2rem 3.5rem;
    background-color: ${props => props.theme.colors.darkGreen};
`
const FeaturedBody = styled.div`
    display: flex;
    gap: 3.7rem;
    align-items: center;
    margin-top: 18px;
    img{
        width: 100%;
    }
    @media screen and (max-width: ${props => props.theme.screens.lg}) {
        flex-direction: column;
    }
`
const FeaturedContent = styled.div`
    >*+*{
        margin-top: 12px;
    }
`
const PostComment = styled.div`
    margin-top: 6.5rem;
    padding-top: 20px;
    border-top: 1px solid ${props => props.theme.colors.boder};
`
const FeaturedPost = ({ post }: { post: ArticleType }) => {
    const regex = /<p>(.*?)<\/p>/g;
    const match = regex.exec(post.content);
    const content = match ? match[1] : "";
    return (
        <StyledFeatured to={`/read/${post.id}`}>
            <h2>Fetured Post</h2>
            <FeaturedBody>
                <img src={post.image} alt="" />
                <FeaturedContent>
                    <span>{post.createAt}</span>
                    <Typography as="h2" line={2}>{post.title}</Typography>
                    <Typography as="p" line={3}>{content}</Typography>
                    <PostComment>
                        0 comments
                    </PostComment>
                </FeaturedContent>
            </FeaturedBody>
        </StyledFeatured>
    )
}

export default FeaturedPost