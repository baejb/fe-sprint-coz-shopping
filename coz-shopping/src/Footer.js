import React from "react";
import styled  from "styled-components";

const FooterDiv = styled.div`
    width:1280px;
    height: 58px;
    text-align: center;
`
const FooterText = styled.div`
    color: #888888;
    font-size: 12px;
`

function Footer(){
    return(
        <FooterDiv>
            <FooterText>
            개인정보 처리방침 | 이용 약관
            </FooterText>
            <FooterText>
            All rights reserved @ Codestates
            </FooterText>
        </FooterDiv>
    )
}export default Footer;