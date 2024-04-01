## 필수 요구사항

- [x] TanStack Query를 기반으로 상태 분리
  - [ ] 낙관적 업데이트를 활용하여 UX/UI 증진
- [x] MSW를 활용한 API mocking
- [x] Endpoint만 변경하면 언제든 Real API를 바라볼 수 있다고 가정하고 상상한다.
  - [x] Real API 없이 로컬에서만 동작하는 상태로 리뷰 받는 것이 기본 원칙
- [x] 상태 관리 라이브러리가 필요하다면 추가적으로 선택하고 적용한다.
  - [ ] 전략을 세우고 PR 본문에 내용을 작성한다.

## GNB

- [x] 로고를 누르면 상품목록 페이지로 이동한다.
- [x] 장바구니 버튼을 누르면 장바구니 페이지로 이동한다.
- [x] 주문목록 버튼을 누르면 주문목록 페이지로 이동한다.

## 상품목록(List)

- [x] 상품들은 n x 4 레이아웃으로 보여진다.
- [x] 상품들에는 사진, 이름, 금액이 보여진다.
- [x] 상품을 클릭하면 상품상세 페이지로 이동한다.
  - [x] Product 컴포넌트의 props에 onClick 로직을 제거한다.
- 장바구니 버튼을 클릭하면 (\*\*) / 자유롭게 구현 후 내용 작성
  - [x] 나의 장바구니에 물품이 추가된다.

## 선택 요구사항 (심화)

## 상품상세(Detail)

- [x] 페이지에는 상품 사진, 이름, 금액 정보가 보여진다.
- [x] 장바구니 버튼을 클릭하면 장바구니 페이지로 이동한다.
  - [x] 장바구니 버튼을 클릭하면 해당 상품이 장바구니에 담긴다.

## 장바구니

- [x] 해당 상품의 수량을 변경할 수 있다.
  - [x] 상품의 수량은 항상 1이상, 20이하여야 한다
    - [x] 상품의 수량이 1이면 상품 수량 감소할 수 없다.
    - [x] 상품의 수량이 20이면 상품 수량 증가할 수 없다.
  - [x] 해당 상품의 총 금액이 변경된다.
  - [x] 해당 상품이 체크되어있으면, 결제예상금액도 변경된다.
- [x] 모두선택 버튼이 체크되면, 상품들이 모두 선택된다.
  - [x] 모두선택 버튼이 체크가 풀리면, 상품들의 선택이 모두 해제된다.
- [ ] 상품 삭제 버튼을 누르면, confirm 메시지가 보여진다.
  - [x] 확인을 누르면, 선택된 상품이 모두 삭제된다.
  - [x] 결제예상금액이 0원이 된다.
- [ ] 🗑 버튼을 누르면 confirm 메시지가 보여진다.
  - [x] 확인을 누르면, 해당 상품이 삭제된다.
- [x] 체크된 상품 개수에 따라 주문하기 버튼 내부에 수량이 변경된다.
- [ ] 주문하기 버튼을 누르면, confirm 메시지가 보여진다.
  - [x] 확인을 누르면, 주문/결제 페이지로 이동한다.
  - [x] 확인을 누르면, 장바구니에서 선택된 상품들이 삭제된다.
  - [ ] 확인을 누르면, 체크된 상품들을 데이터베이스에서 제거한다.
- [x] 주문할 상품이 0개이면 버튼이 비활성화된다.

## 선택 요구사항 (심화)

### 상품상세

- [x] 페이지에는 상품 사진, 이름, 금액 정보가 보여진다.
- [x] 장바구니 버튼을 클릭하면 장바구니 페이지로 이동한다.
- [x] 장바구니 버튼을 클릭하면 해당 상품이 장바구니에 담긴다.

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

## Model(Stage Manager)

- @pengoose/jotai 사용
  - [> npm](https://www.npmjs.com/package/@pengoose/jotai)
  - [> Docs](https://github.com/pengooseDev/goose_module/blob/main/jotai/README.md)

* [ ] Getter와 Setter를 하나의 객체 내부에서 관리한다.
* [ ] 상태를 변경하는 로직은 오직 Setter를 통해서만 가능하다.

---

# 고민한 사항

## 1. HOC을 이용한 route로직 분리

고차 컴포넌트를 이용해 로직을 작성한 경험이 전무하여, 세션에서 들었던 내용을 학습하여 적용해보고자 함. (현재 고차컴포넌트를 언제 적용해야 좋은지, 어떤 trade-off가 있는지 잘 몰라 여기저기 시도하며 직접 느껴보는 중입니다.)

### 1. 초기 설계

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

### 2. 변경된 로직

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

### 3. 새로운 문제 직면 (컴포넌트 내부 서로 다른 onClick 적용 불가)

해결책: Product 컴포넌트 합성컴포넌트로 분리

```tsx
import { Product as ProductData } from '@/types';

const Container = ({ children }: React.PropsWithChildren) => {
  return <div>{children}</div>;
};

const Image = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} />;
};

const InfoContainer = ({ children }: React.PropsWithChildren) => {
  return <div className="flex justify-between w-280 p-5">{children}</div>;
};

const Info = ({ name, price }: Omit<ProductData, 'id' | 'image'>) => {
  return (
    <div className="product-info">
      <span className="product-info__name">{name}</span>
      <span className="product-info__price">{price}원</span>
    </div>
  );
};

export const Product = Object.assign(Container, { Image, InfoContainer, Info });
```

```tsx
export const List = () => {
  const { moveOrderDetail } = useNavigate();
  const addCart = (id: number) => console.log(`add ${id}`);

  return (
    <section className="product-container">
      {DUMMY.PRODUCT.LIST.map(({ id, name, price, image }) => (
        <Product>
          <Event.onClick key={id} onClick={() => moveOrderDetail(id)}>
            <Product.Image src={image} alt={name} />
          </Event.onClick>
          <Product.InfoContainer>
            <Product.Info name={name} price={price} />
            <Event.onClick key={id} onClick={() => addCart(id)}>
              <Product.Image src={'assets/svgs/cart.svg'} alt="장바구니" />
            </Event.onClick>
          </Product.InfoContainer>
        </Product>
      ))}
    </section>
  );
};
```

View에서 로직을 분리하고싶은 욕심이 들어가있는 코드입니다.

```tsx
export const ProductComponent = ({ image, name, price }: ProductData) => {
  return (
    <div>
      <img src={image} alt={name} />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{name}</span>
          <span className="product-info__price">{price}원</span>
        </div>
        <img src="assets/svgs/cart.svg" alt="장바구니" />
      </div>
    </div>
  );
};
```

기존 컴포넌트로 돌아간 뒤, onClick(onDetail, onCart)로직만 props 전달하는 방법도 있지만 우선 이렇게 적용해보았습니다.

---

# 2. AddCart UX 고려하기

상품을 추가하는 경우는 다음과 같습니다.
![alt text](https://i.imgur.com/eOkyVFw.png)

List 페이지의 우측 하단 Cart SVG를 클릭할 경우, 두 가지 로직을 구현할 수 있습니다.

```
1. 장바구니에 상품이 추가.
2. 장바구니 페이지로 이동.
```

보편적인 사용자는 **1번**을 기대합니다.
또한, `추가되는 개수`는 1개일 것이라고 예상하는 것이 보편적입니다.
