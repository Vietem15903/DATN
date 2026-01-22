import styled from 'styled-components'
import { Row } from "antd";

export const WrapperHeader = styled(Row)`
    padding: 10px clamp(16px, 4vw, 120px);
    background-color: #ee6647ff;
    flex-wrap: wrap;
    row-gap: 12px;

    @media (max-width: 768px) {
        & > .ant-col {
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
`

export const WrapperTextHeader = styled.span`
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    line-height: 40px;
    white-space: nowrap;
    cursor: pointer
`
export const WrapperHeaderAccount = styled.div`
    display : flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    margin-left: 12px;
    white-space: nowrap;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: space-between;
        margin-left: 0;
        white-space: normal;
    }
`
export const WrapperHeaderPopup = styled.p`
    cursor : pointer;
    padding: 4px 8px;
    &:hover{
        color: #2d77eeff;
    }
`
