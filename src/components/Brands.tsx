import styled from 'styled-components'
import { logo1, logo2, logo3, logo4 } from '../assets'


const brands = [logo1, logo2, logo3, logo4]

const Title = styled.h2`
    font-size: ${props => props.theme.fontSize.lg};
    text-align: center;
    opacity: 0.6;
`
const BrandList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
    gap: 20px clamp(50px,13vw,100px);
    margin-top: 30px;
    >*{
        max-width:clamp(100px,26vw,150px);
    }
`
const Brands = () => {
    return (
        <div>
            <Title>As featured in</Title>
            <BrandList>
                {
                    brands.map((item, index) => (
                        <img key={index} src={item} alt="" />
                    ))
                }
            </BrandList>
        </div>
    )
}

export default Brands