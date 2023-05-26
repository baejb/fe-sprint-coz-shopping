import { useState , useEffect} from 'react';
import styled from "styled-components";




const ProductDiv = styled.div`
    display:flex;
    justify-content: space-between;
`
const Product = styled.div`
    width : 264px;
    height: 210px;
    border-radius: 5%;
    background-size: cover;
    background-image: url(${(props)=> props.urls }) ;
    

`

const BookmarkIcon = styled.img`
    width: 24px;
    height: 24px;
    z-index: 1;
    position : relative;
    top:80%;
    left:80%;
`
const TypeName = styled.div`
    font-size: 16px;
    font-weight: 800;
    
`
const ExhibitionExplain = styled.div`
    font-size:16px;
    text-align: left;
`
const RightText = styled.div`
    text-align: right;
    font-weight: 700;
    color: ${(props)=> props.color? "rgba(69, 44, 221, 1)":"black"};
`

const SmallRightText = styled.div`
    text-align: right;
`

const FlexContainer = styled.div`
    display: flex;
    width: 270px;
    margin-right:1%;
    margin-bottom: 4%;
   

    
`

function ProductCard({ data }){
const {
        id,
        type,
        title,
        sub_title,
        brand_name,
        price,
        discountPercentage,
        image_url,
        brand_image_url,
        follower,
     } = data; 
// 일단 코드 오류 나니 더미데이터로 선언해줌 
const [bookmark, setBookmark] = useState(false)

function objString(obj) {
    return JSON.stringify(obj);
}
function onClickbookmark(){
    setBookmark(!bookmark);
    if(bookmark === false){ // bookmark를 바로 변경해주는 것이 아니기 때문에 false 일때 즉 true가 될 상황 
        let strToobj = objString(data);
        window.localStorage.setItem(`${id}`, strToobj);
        
    }
    if(bookmark === true){
        window.localStorage.removeItem(`${id}`);
       
    }
}

   let explain ;
    switch (type){
        case 'Product':
            explain = (
            <div>
            <Product urls={image_url}>
                <BookmarkIcon onClick={onClickbookmark} src={bookmark? "../bookmarkiconon.png":"../bookmarkiconoff.png"}/>
            </Product>
            <ProductDiv>
            <TypeName>{title}</TypeName>
            <RightText color>{discountPercentage}%</RightText>
            </ProductDiv>
            <SmallRightText>{price}</SmallRightText>
            </div>
            )
            break;
    
        case 'Category' :
            explain = (
                <div>
            <Product urls={image_url}>
            <BookmarkIcon onClick={onClickbookmark} src={bookmark? "../bookmarkiconon.png":"../bookmarkiconoff.png"}/>            </Product>
            <TypeName>#{title}</TypeName>
            </div>
            )
            
            break;
        case 'Exhibition' :
            explain = (
                <div>
            <Product urls={image_url}>
            <BookmarkIcon onClick={onClickbookmark} src={bookmark? "../bookmarkiconon.png":"../bookmarkiconoff.png"}/>            </Product>
            <TypeName>{title}</TypeName>
            <ExhibitionExplain>{sub_title}</ExhibitionExplain>
            </div>
            )
              
            break;
        case 'Brand' :
            explain = (
                <div>
            <Product urls={brand_image_url}>
            <BookmarkIcon onClick={onClickbookmark} src={bookmark? "../bookmarkiconon.png":"../bookmarkiconoff.png"}/>            </Product>
            <ProductDiv>
             <TypeName>{brand_name}</TypeName>
             <RightText>관심 고객수</RightText>
             </ProductDiv>
             <SmallRightText>{follower}</SmallRightText>
            
             </div>
             )
             break;      
        default: 
            explain = null ;        
                
        break;

        }
    return(
           <FlexContainer>  
           {explain}
           </FlexContainer>
    )
   
  }

  export default ProductCard;
  
  
  
  
  
  
