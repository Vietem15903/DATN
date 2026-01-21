import React, { useEffect, useRef, useState } from "react";
import TypeProduct from "../../compoments/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SliderCompoment from "../../compoments/SliderCompoment/SliderCompoment";
import HP1 from "../../assets/images/HP1.jpg";
import HP2 from "../../assets/images/HP2.jpg";
import HP3 from "../../assets/images/HP3.jpg";
import HP4 from "../../assets/images/HP4.jpg";
import CardCompoment from "../../compoments/CardCompoment/CardCompoment";
import { Button } from "antd";
import FooterCompoment from "../../compoments/FooterCompoment/FooterCompoment";
import { useQuery } from "@tanstack/react-query";
import * as productService from "../../services/productService";
import { useSelector } from "react-redux";
import Loading from "../../compoments/LoadingCompoment/Loading";
import { useDebounce } from "../../hook/useDebounce";

const HomePage = () => {
  const searchProduct = useSelector((state) => state?.product?.search);
  const refSearch = useRef();
  const [pending, setPending] = useState(false);
  const searchDebounce = useDebounce(searchProduct, 1000);
  const [stateProduct, setStateProduct] = useState([]);
  const [typeProducts, setTypeProducts] = useState([]);
  const [limit, setLimit] = useState(6);

  const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1];
    const search = context?.queryKey && context?.queryKey[2];
    const res = await productService.getAllProduct(search, limit);
    return res;
  };

  const fetchAllTypeProduct = async () => {
    const res = await productService.getAllTypeProduct();
    if (res?.status === "OK") {
      setTypeProducts(res?.data);
    }
  };
  useEffect(() => {
    fetchAllTypeProduct();
  }, []);
  const {
    isPending,
    data: product,
    isPreviousData,
  } = useQuery({
    queryKey: ["product", limit, searchDebounce],
    queryFn: fetchProductAll,
    retry: 3,
    retryDelay: 1000,
    keepPreviousData: true,
  });

  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProduct>
        {typeProducts.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{
          backgroundColor: "#efefef",
          padding: "0 180px",
          height: "auto",
        }}
      >
        <SliderCompoment arrImages={[HP1, HP2, HP3, HP4]} />
        <Loading isPending={isPending || pending}>
          <div
            style={{
              marginTop: "60px",
              display: "flex",
              gap: "60px",
              flexWrap: "wrap",
            }}
          >
            {product?.data?.map((productItem) => {
              return (
                <CardCompoment
                  key={productItem._id}
                  countInStock={productItem.countInStock}
                  description={productItem.description}
                  image={productItem.image}
                  discount={productItem.discount}
                  name={productItem.name}
                  price={productItem.price}
                  rating={productItem.rating}
                  type={productItem.type}
                  id={productItem._id}
                />
              );
            })}
          </div>
          <div
            style={{ display: "grid", placeItems: "center", margin: "32px" }}
          >
            <Button
              type="primary"
              style={{
                margin: "32px",
                padding: "10px 20px",
                fontSize: "16px",
              }}
              onClick={() => setLimit((prev) => prev + 6)}
              disabled={
                product?.total === product?.data?.length ||
                product?.totalPage === 1
              }
            >
              Xem thêm
            </Button>
          </div>
        </Loading>
      </div>
      {/* <FooterCompoment /> */}
    </>
  );
};

export default HomePage;
