const Container = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='product-detail-container'>
      <div className='flex-col-center w-520'>{children} </div>
    </div>
  );
};

const Image = ({ src, alt }: { src: string; alt: string }) => {
  return <img className='w-480 h-480 mb-10' src={src} alt={alt} />;
};

const InfoContainer = ({ children }: React.PropsWithChildren) => {
  return <div className='product-detail-info'>{children}</div>;
};

const Title = ({ children }: React.PropsWithChildren) => {
  return <span className='product-detail-info__name'>{children}</span>;
};

const Price = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='flex justify-between'>
      <span>금액</span>
      <span className='product-detail-info__price'>{children}</span>
    </div>
  );
};

export const ProductDetail = Object.assign(Container, {
  Image,
  InfoContainer,
  Title,
  Price,
});

export const Hr = () => {
  return <hr className='divide-line-gray my-20' />;
};
