import invariant from 'tiny-invariant';

/**
 * 기본 URL을 기반으로 완전한 URL을 구성하기 위한 빌더 클래스입니다.
 */
export class URLBuilder {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  build(path: string): string {
    if (this.baseUrl.endsWith('/') && path.startsWith('/')) {
      return `${this.baseUrl}${path.substring(1)}`;
    }
    if (!this.baseUrl.endsWith('/') && !path.startsWith('/')) {
      return `${this.baseUrl}/${path}`;
    }
    return `${this.baseUrl}${path}`;
  }
}

function createURLBuilder(): URLBuilder {
  invariant(
    process.env.FOCUS_API_URL,
    'FOCUS_API_URL 환경 변수가 설정되지 않았습니다.'
  );
  return new URLBuilder(process.env.FOCUS_API_URL);
}

export const urlBuilder = createURLBuilder();
