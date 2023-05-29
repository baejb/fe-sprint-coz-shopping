import React, { useState } from "react";
import styled from "styled-components";

const BookmarkIcon = styled.img`
  width: 24px;
  height: 24px;
  /* z-index: 1; */
  position: relative;
  margin-top: 65%;
  left: 80%;
`;

function Bookmark({ data, bookmarkedItems, toggleBookmark }) {
  const [bookmark, setBookmark] = useState(false);

  const isBookmarked = bookmarkedItems.some((item) => item.id === data.id);

  const onClickBookmark = () => {
    toggleBookmark(data);
    setBookmark(!bookmark);
  };

  return (
    <div>
      <BookmarkIcon
        onClick={onClickBookmark}
        src={isBookmarked ? "../bookmarkiconon.png" : "../bookmarkiconoff.png"}
      />
    </div>
  );
}

export default Bookmark;
