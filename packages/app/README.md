## 필수 요구사항

- [ ] TanStack Query를 기반으로 상태 분리
  - [ ] 낙관적 업데이트를 활용하여 UX/UI 증진
- [ ] MSW를 활용한 API mocking
- [ ] Endpoint만 변경하면 언제든 Real API를 바라볼 수 있다고 가정하고 상상한다.
  - [ ] Real API 없이 로컬에서만 동작하는 상태로 리뷰 받는 것이 기본 원칙
- [ ] 상태 관리 라이브러리가 필요하다면 추가적으로 선택하고 적용한다.
  - [ ] 전략을 세우고 PR 본문에 내용을 작성한다.

## GNB

- [x] 로고를 누르면 상품목록 페이지로 이동한다.
- [x] 장바구니 버튼을 누르면 장바구니 페이지로 이동한다.
- [x] 주문목록 버튼을 누르면 주문목록 페이지로 이동한다.

## 상품목록(List)

- [x] 상품들은 n x 4 레이아웃으로 보여진다.
- [x] 상품들에는 사진, 이름, 금액이 보여진다.
- [ ] 장바구니 버튼을 클릭하면 (\*\*) / 자유롭게 구현 후 내용 작성
- [x] 상품을 클릭하면 상품상세 페이지로 이동한다.
  - [x] Product 컴포넌트의 props에 onClick 로직을 제거한다.

## 선택 요구사항 (심화)

## 상품상세(Detail)

- [ ] 페이지에는 상품 사진, 이름, 금액 정보가 보여진다.
- [ ] 장바구니 버튼을 클릭하면 장바구니 페이지로 이동한다.
- [ ] 장바구니 버튼을 클릭하면 해당 상품이 장바구니에 담긴다.

## 주문 상세(OrderDetail)

- [ ] 주문 정보가 보여진다.
- [ ] 장바구니 버튼을 클릭하면, 해당 상품이 장바구니에 담기고 장바구니 이동 선택 모달이 보여진다.
- [ ] 장바구니 이동 버튼을 누르면 장바구니 페이지로 이동한다.

## UX/UI

- [ ] 반응형 레이아웃을 구현한다.
- [ ] 사용성 개선
  - [ ] 사용자를 위한 로딩 환경 개선
  - [ ] 상품이 없을 때와 같은 다양한 Edge Case 대응
  - [ ] 반응형 레이아웃 구현
  - [ ] 별도의 모바일 레이아웃 추가 제공
- [ ] 매출 증대 및 마케팅을 위해 별도의 기능 구현 (별도의 API 없음)
  - [ ] 브라우저 새로고침시 모든 상태 유지
  - [ ] 흐름을 고려한 맞춤 큐레이팅 상품 추천 기능
  - [ ] 구매 유도를 위한 상품 찜 페이지
- [ ] 매출 증대 및 마케팅을 위한 별도의 도구 추가
  - [ ] Google Analytics
  - [ ] Google Tag Manager

---

# 고민한 사항

## 1. HOC을 이용한 route로직 분리

고차 컴포넌트를 이용해 로직을 작성한 경험이 전무하여, 세션에서 들었던 내용을 학습하여 적용해보고자 함. (현재 고차컴포넌트를 언제 적용해야 좋은지, 어떤 trade-off가 있는지 잘 몰라 여기저기 시도하며 직접 느껴보는 중입니다.)

#### 초기 설계

```ts
import { useNavigate } from 'react-router-dom';

interface WithRouterProps {
  path: string;
}

export const withRouter = (
  Component: React.ComponentType<any>,
  { path }: WithRouterProps
) => {
  const Wrapper = (props: any) => {
    const navigate = useNavigate();

    const onClick = () => {
      props.onClick?.();
      navigate(path);
    };

    return <Component {...props} onClick={onClick} />;
  };

  return Wrapper;
};
```

#### 적용

```tsx
export const List = () => {
  return (
    <section className="product-container">
      {DUMMY.PRODUCT.LIST.map((props) => {
        const ProductWithNav = withRouter(Product, {
          path: `/detail/${props.id}`,
        });
        return <ProductWithNav key={props.id} {...props} />;
      })}
    </section>
  );
};
```

성능상 이슈 + 굳이 withRouter를 사용할 필요가 없다고 판단하여
결론 : 걷어냄

#### 최종 로직

```tsx
export const List = () => {
  const { moveOrderDetail } = useNavigate();

  return (
    <section className="product-container">
      {DUMMY.PRODUCT.LIST.map((props) => (
        <Event.OnClick key={props.id} onClick={() => moveOrderDetail(props.id)}>
          <Product {...props} />
        </Event.OnClick>
      ))}
    </section>
  );
};
```

이유 :

1. 반복문 내 사용으로 withRouter 내부 로직 실행이 반복
2. 보편적인 방법이 아니다보니, 다른 로직이랑 섞여서 복잡도 빠르게 증가 (onClick 걷어내기)

Route 관련 로직은 커스텀 훅으로 로직 대체

느낀 점 :
HOC과 같은 경우 동적으로 값을 받을때보다, 정적인 컴포넌트에 대해 사용하는 것이 더 효율적이라고 판단됨.
