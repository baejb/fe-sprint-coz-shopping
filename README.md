<h1>Coz-Shopping</h1>
<hr>
<h3>프로젝트 계기</h3>
<p>솔로프로젝트 'Coz-Shopping'은 5일간 진행된 스프린트입니다. <br>
애자일 방법론인 스크럼(Scrum)방식을 채택하였고, 깃허브 프로젝트 메뉴를 통해  계획하고 진행하였습니다. 작성한 카드는 프로젝트에서 확인해보실 수 있습니다. 
</p>
<hr>
<h3>프로젝트 설명</h3>
<p>
    <strong>Coz-Shopping</strong>은 총 3가지 페이지로 구성되어있습니다. <br>
    공통적으로 모든 페이지에는 헤더와 푸터가 존재하며 , 헤더에서 로고를 클릭 시 메인페이지로 이동하고 오른쪽의 햄버거 버튼을 클릭시 드롭다운창을 통해 각각의 페이지로 이동할 수 있습니다. 또한 헤더는 항상 상단에 고정되어 있게 구현하였습니다. <br>
   <br>  
<div><p>첫번째로 메인페이지에는 상품리스트와 북마크 리스트 목록을 보여줍니다. 상품의 개수는 4개로 제한하여 보여줄 수 있도록 구현하였습니다.  </p>
 <img src="https://github.com/baejb/fe-sprint-coz-shopping/assets/82064490/fb291121-d2ff-4ff3-93d0-ae6abb708763" width="700" height="500"/>
    
</div>
 <br>
  <br>
<div> <p>두번째로 상품리스트페이지는 상단에 5가지의 필터 버튼을 구현하여 카테고리 별 상품의 목록을 확인할 수 있도록 구현하였습니다. </p>
<img src="https://github.com/baejb/fe-sprint-coz-shopping/assets/82064490/0b7f623c-8107-47c1-9416-2ee7a3e89e44" width="700" height="500"/>
     
</div> 
 <br>
  <br>
<div><p>마지막으로 북마크페이지는 상품 중 북마크 표시된 상품 리스트를 보여줍니다. 이 페이지 또한 필터기능도 존재합니다. </p>
<img src="https://github.com/baejb/fe-sprint-coz-shopping/assets/82064490/18f0c1fe-fc83-409a-bb92-773750157c91" width="700" height="500"/>

</div>
 <br>
  <br>
   
   

  <p>  상품리스트에 대한 데이터는 api 호출을 통해 총 100개의 데이터를 받아왔고 type별로 비교하여 필터 기능을 만들었습니다. 북마크 리스트는 localStorage를 활용하여 북마크 기능을 만들었습니다. </p>
    <br>
    아쉽게도 5일내에 모달창 기능과 무한스크롤 기능 북마크 리스트 보여주기 기능은 만들지 못했고 추후 계속해서 만들어갈 예정입니다. 
</p>
<h4>주요 기능</h4>
<ul>
    <li>필터링 기능 구현</li>
    <li>localStorage를 활용한 북마크 기능 구현</li>
    <li>fetch를 통한 api호출</li>
    <li>다양한 UI컴포넌트 구현 (드롭다운 ,모달 ,토스트UI)</li>
    <li>상품 클릭 시 모달창 구현 (미구현)</li>
    <li>상품 스크롤 시 무한스크롤 구현 (미구현)</li>
</ul>
<hr>
<h3>사용 기술</h3>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<hr>
<h3>프로젝트 설치 및 실행방법</h3>
<p>프로젝트 clone -> npm install -> npm run start </p>
<hr>
<h3>제작자</h3>
<p>배정빈</p>
