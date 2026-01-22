import { Menu } from "antd";
import React, { useState } from "react";
import { UserOutlined, ProductOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import HeaderCompomment from "../../compoments/HeaderCompoment/HeaderCompoment";
import AdminUser from "../../compoments/AdminCompoment/AdminUser/AdminUser";
import AdminProduct from "../../compoments/AdminCompoment/AdminProduct/AdminProduct";
import AdminOrder from "../../compoments/AdminCompoment/AdminOrder/AdminOrder";

const AdminPage = () => {
  const items = [
    {
      key: "product",
      icon: <ProductOutlined />,
      label: "Sản phẩm",
    },
    {
      key: "user",
      icon: <UserOutlined />,
      label: "Người dùng",
    },
    {
      key: "order",
      icon: <ShoppingCartOutlined />,
      label: "Đơn hàng",
    },
  ];

  const [keySelected, setKeySelected] = useState("product");
  const handleOnClickMenu = ({ key }) => {
    setKeySelected(key);
  };
  const renderPage = (key) => {
    switch (key) {
      case "product":
        return <AdminProduct />;
      case "user":
        return <AdminUser />;
        case "order":
        return <AdminOrder/>;
      default:
        return <></>;
    }
  };
  return (
    <>
      <HeaderCompomment isHiddenSearch isHiddenCart />
      <div className="admin-layout">
        <Menu
          mode="inline"
          className="admin-menu"
          items={items}
          onClick={handleOnClickMenu}
        />
        <div style={{ flex: 1, padding: "15px" }}>
          {renderPage(keySelected)}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
