import Skeleton from 'react-loading-skeleton';

const SkeletonLoader = () => {
  return (
    <div>
      <div className="product-details">
        <div className="product-det__loc">
          <Skeleton circle={true} height={20} width={20} />
          <Skeleton height={20} width={100} style={{ marginLeft: '10px' }} />
        </div>
        <div className="product-det__top-content">
          <Skeleton height={10} width={150} />
          <Skeleton height={30} width={350} style={{ marginTop: '10px' }} />
        </div>
        <div className="product-det__content">
          <div className="product-details__carousel-div">
            <Skeleton height={400} />
          </div>
          <div className="product-det__mid-content">
            <div className="product-det__price-details">
              <Skeleton height={20} width={200} style={{ marginBottom: '10px' }} />
              <Skeleton height={30} width={250} />
              <Skeleton height={20} width={150} style={{ marginTop: '10px' }} />
              <Skeleton height={20} width={250} style={{ marginTop: '10px' }} />
              <Skeleton height={20} width={100} style={{ marginTop: '10px' }} />
            </div>
            <div className="product-det__right-div--mobile">
              <div className="p-2 flex flex-col gap-3 sm:flex-row  sm:p-5">
                <Skeleton height={40} width={120} />
                <Skeleton height={40} width={120} />
              </div>
              <Skeleton height={60} width={300} style={{ marginTop: '10px' }} />
            </div>
            <div className="product-details__info">
              <div className="product-det__about">
                <Skeleton count={5} />
              </div>
              <Skeleton height={40} width={150} style={{ marginTop: '10px' }} />
              <div className="product-details__sidebar">
                <div className="product-det__details-list">
                  <Skeleton count={5} />
                </div>
                <Skeleton height={40} width={150} style={{ marginTop: '10px' }} />
              </div>
            </div>
          </div>
          <div className="product-det__right-div--large">
            <div className="product-det__price-details--large">
              <Skeleton height={30} width={150} />
              <Skeleton height={20} width={200} style={{ marginTop: '10px' }} />
            </div>
            <div className="product-det__btn-div">
              <Skeleton height={40} width={100} />
              <Skeleton height={40} width={100} style={{ marginLeft: '10px' }} />
            </div>
            <Skeleton height={40} width={250} style={{ marginTop: '10px' }} />
          </div>
        </div>
        <div className="sticky bottom-0 left-0 sm:h-[5%] sm:px-5 lg:hidden bg-white p-2">
          <Skeleton height={40} width={150} />
        </div>
        <div className="product-det__similar-product-div">
          <Skeleton height={200} width={'100%'} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
