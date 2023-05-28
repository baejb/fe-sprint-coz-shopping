import { useState , useEffect} from "react";
import styled from "styled-components";

const BookmarkIcon = styled.img`
    width: 24px;
    height: 24px;
    z-index: 1;
    position : relative;
    margin-top: 65%;
    left:80%;
`

function Bookmark({data}){
    const [bookmark, setBookmark] = useState(false)


    
    function objString(obj) {
        return JSON.stringify(obj);
    }
    function onClickbookmark(){
        setBookmark(!bookmark);
        if(bookmark === false){ // bookmark를 바로 변경해주는 것이 아니기 때문에 false 일때 즉 true가 될 상황 
            let strToobj = objString(data);
            window.localStorage.setItem(data.id, strToobj);
            
        }
        if(bookmark === true){
            window.localStorage.removeItem(data.id);
           
        }
    }
    return(
        <div>

    <BookmarkIcon onClick={onClickbookmark} src={bookmark? "../bookmarkiconon.png":"../bookmarkiconoff.png"}/>

        </div>
    )
}
export default Bookmark;