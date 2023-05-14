import React from 'react';
import styled from 'styled-components';

// 미완성 : 로고 클릭 시 메인페이지로 리다이렉트 
// 드롭다운 기능 : 페이지 이동 , 클릭시 드롭다운 열리기 
// 드롭다운 아이콘 box로 만들기 

const HeaderDiv = styled.div`
    width:1280px;
    height: 80px;
    box-shadow: 0px 8px 8px 0px  #0000001A;
    position: sticky;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
   
`
const LogoTitleDiv = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    margin-left:76px;
    &:hover{ 
        cursor: pointer;
    } 
`
const LogoImg = styled.img `
    width: 55px;
    height: 30px;
`
const LogoTitle = styled.p`
    font-size: 26px;  // 글자 크기 변경 
    font-weight: 700;
    
`
const HamburgerDiv = styled.div`
    margin-right: 78px;
`
const Hamburger = styled.img`
    width: 30px;
    height: 20px;
`
const DropdownDiv = styled.div`
    width: 200px;
    height: 150px;
    position: absolute;
    left: 80%;
    right: 0%;
    top: 50%;
    bottom: 0%;
    /* display: none; */

`
const DropdownUl = styled.ul`
   background-color: white;
    
`
const DropdownList = styled.li`
    font-size: 16px;
    list-style: none;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
    width: 200px;
    height: 50px;
    line-height: 50px;
    
`
const DropdownListIcon = styled.img`
    width: 20px;
    height: 20px;
        
`
function Header(){
    return (
        
        <HeaderDiv>
            <LogoTitleDiv>
                <LogoImg src="../logo.png" alt="로고" />
                <LogoTitle>COZ Shopping</LogoTitle>
            </LogoTitleDiv>
            <HamburgerDiv>
                <Hamburger src="../hamburger.png"/>
                <DropdownDiv>
                    <DropdownUl>
                        <DropdownList>OOO님, 안녕하세요 </DropdownList>
                        <DropdownList><DropdownListIcon src="../goods.png" />상품리스트 페이지</DropdownList>
                        <DropdownList><DropdownListIcon src="../bookmark.png"/>북마크 페이지</DropdownList>
                    </DropdownUl>
                </DropdownDiv>
            </HamburgerDiv>
        </HeaderDiv>
       
    )
}
export default Header;