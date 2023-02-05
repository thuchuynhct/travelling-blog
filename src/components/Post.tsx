import styled from 'styled-components'
import { Typography } from '../styled/StyledGlobal'
import { IoChatboxOutline } from "react-icons/io5"
import { ArticleType } from '../data/article'
import { Link } from 'react-router-dom'

const StyledPost = styled(Link)`
    border: 1px solid ${props => props.theme.colors.boder};
    &:hover{
        color: ${props => props.theme.colors.copper};
    }
    img{
        width: 100%;
        aspect-ratio: 16/9;
    }
`
const PostBody = styled.div`
    padding: 2.8rem 3.3rem 2.5rem;
    >*+*{
        margin-top: 10px;
    }
    h3{
        font-size: ${props => props.theme.fontSize.md};
    }
`
const PostComment = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding-top: 18px;
    border-top: 0.5px solid ${props => props.theme.colors.boder};
`
const Post = ({ post }: { post: ArticleType }) => {
    const regex = /<p>(.*?)<\/p>/g;
    const match = regex.exec(post.content);
    const content = match ? match[1] : "";
    return (
        <StyledPost to={`/read/${post.id}`}>
            <img src={post.image} alt="" />
            <PostBody>
                <Typography as="h3" line={2}>{post.title}</Typography>
                <Typography as="p" line={3}>{content}</Typography>
                <PostComment>
                    <IoChatboxOutline size={18} />
                    <span>0</span>
                </PostComment>
            </PostBody>
        </StyledPost>
    )
}

export default Post
