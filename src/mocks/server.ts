import { setupServer } from 'msw/node';
import { handlers } from './httpHandlers';

// 테스트프레임워크는 Service Worker를 직접 실행하지 않으므로, Node 환경에서 MSW 서버를 만들어야 합니다.
export const server = setupServer(...handlers);
