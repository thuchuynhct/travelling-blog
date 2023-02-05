import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'

export type ServiceType = {
    description: string,
    amount: number
}
const StyledService = styled.section`
    padding: clamp(45px,12vw,75px);
    color: ${props => props.theme.colors.creamYellow};
    background-color: ${props => props.theme.colors.copper};
`
const ServiceList = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
   gap: clamp(20px,5vw,50px);
   width: 80%;
   margin:0 auto;
   text-align: center;
`
const ServiceItem = styled.div`
    h4{
        font-size: ${props => props.theme.fontSize.xxl};
        font-weight: 600;
    }
    span{
        font-size: 1.7rem;
        font-weight: 500;
    }
    >*+*{
        margin-top: 15px;
    }
`

const Service = (props: { services: ServiceType[] }) => {
    return (
        <StyledService>
            <ServiceList>
                {
                    props.services.map((service, index) => (
                        <ServiceItem key={index}>
                            <h4>{service.amount}</h4>
                            <span>{service.description}</span>
                        </ServiceItem>
                    ))
                }
            </ServiceList>
        </StyledService>
    )
}

export default Service
