// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
background-image:linear-gradient(${props => props.linearGradient});
`

export const Heading = styled.h1`
  color:white;
  font-family:"Roboto";
`

export const Paragraph = styled.p`
color:white;
opacity:0.5;
font-family:"Roboto";
font-size:15;
`
export const Colorpara = styled.p`
color:white;
opacity:0.5;
`

export const GenerateButton = styled.button`
background-color:#00c9b7;
color:white;
`
