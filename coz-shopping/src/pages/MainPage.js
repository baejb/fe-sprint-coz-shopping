import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
const MainPageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 80vw;
    flex-wrap: wrap; 
    margin:auto;
    justify-content: space-between;

`
const TitlePage = styled.div`
    font-size:24px;
    font-weight: 600;
    margin: 4% 0% 1% 10%; // 위 오 아래 왼 
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`

function MainPage ({data , setQuery}) {
  
    useEffect(() => {
      setQuery('count=4'); // 컴포넌트가 마운트될 때 쿼리를 설정하는 함수 호출
    }, [setQuery]); 
  
    const fourData = data.slice(0, 4);

    return(
        <div>
            <StyledLink to="/products/list">
        <TitlePage >상품페이지 </TitlePage>
        </StyledLink>
        <MainPageContainer>
    {fourData.map((idx) => {
    return(
        <ProductCard data={idx}/>
    )}
 
    )}
    </MainPageContainer>
    </div>
    )  
  

}export default MainPage;