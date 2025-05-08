# chanranhi

## Tech
- - -
### Framework

### Mock API
화면 모의테스트를 진행하기 위해 mockAPI 사용이 필요함

__[MSW](https://mswjs.io/)__ <br>
MSW(Mock Service Worker): 브라우저의 service worker API를 사용해 네트워크 레벨에서 API 요청을 가로채고 mock data를 반환하는 도구 <br>
```text
[]
src/
  mocks/
    handlers.ts        // Mock 응답 정의
    server.ts          // 테스트용 MSW 서버
tests/
  example.spec.ts      // Playwright 테스트 코드
```
MSW를 선택한 이유?
+ 실제 사용할 API 스펙에 맞춰 응답 설계 가능
+ 실제 네트워크 응답과 유사한 환경으로 개발 가능
+ 외부 툴에 의존하지 않고 사용 가능 (ex. postman, swagger 등)
+ playwright나 jest 등 테스트 프레임워크와 통합 가능
+ 프레임워크 종류와 상관없이 동작 (ex. next.js, vue,js 등)
+ 도입이 쉬움

## Scaffolding
- - -

## Getting Started
- - -
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
