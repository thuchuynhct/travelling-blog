import React from 'react'
import styled from 'styled-components'
import { articles } from '../../data/article'
import { Typography } from '../../styled/StyledGlobal'
import Post from '../Post'

const StyledRecentPost = styled.div`
   color: ${props => props.theme.colors.black};
   >*+*{
       margin-top: 3.8rem;
    }
`
const PostList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
    gap: 3.3rem;
`
const RecentPosts = () => {
    return (
        <StyledRecentPost>
            <Typography as="h2" line={1}>
                Recent Post
            </Typography>
            <PostList>
                {
                    articles.slice(0, 6).map((post, index) => (
                        <Post key={index} post={post} />
                    ))
                }
            </PostList>
        </StyledRecentPost>
    )
}

export default RecentPosts
