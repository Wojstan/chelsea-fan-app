import styled from "styled-components";

import { Flex } from "../styled/Common";

export const StyledTable = styled.table`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  border-collapse: collapse;
  thead {
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
  }

  th,
  td {
    padding: 10px;
  }

  .team {
    display: flex;
    align-items: center;
  }
`;

export const TableTeam = styled(Flex)`
  .img-table {
    width: 4vh;
    width: 4vh;
    margin-right: 1vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const TableParagraph = styled.p`
  color: #242424;
  margin: 0;
`;

export const TablePoints = styled.strong`
  font-weight: 600;
`;
