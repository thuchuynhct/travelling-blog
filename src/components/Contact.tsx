import styled from 'styled-components'
import { soicals } from '../data/socials'

const StyledContact = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: clamp(45px,12vw,90px); 
`
const Title = styled.h2`
    text-align: center;
    opacity: 0.9;
`
const InfoGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 20px;
    margin-top: 20px;
    p{
        padding: 0 20px;
        border-right: 2px solid #333;
    }
`
const StyledForm = styled.form`
    width: min(630px,100%);
    margin: 0 auto;
    margin-top: clamp(45px,12vw,90px); 
    padding: 30px 0 clamp(25px,6vw,50px);
`
const Socials = styled.div`
    display: flex;
    gap: 8px;
    margin-left: 20px;
    svg{
        font-size: 20px;
    }
`
const UserInput = styled.div`
    display: grid;
    margin-top: 40px;
    gap: 20px;
    
    @media screen and (min-width:${props => props.theme.screens.sm}){
        grid-template-columns: repeat(2,minmax(0,1fr));
        label:last-of-type {
        grid-column: span 2;
        textarea{
            height: 100px;
        }
        button{
            grid-column: span 2;
        }
    }
}
`
const InputField = styled.label`
    font-size: ${props => props.theme.fontSize.base};
    input, textarea{
        width: 100%;
        margin-top: 10px;
        padding: 10px ;
        background-color: ${props => props.theme.colors.white};
        outline: 1px solid #333;
    }
`
const Button = styled.button`
    width: 100%;
    margin-top: 20px;
    padding: 16px 0;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.copper};
    font-weight: 500; 
    transition: all 300ms linear;
   &:hover{
    background-color:${props => props.theme.colors.darkGreen};
   }
`
const Contact = () => {
    return (
        <StyledContact>
            <Title>Contact me here</Title>
            <InfoGroup>
                <p>info@mysite.com</p>
                <p>123-456-7890</p>
                <Socials>
                    {soicals.map((item, index) => (
                        <a key={index} href={item.link}>
                            {item.icon}
                        </a>
                    ))}
                </Socials>
            </InfoGroup>
            <StyledForm>
                <Title>Or just drop me a line here</Title>
                <UserInput>
                    <InputField>
                        First Name
                        <input required type="text" />
                    </InputField>
                    <InputField>
                        Last Name
                        <input required type="text" />
                    </InputField>
                    <InputField>
                        Email
                        <input required type="email" />
                    </InputField>
                    <InputField>
                        Phone
                        <input required type="number" />
                    </InputField>
                    <InputField>
                        Message
                        <textarea required />
                    </InputField>
                </UserInput>
                <Button type='submit'>Send</Button>
            </StyledForm>
        </StyledContact>
    )
}

export default Contact