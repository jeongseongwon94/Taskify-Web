<img width="963" alt="image" src="https://github.com/jeongseongwon94/Taskify-Web/assets/148832721/5ddbb709-ee2d-4442-a48c-06dd364142a7">

## 프로젝트 소개
> Project-Title : Taskify-Web  
> Project-Period : 2024-01-25 ~ 2024-02-13  
> Team : Codeit-Sprint-2-Part3-Team11(이나경,김광현,문다님,정성원)  
> 일정 관리 서비스  
 
## 주요 기능 소개
- 대시보드를 생성하여 프로젝트의 일정을 관리 할 수 있습니다.
- 사용자는 컬럼(일정 순서)과 대시보드를 직접 커스터마이징 할 수 있고, 컬럼에 등록된 할 일 카드(일정 내용)에서 멤버들끼리 서로의 진행상황을 코멘트하며 소통할 수 있습니다.
- 내 대시보드, 대시보드 관리 페이지를 통해 대시보드의 초대 내역을 관리 할 수 있습니다.
- 내 정보 페이지에서는 사용자의 프로필 이미지, 닉네임, 비밀번호를 변경할 수 있습니다.

## 기술 스택
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white"> <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white"> <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

## 담당 제작 기능
- 내 대시보드 페이지 개발
  - 내 대시보드 목록 페이지네이션 기능 구현
  - 초대받은 대시보드 목록 무한스크롤 기능 구현
  - 초대받은 대시보드 수락/거절 기능 구현
  - 초대받은 대시보드 검색 기능 구현
- 대시보드 페이지 개발
  - 할일 생성/수정 모달 기능 구현
  - 컬럼 추가 모달 기능 구현

<img width="863" alt="image" src="https://github.com/jeongseongwon94/Taskify-Web/assets/148832721/c8b12c53-6b70-4cba-9249-db59e4a05106">
<img width="863" alt="image" src="https://github.com/Team-Taskify/Taskify-Web/assets/148832721/abc338c9-85df-49a2-9224-ebc02d3ab935">

## 트러블 슈팅
- map 함수 key 값 오류<br/>
고유한 id값이 없어 태그의 이름을 id로 적용하였으나, 이름이 중복되는 태그가 작성되면 id 에러 발생 <br/> → 이름이 중복되는 태그를 생성하지 못하도록 alert창을 표시하고 return하는것으로 수정
- 생성모달에서 수정모달의 데이터가 적용되는 문제<br/>
생성 모달과 수정 모달을 동일한 컴포넌트에서 동작하도록 구현하였으나, 수정모달에서 입력된 데이터가 생성 모달에서도 적용됨<br/> → 생성모달과 수정모달을 구분하여 생성모달인 상태에는 기존 데이터를 useEffect에서 초기화하도록 수정<br/>
[관련 PR 링크](https://github.com/Team-Taskify/Taskify-Web/pull/150)
  

## 배포 링크
- [LINK](https://taskify-jsw.vercel.app)
