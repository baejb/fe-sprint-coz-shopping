import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-between;
`;

const TitlePage = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin: 4% 0% 1% 10%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

function MainPage({ data, bookmarkedItems, setBookmarkedItems ,toggleBookmark}) {
  // const [bookmarkedItems, setBookmarkedItems] = useState([]);

 

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarkedItems");
    if (storedBookmarks) {
      setBookmarkedItems(JSON.parse(storedBookmarks));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("bookmarkedItems", JSON.stringify(bookmarkedItems));
  }, [bookmarkedItems]);

  const fourData = data.slice(0, 4);
  const fourBookmarkData = bookmarkedItems.slice(0,4);
  return (
    <div>
      <StyledLink to="/products/list">
        <TitlePage>상품페이지</TitlePage>
      </StyledLink>
      <MainPageContainer>
        {fourData.map((item) => (
          <ProductCard
            key={item.id}
            data={item}
            bookmarkedItems={bookmarkedItems}
            toggleBookmark={toggleBookmark}
          />
        ))}
      </MainPageContainer>

      <StyledLink to="/bookmark">
  <TitlePage>북마크 페이지</TitlePage>
</StyledLink>
<MainPageContainer>
  {fourBookmarkData.map((item) => (
    <ProductCard
      key={item.id}
      data={item}
      bookmarkedItems={bookmarkedItems}
      toggleBookmark={toggleBookmark}
    />
  ))}
  
</MainPageContainer>

    </div>
  );
}

export default MainPage;
