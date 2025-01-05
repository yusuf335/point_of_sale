interface IProductByCategoryProps {
  params: {
    id: string;
  };
}

const ProductByCategory = async ({ params }: IProductByCategoryProps) => {
  const id = params.id;
  return (
    <>
      <p>{id}</p>
    </>
  );
};

export default ProductByCategory;
