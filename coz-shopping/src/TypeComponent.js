import React from 'react';
import { useState , useEffect} from 'react';
import styled from "styled-components";
//state는 비동기적이어서 datas가 읽히기 전에
function TypeComponent({datas}){

const type = {
    Product : "상품 이름"
    
}
const [current, setCurrent] = useState({
    id: 51,
    type: "Product",
    title: "나이키 조거 팬츠",
    sub_title: null,
    brand_name: null,
    price: "64500",
    discountPercentage: 40,
    image_url: "https://images.unsplash.com/photo-1580906853203-f493cea9ff28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    brand_image_url: null,
    follower: null

});

const ProductBookmarkDiv = styled.div`

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
const TypeName = styled.p`
    font-size: 16px;
`

    return(
        <div>
            {/* {datas.map((data)=>{

           return(
            <Product urls={data.image_url} >
                <BookmarkIcon/>
            </Product> 
           )
        })} */}
        <Product urls ={current.image_url}>
            <BookmarkIcon src="../bookmarkiconoff.png"/> 
        </Product>
        

        </div>
    )

}export default TypeComponent;