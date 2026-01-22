import React from 'react';
import Loading from '../../compoments/LoadingCompoment/Loading';
import { useLocation } from 'react-router-dom';
import { WrapperInfo } from '../OrderPage/style';
import { Label, WrapperContainer, WrapperItemOrder, WrapperRight, WrapperValue } from './style';
import { convertPrice } from '../../utils';
import * as message from "../../compoments/Message/Message";
import { orderContant } from '../../contant';



const OrderSuccess = () => {
    const { contextHolder } = message.useCustomMessage();
    const location = useLocation();
    const { state } = location;
    localStorage.removeItem('delivery');
    return (
        <>
            {contextHolder}
            <div style={{ background: "#f5f5fa", width: "100%", minHeight: "100vh" }}>
                <Loading isPending={false}>
                    <div style={{ height: "100%", maxWidth: "1270px", width: "100%", margin: "0 auto", padding: "0 16px" }}>
                        <h3>Đặt hàng thành công</h3>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <WrapperContainer>
                                <WrapperInfo>
                                    <div>
                                        <label>Phương thức giao hàng</label>
                                        <WrapperValue>
                                            <span style={{ color: "#ea8500", fontWeight: "bold" }}>
                                                {orderContant.dilivery[state?.delivery]}
                                            </span>
                                           - Giao hàng tiết kiệm
                                        </WrapperValue>
                                    </div>
                                </WrapperInfo>
                                <WrapperInfo>
                                    <div>
                                        <Label>Phương thức thanh toán</Label>
                                        <WrapperValue>
                                            {orderContant.payment[state?.payment]}
                                        </WrapperValue>
                                    </div>
                                </WrapperInfo>
                                <WrapperInfo>
                                    {state.orders?.map((order) => {
                                        return (
                                            <WrapperItemOrder key={order?.name}>
                                                <div
                                                    style={{
                                                        width: "390px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 4,
                                                    }}
                                                >
                                                    <img
                                                        src={order?.image}
                                                        alt={order?.name || "Sản phẩm"}
                                                        style={{
                                                            width: "77px",
                                                            height: "79px",
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                    <div
                                                        style={{
                                                            width: 260,
                                                            overflow: "hidden",
                                                            textOverflow: "ellipsis",
                                                            whiteSpace: "nowrap",
                                                        }}
                                                    >
                                                        {order?.name}
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        flex: 1,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "space-between",
                                                    }}
                                                >
                                                    <span>
                                                        <span style={{ fontSize: "13px", color: "#242424" }}>
                                                            Giá tiền: {convertPrice(order?.price)}
                                                        </span>
                                                    </span>
                                                    <span>
                                                        <span style={{ fontSize: "13px", color: "#242424" }}>
                                                            Số lượng: {order?.amount}
                                                        </span>
                                                    </span>
                                                    <span
                                                        style={{
                                                            color: "rgb(255, 66, 78)",
                                                            fontSize: "13px",
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        {convertPrice(order?.amount * order?.price)}
                                                    </span>
                                                </div>
                                            </WrapperItemOrder>
                                        );
                                    })}
                                </WrapperInfo>

                                <WrapperRight
                                    style={{
                                        color: "rgb(255, 66, 78)",
                                        fontSize: "20px",
                                        fontWeight: 500,
                                    }}
                                >
                                    Tổng tiền: 
                                    {convertPrice(Math.ceil(state?.totalPriceMemo))}
                                </WrapperRight>
                            </WrapperContainer>
                        </div>
                    </div>
                </Loading>
            </div>
        </>
    );
};

export default OrderSuccess;
