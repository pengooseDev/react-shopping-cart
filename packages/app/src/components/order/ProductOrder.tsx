import { Item as OrderItem } from '@/Model/Cart/cart.type';

const Container = ({ children }: React.PropsWithChildren) => {
  return <section className="order-section">{children}</section>;
};

const Header = () => {
  return (
    <header className="flex-col-center mt-20">
      <h2 className="order-section__title">주문/결제</h2>
      <hr className="divide-line mt-20" />
    </header>
  );
};

const Item = ({ name, amount, imageUrl }: OrderItem) => {
  return (
    <>
      <div className="order-container">
        <div className="flex gap-15 mt-10">
          <img className="w-144 h-144" src={imageUrl} alt={name} />
          <div className="flex-col gap-15">
            <span className="order-name">{name}</span>
            <span>수량: {amount}</span>
          </div>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
    </>
  );
};

export const ProductOrder = Object.assign(Container, { Header, Item });
