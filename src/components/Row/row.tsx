import styled from "styled-components";
import { layout, LayoutProps } from "styled-system";

type ColumnProps = LayoutProps;

export const Row = styled.div<ColumnProps>`
  display: flex;
  flex-direction: row;
  ${layout};
`;