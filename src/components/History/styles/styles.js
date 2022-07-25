import styled from "styled-components";

export const Frame = styled.div`
    width: 500px;
    height: 500px;
    overflow-y: scroll;
    color: #fff;
    .title {
        color: #fff;
        font-size: 20px;
        text-align: center;
        text-transform: uppercase;
    }
    .user {
        border: 1px solid #333;
        margin-bottom: 5px;
        padding: 0 10px;
        border-radius: 5px;
    }
`