import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2%;
`;

const ProductDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-between;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
`;

const FilterBtn = styled.button`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  background-size: cover;
  border: none;
  background-image: url(${(props) => props.urls});
`;

const FilterTitle = styled.div`
  font-size: 16px;
  border-bottom: ${(props) => (props.active ? "2px solid rgba(65, 45, 212, 1)" : "none")};
  color: ${(props) => (props.active ? "rgba(65, 45, 212, 1)" : "black" )};
  font-weight : ${(props) => (props.active ? "700" : "400" )};
`;

function BookMarkPage({ data , bookmarkedItems, setBookmarkedItems , toggleBookmark}) {

  const [filteredData, setFilteredData] = useState(bookmarkedItems);
  const [activeFilter, setActiveFilter] = useState("All");
  
  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarkedItems");
    // toggleBookmark(bookmarkedItems);
    if (storedBookmarks) {
      setBookmarkedItems(JSON.parse(storedBookmarks));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("bookmarkedItems", JSON.stringify(bookmarkedItems));
  }, [bookmarkedItems]);
  
  const filterDataByType = (type) => {
    let filtered;
    if (type) {
      filtered = bookmarkedItems.filter((item) => item.type === type);
    } else {
      filtered = bookmarkedItems;
    }
    setActiveFilter(type); 
    setFilteredData(filtered);
  };
  

  useEffect(() => {
    setFilteredData(bookmarkedItems); // 컴포넌트가 처음 렌더링될 때 전체 카테고리 상품을 보여주기 위해 초기 데이터 설정
    setActiveFilter(undefined) //처음 페이지에서 전체가 클릭된 상태로 하기 위함 
  }, [bookmarkedItems]);

  return (
    <>
      <MainDiv>
        <FilterContainer onClick={() => filterDataByType(undefined)}>
          <FilterBtn urls={"../every.png"} />
          <FilterTitle active={activeFilter === undefined}>전체</FilterTitle>
        </FilterContainer>
        <FilterContainer onClick={() => filterDataByType("Product")}>
          <FilterBtn urls={"../product.png"} />
          <FilterTitle active={activeFilter === "Product"}>상품</FilterTitle>
        </FilterContainer>
        <FilterContainer onClick={() => filterDataByType("Category")}>
          <FilterBtn urls={"../category.png"} />
          <FilterTitle active={activeFilter === "Category"}>카테고리</FilterTitle>
        </FilterContainer>
        <FilterContainer onClick={() => filterDataByType("Exhibition")}>
          <FilterBtn urls={"../exhibition.png"} />
          <FilterTitle active={activeFilter === "Exhibition"}>기획전</FilterTitle>
        </FilterContainer>
        <FilterContainer onClick={() => filterDataByType("Brand")}>
          <FilterBtn urls={"../brand.png"} />
          <FilterTitle active={activeFilter === "Brand"}>브랜드</FilterTitle>
        </FilterContainer>
      </MainDiv>
      <ProductDiv>
        {filteredData.map((item) => (
          <ProductCard data={item} bookmarkedItems={bookmarkedItems} toggleBookmark={toggleBookmark} key={item.id} />
        ))}
      </ProductDiv>
    </>
  );
}

export default BookMarkPage;
