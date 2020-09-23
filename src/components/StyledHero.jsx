import styled from "styled-components"
import defaultImg from "../images/details-1.jpeg"

let StyledHero = styled.header `
    min-height: 60vh;
    backgorund: url(${props => props.img}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    `

export default StyledHero