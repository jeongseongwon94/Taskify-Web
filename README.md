<h1 align="center">Taskify-Web</h1>
<p align="center">일정 관리 서비스</p>

## 프로젝트 소개
![메인소개](https://github.com/jeongseongwon94/Taskify-Web/assets/148832721/5ddbb709-ee2d-4442-a48c-06dd364142a7)
배포 페이지 : https://taskify-jsw.vercel.app
## 개요
- 프로젝트의 일정을 관리하는 사이트입니다. 
- 프로젝트 마다 각각의 대시보드로 관리하며, 특정 멤버만을 초대하여 일정을 공유 할 수 있습니다.
## 주요 기능 소개
- 대시보드를 생성하여 프로젝트의 일정을 관리 할 수 있습니다.
- 사용자는 컬럼(일정 순서)과 대시보드를 직접 커스터마이징 할 수 있고, 컬럼에 등록된 할 일 카드(일정 내용)에서 멤버들끼리 서로의 진행상황을 코멘트하며 소통할 수 있습니다.
- 내 대시보드, 대시보드 관리 페이지를 통해 대시보드의 초대 내역을 관리 할 수 있습니다.
- 내 정보 페이지에서는 사용자의 프로필 이미지, 닉네임, 비밀번호를 변경할 수 있습니다.
## 기술적 성취
- Next.js의 Dynamic Routes(동적 라우팅)을 사용한 대시보드 페이지를 관리 (/dashboard/[대시보드 숫자])
- scss를 사용한 className 충돌 방지
- provider를 사용한 전역상태관리

## 기술 스택
### Language
<div>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javscript&logoColor=black">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
</div>

### CSS
<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white">

### Framework
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">

### Collabaration tool
<div>
  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
  <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">
</div>

### Version control
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

### Deployment
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

## 페이지별 기능 소개
### 메인 페이지, 회원가입, 로그인 페이지
- 메인 페이지는 간단한 사이트 소개와 회원가입/로그인 페이지의 이동 기능을 제공합니다.
- 회원가입/로그인 페이지는 입력칸이 모두 작성되어야 버튼이 활성화되며, 이메일의 중복체크 기능을 제공합니다.
- 비밀번호 입력칸 우측에 위치한 눈동자 아이콘을 클릭하면 작성중인 비밀번호의 숨김을 on/off할 수 있습니다.
- 회원가입/로그인 페이지를 통해 접속한 유저의 정보는 세션스토리지에 토큰으로 저장됩니다. 토큰이 확인된 유저는 내 대시보드 페이지로 이동합니다.
![메인페이지](https://github.com/jeongseongwon94/Taskify-Web/assets/148832721/cd13787c-fbf6-46a8-8697-d30c12436136)
![로그인페이지](https://github.com/jeongseongwon94/Taskify-Web/assets/148832721/97858943-0321-41d0-93f8-ca19abd02767)
![회원가입페이지](https://github.com/jeongseongwon94/Taskify-Web/assets/148832721/901e1093-a985-4b3d-868d-2d8d781ac8e5)![회원가입 이메일 중복체크](https://github.com/jeongseongwon94/Taskify-Web/assets/148832721/ab73f72d-7407-4a49-9501-afffd4da9960)
---


### 내 대시보드 페이지
- 내 대시보드, 대시보드, 대시보드 관리, 내 정보 페이지에서는 사이드바 기능이 지원되며, 대시보드 생성과 현재 유저가 가입된 대시보드의 목록이 표시되고, 클릭 시 해당 대시보드로 이동할 수 있습니다.
- 내 대시보드 페이지에서는 대시보드 생성, 현재 가입된 대시보드의 목록, 그리고 초대받은 대시보드 목록이 보여집니다. 대시보드생성은 모달, 내 대시보드 목록은 페이지네이션, 초대받은 대시보드 목록은 무한스크롤로 구현하였습니다.
- 대시보드의 생성과 초대받은 대시보드 목록의 수락/거절은 기능이 동작하면 이후 목록에 실시간 반영됩니다.
- 초대받은 대시보드 목록은 검색기능을 제공합니다.
![내 대시보드 페이지](https://github.com/jeongseongwon94/Taskify-Web/assets/148832721/f99deba0-989c-4ca8-bbb2-4b5b5f9db979)
![내 대시보드 기능](https://github.com/jeongseongwon94/Taskify-Web/assets/148832721/c8b12c53-6b70-4cba-9249-db59e4a05106)
---


### 대시보드 페이지
- 대시보드 페이지에서는 특정 멤버를 초대하거나 대시보드 관리 페이지로 이동할 수 있습니다. 대시보드가 생성되면 기본적으로 To DO, On Progress, Done 3개의 컬럼이 제공되며, 원하는 컬럼을 직접 생성하거나 기존 컬럼의 삭제도 가능합니다.
컬럼은 현재 일정의 진행 순서를 나타내며, 각각의 컬럼에 사용자는 할 일 카드를 생성하고, 현재 프로젝트의 진행상황을 작성할 수 있습니다.
- 할 일 카드 목록은 무한스크롤, 컬럼의 생성과 할 일 카드의생성, 할일 카드는 모달로 구현하였습니다.
- 할 일 카드는 댓글을 통해 대시보드의 멤버들과 소통이 가능하며, 카드 수정과 삭제 기능을 제공합니다. 수정기능을 사용 시 현재 진행중인 상황의 담당자, 컬럼명(진행 순서), 제목, 태그 등 상세 내용의 수정이 가능합니다.
![대시보드 페이지](https://github.com/jeongseongwon94/Taskify-Web/assets/148832721/ef59372c-f63e-4759-b1cf-e4d9736f1f1a)
![할일카드 생성](https://github.com/jeongseongwon94/Taskify-Web/assets/148832721/54380871-a898-4851-a42f-951588630087)
![카드수정](https://github.com/jeongseongwon94/Taskify-Web/assets/148832721/3c899f36-4985-48cd-8407-28b008ad772b)
---


### 대시보드 관리 페이지
- 대시보드의 색상, 이름을 변경할 수 있습니다. 대시보드의 구성원과 초대 목록을 관리할 수 있으며, 대시보드의 삭제 또한 가능합니다.
- 대시보드의 구성원과 초대목록은 페이지네이션으로 구현하였습니다.
![대시보드 관리 페이지](https://github.com/jeongseongwon94/Taskify-Web/assets/148832721/e05fb353-abf2-4828-96e7-7e00b416a711)
---


### 내 정보 페이지
- 사용자의 프로필이미지, 닉네임, 비밀번호를 변경할 수 있습니다.
- 이메일의 변경기능은 제공하지 않으며, 프로필이미지와 닉네임을 변경 후 저장 버튼을 클릭하면 실시간 반영됩니다.
- 새 비밀번호와 확인란을 작성 하면 비밀번호 변경 버튼이 활성화됩니다.
- 비밀번호 입력칸 우측에 위치한 눈동자 아이콘을 클릭하면 작성중인 비밀번호의 숨김을 on/off할 수 있습니다.
![내 정보 페이지](https://github.com/jeongseongwon94/Taskify-Web/assets/148832721/ae1c4300-6948-4ae7-abb8-13831ae3569d)


## Contributor
#### [jeongseongwon94](https://github.com/jeongseongwon94)
- 내 대시보드 페이지 구현
- 할일 생성/수정 모달 구현
- 메인/서브 헤더 구현
#### [nakyoung98](https://github.com/nakyoung98)
- 대시보드 페이지 구현
- 사이드바 구현
- 컬럼 관리 모달 구현
- 컬럼 provider 구현

#### [SeanKim-416](https://github.com/SeanKim-416)
- 메인페이지 구현
- 내 정보 페이지 구현
- 대시보드 관리 페이지 구현
- 대시보드 provider 구현
- 대시보드 생성 모달 구현

#### [muyahho](https://github.com/muyahho)
- 색상 칩 컴포넌트 구현
- 주제 칩 컴포넌트 구현

#### [dahee0401](https://github.com/dahee0401)
- 캘린더 컴포넌트 구현
