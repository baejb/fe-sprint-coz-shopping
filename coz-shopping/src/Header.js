import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState ,useEffect,useRef} from 'react';

const HeaderDiv = styled.div`
    width:100vw;
    height: 80px;
    box-shadow: 0px 8px 8px 0px  #0000001A;
    position: sticky;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
   
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
    &:hover{ 
        cursor: pointer;
    } 
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
    top: 70%;
    bottom: 0%;
    border-radius: 12px;
    background-color: white;
    box-shadow: 0px 8px 8px 0px  #0000001A;
    

`
const DropdownUl = styled.ul`

    width: 200px;
    height: 150px;
   background-color: white;
   padding-left: 0;
   margin: 0;
   border-radius: 12px;
`
const DropdownList = styled.li`
    font-size: 16px;
    list-style: none;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
    width: 200px;
    height: 50px;
    line-height: 50px;
    
    
    
`
const DropdownListIconDiv = styled.div`
    line-height: 50px;
    margin-left: 30px;
    
`
const DropdownListIcon = styled.img`
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-bottom: 5px;
    margin-right: 8px;
        
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`



function Header(){
    const [isActive, setActive] = useState(false);
    const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    function clickBtn(){
        setActive(!isActive);
    }
    return (
        
        <HeaderDiv>
            <LogoTitleDiv>
                <StyledLink to='/'>
                <LogoImg src="../logo.png" alt="로고" />
                </StyledLink>
                <StyledLink to='/'>
                <LogoTitle>COZ Shopping</LogoTitle>
                </StyledLink>
            </LogoTitleDiv>
            <HamburgerDiv>
                <Hamburger src="../hamburger.png" alt="드롭다운 메뉴" onClick={clickBtn}/>
                {isActive === true ? 
               
                    <DropdownDiv ref={dropdownRef}>
                    <DropdownUl>
                        <DropdownList>
                         <DropdownListIconDiv>
                            OOO님, 안녕하세요
                         </DropdownListIconDiv>    
                        </DropdownList>
                        <DropdownList>
                            <StyledLink to='/products/list' >
                            <DropdownListIconDiv>
                            <DropdownListIcon src="../goods.png" alt="선물모양 아이콘"/>
                            상품리스트 페이지
                            </DropdownListIconDiv>        
                            </StyledLink>
                        </DropdownList>
                        <DropdownList>
                            <StyledLink to='/bookmark'>
                            <DropdownListIconDiv>
                            <DropdownListIcon src="../bookmark.png" alt="북마크 아이콘"/>
                            북마크 페이지
                            </DropdownListIconDiv>
                            </StyledLink>
                            </DropdownList>
                            
                    </DropdownUl>
                </DropdownDiv>
                
                : undefined}
              
            </HamburgerDiv>
        </HeaderDiv>
       
    )
}
export default Header;