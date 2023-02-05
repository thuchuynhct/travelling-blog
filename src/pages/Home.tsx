import styled from 'styled-components'
import FeaturedPost from '../components/home/FeaturedPost'
import Gallery from '../components/home/Gallery'
import Hero from '../components/home/Hero'
import RecentPosts from '../components/home/RecentPosts'
import Service, { ServiceType } from '../components/home/Service'
import { articles } from '../data/article'

const HomeBlog = styled.section`
    position: relative;
    width: min(90%,950px);
    margin: 0 auto;
    padding-bottom: 40px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.white};
    z-index: 2;
    >*+*{
        margin-top: clamp(30px, 8vw, 67px);
    }
`
const HomeFeatured = styled.div`
    position: relative;
    margin-top: calc(clamp(200px, 53vw, 300px) * -1);
`

const services: ServiceType[] = [
    {
        description: "Countries Visited",
        amount: 98
    },
    {
        description: "Continents Visited",
        amount: 7
    },
    {
        description: "Torn Pairs of Shoes",
        amount: 8
    },
    {
        description: "Lost Backpacks",
        amount: 2
    }
]
const Home = () => {
    const featuresPost = articles[articles.length - 1];
    return (
        <main>
            <Hero />
            <HomeBlog>
                <HomeFeatured>
                    <FeaturedPost post={featuresPost} />
                </HomeFeatured>
                <RecentPosts />
            </HomeBlog>
            <Service services={services} />
            <Gallery />
        </main>
    )
}

export default Home