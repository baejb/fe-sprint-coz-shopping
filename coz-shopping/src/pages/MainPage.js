import React from "react";
import { useEffect, useState } from "react";
import TypeComponent from "../TypeComponent";
import styled from "styled-components";

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


function MainPage ({data , setQuery}) {
   // Assuming you want to update the query parameter when a button is clicked

    useEffect(() => {
      setQuery('count=4'); // 컴포넌트가 마운트될 때 쿼리를 설정하는 함수 호출
    }, [setQuery]); 
  
    const fourData = data.slice(0, 4);

    return(
        <div>
        <TitlePage>상품페이지 </TitlePage>
        <MainPageContainer>
    {fourData.map((idx) => {
    return(
        <TypeComponent data={idx}/>
    )}
 
    )}
    </MainPageContainer>
    </div>
    )  
  

}export default MainPage;