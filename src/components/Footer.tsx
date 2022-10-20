import styled from "styled-components";

const StyledFooter = styled.footer`
    font-family: "Inter";
    font-size: 87.5%;
    color: #666;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100vw;
    padding-block: 8px;
    text-align: center;
`

const Footer = () => {
    return (
        <StyledFooter>
            Criado por <a href="https://github.com/nicodemos234">Nico</a>
        </StyledFooter>
    )
}

export default Footer;