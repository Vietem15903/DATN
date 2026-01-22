import { Col } from "antd";
import styled from "styled-components";

export const WrapperProducts = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const WrapperNavbar = styled(Col)`
  background: #fff;
  margin-right: 10px;
  padding: 10px;
  border-radius: 4px;
  height: fit-content;
  margin-top: 20px;
  width: 200px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
