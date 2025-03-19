# LOLI

</div>

## 📝 소개

📅개발 기간: 2025.03.12 ~ 2025.03.18

리그오브레전드 챔피언 & 아이템 & 로테이션 챔피언 정보를 모아둔 사이트 "LOLI"입니다.

<br />

### 💬 배포 링크

https://lol-infomation-app.vercel.app/

### ✨ 화면 구성
![Image](https://github.com/user-attachments/assets/ed9ab2b8-c6c9-4e31-b7b0-5ea0c8cbf86b)
![Image](https://github.com/user-attachments/assets/26ca593e-09cd-4034-92bb-f2f24d44201f)
![image](https://github.com/user-attachments/assets/3444e0cc-9d94-4b2e-89b7-4e4fa9d7fb89)
![Image](https://github.com/user-attachments/assets/0e7f2822-ab64-433e-82f2-a0ee51e28656)
![image](https://github.com/user-attachments/assets/73d8262c-3f7e-4f10-9975-ed5c5de5c785)


<br />

## 📄 기능 소개

- App Routing으로 라우팅
- Link 태그를 사용해 홈/챔피언/로테이션/아이템 페이지 이동
- SSG 렌더링 기법으로 아이템 페이지 구현
- ISR 렌더링 기법으로 챔피언 페이지 구현
- SSR 렌더링 기법으로 챔피언 상세 페이지 구현
- CSR로 로테이션 페이지 구현
- Route Handler/ Server Action을 사용한 데이터 fetch로직 작성

<br />

## ⚙ 기술 스택

<div>
<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg" width="80" alt="react logo"  />
<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" width="80" alt="react logo"  />
<img src="https://img.shields.io/badge/typescript-%23007ACC.svg" width="80" alt="redux logo"  />
<img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js" width="80" alt="redux logo"  />
</div>

<br />


## 📁 프로젝트 구조

📁
```
lol-info-app
├─ package-lock.json
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.mjs
├─ 📁public
│  ├─📁fonts
│  │  └─📁GowunBatang
│  │     ├─ GowunBatang-Bold.ttf
│  │     └─ GowunBatang-Regular.ttf
│  └─📁image
│     ├─ homeImage1.png
│     ├─ homeImage2.png
│     └─ homeImage3.png
├─ README.md
├─📁src
│  ├─📁app
│  │  ├─📁api
│  │  │  └─ rotation
│  │  │     └─ route.ts
│  │  ├─📁champions
│  │  │  ├─ error.tsx
│  │  │  ├─ loading.tsx
│  │  │  ├─ page.tsx
│  │  │  └─📁[id]
│  │  │     ├─ error.tsx
│  │  │     ├─ loading.tsx
│  │  │     └─ page.tsx
│  │  ├─ globals.css
│  │  ├─ icon.png
│  │  ├─📁items
│  │  │  ├─ error.tsx
│  │  │  ├─ loading.tsx
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ provider.tsx
│  │  └─📁rotation
│  │     ├─ clientPage.tsx
│  │     └─ page.tsx
│  ├─📁components
│  │  ├─ BackButton.tsx
│  │  ├─📁championsDetail
│  │  │  ├─ ChampionsDetailItems.tsx
│  │  │  └─ ChampionsDetailList.tsx
│  │  ├─ ChampionsList.tsx
│  │  ├─ ItemList.tsx
│  │  ├─ RotationChampionList.tsx
│  │  ├─📁spells
│  │  │  ├─ SpellItems.tsx
│  │  │  └─ SpellList.tsx
│  │  └─📁ui
│  │     └─ button.tsx
│  ├─📁constants
│  │  ├─ apiKey.ts
│  │  ├─ imageSize.ts
│  │  ├─ navigate.ts
│  │  ├─ staleTime.ts
│  │  ├─ style.ts
│  │  └─ url.ts
│  ├─📁hooks
│  │  └─📁query
│  │     └─ useFetchRotationQuery.ts
│  ├─📁lib
│  │  └─ utils.ts
│  ├─📁types
│  │  ├─ Champion.ts
│  │  ├─ ChampionRotation.ts
│  │  └─ Items.ts
│  └─📁utils
│     ├─📁routeHandler
│     │  └─ clientApi.ts
│     └─📁serverActions
│        ├─ fetchChampionsData.ts
│        ├─ fetchChampionsDetailData.ts
│        ├─ fetchItemsData.ts
│        └─ fetchVersionData.ts
├─ tailwind.config.ts
└─ tsconfig.json

```

<br />

## 🤔 트러블 슈팅

- 프로덕트 모드에서는 상수화한 tailwindcss를 인식하지 못한다!<br />
(https://velog.io/@kjjyyy01/%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85%ED%94%84%EB%A1%9C%EB%8D%95%ED%8A%B8-%EB%AA%A8%EB%93%9C%EC%97%90%EC%84%9C%EB%8A%94-%EC%83%81%EC%88%98%ED%99%94%ED%95%9C-tailwindcss%EB%A5%BC-%EC%9D%B8%EC%8B%9D%ED%95%98%EC%A7%80-%EB%AA%BB%ED%95%9C%EB%8B%A4)


<br />

## 프로젝트 소감

- 이번 프로젝트는 쉬운 듯 어려운, 양면의 얼굴을 지닌 프로젝트였다.
- Next.js는 사용법 자체는 직관적이어서 빠르게 프로젝트에 적용할 수 있었다.
- 타입스크립트를 도입하면서 코드의 안정성이 향상되었음을 느꼈다. 초기에는 타입 정의와 에러로 인한 어려움이 있었지만, 점차 익숙해졌다.
- tailwindcss는 클래스 기반의 빠른 스타일링을 가능하게 해 주었지만, 클래스 네이밍을 상수화하거나 동적으로 사용할 때 발생하는 문제점들을 경험하면서 CSS 최적화에 대해 다시 한 번 생각해볼 수 있는 계기가 되었습니다.
