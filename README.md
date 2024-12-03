# 📝 do-with

## Overview

#### 🔗 [배포 링크](https://dowith.today)

#### 🔗 [API 문서 링크](https://api.dowith.today/docs/index.html)

### 🙌 서비스 소개

- 친구와 채팅하며 Youtube 영상을 함께 시청하는 서비스입니다.
- 재생시간 동기화를 통해 Youtube 영상의 같은 구간을 함께 시청하는 것이 특징인 서비스입니다.
- 목표와 활동 을 기록하고 팀원들과 공유하며 좋아요와 댓글을 달 수 있는 것이 특징인 서비스입니다.

### 🤝 팀원 구성

👩‍💻 BE: [고건호](https://github.com/KOKEONHO)<br>
👨‍💻 FE: [poco](https://github.com/poco111), [아티](https://github.com/lolWK)

### 기술 스택

Frontend: React, TypeScript, Tailwind CSS, styled-components, Zustand

### 작업 관리

주 3회 정기 회의를 통해 작업 순서 및 방향성에 대해 고민을 나누고 작업 내용을 공유하여 [회의록](https://jamstorage.notion.site/4816874618ea42cd93662c86644ac86d?pvs=4) 작성

---

## 프로젝트 구조

```
├── README.md
├── .eslintrc.cjs
├── .prettierrc
├── .gitignore
├── package-lock.json
├── package.json
├── tailwind.config.cjs
│
└── src
     ├── assets
     │     ├── fonts
     │     ├── icons
     │     └── images
     ├── components
     │     ├── common
     │     │     ├── button
     │     │     |    ├── button.tsx
     │     │     |    └── button.stories.tsx
     │     │     ├── input
     │     │     |    ├── input.tsx
     │     │     |    └── input.stories.tsx
     │     |     |         .
     │     |     |         .
     │     │     └── modal
     │     │         ├── alet-modal
     |     │         |    └── alert-modal.tsx
     │     │         ├── confirm-modal
     |     │         |    └── confirm-modal.tsx
     │     │         └── modal-manager.tsx
     │     ├── space-list
     │     │     ├── joined-space-list.tsx
     │     │     ├── searched-space-list.tsx
     │     │     └── waiting-space-list.tsx
     │     |               .
     │     |               .
     │     └── ui
     │           ├── button.tsx
     │           ├── dialog.tsx
     │           |         .
     │           |         .
     │           └── tooltip.tsx
     ├── constants
     │     ├── api.ts
     │     ├── media-query.ts
     │     ├── oauth-login.ts
     │     └── space.ts
     ├── hooks
     │     ├── queries
     │     |    ├── use-create-space.ts
     │     |    ├── use-get-joined-space-list.ts
     │     |    |          .
     │     |    |          .
     │     |    └── use-oauth-login.ts
     │     ├── use-auth-check-and-redirect-login.tsx
     │     ├── use-debouce-input.ts
     │     ├── use-element-width.ts
     │     └── use-media-query.ts
     ├── lib
     │     └── utils.ts
     ├── mocks
     │     ├── db
     |     │     ├── Error.ts
     |     │     └── Spaces.ts
     │     ├── handlers
     |     │     ├── spaces
     |     |     │     ├── get-joined-spaces-handler.ts
     |     |     │     └── get-waiting-spaces-handler.ts
     |     │     └── index.ts
     │     ├── utils
     |     │     └── random.ts
     │     └── browser.ts
     ├── pages
     │     ├── home-page.tsx
     │     |        .
     │     |        .
     │     └── user-app-name-setup-page.tsx
     ├── routes
     │     └── routes.tsx
     ├── service
     │     ├── api
     │     |    ├── create-space.ts
     │     |    ├── get-joined-space-list.ts
     │     |    |      .
     │     |    |      .
     │     |    └── user-app-name.ts
     │     └── axios.ts
     ├── store
     │     ├── auth
     │     |    └── use-user-store.ts
     │     └── use-modal-store.ts
     ├── types
     │     ├── animation.d.ts
     │     ├── api.d.ts
     │     |    .
     │     |    .
     │     ├── twin.d.ts
     │     └── vite-env.d.ts
     │          .
     │          .
     │          .
     ├── App.tsx
     ├── index.css
     └── main.tsx
```

---

## 주요기능

### 💬 구글, 카카오 로그인

- 구글 및 카카오 계정을 이용하여 간편하게 로그인할 수 있습니다.

### ⏱️ 스페이스 검색

- 관심 있는 키워드를 입력하여 생성된 스페이스를 검색할 수 있습니다.

### 스페이스 생성

- 목표에 맞는 스페이스를 생성하고, 대표 이미지를 설정할 수 있습니다.

### 닉네임 변경

- 사용자가 입력한 닉네임의 유효성을 검사한 후 닉네임을 변경할 수 있습니다.

### 반응형 디자인

- 모든 기기에서 원활하게 사용할 수 있도록 반응형 디자인을 지원합니다.

---

## To be continued

---

## 🔫 Trouble Shooting
