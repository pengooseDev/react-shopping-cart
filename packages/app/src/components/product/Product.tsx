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
