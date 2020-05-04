import React, { ReactNode } from "react";
import { Wrapper } from "./styles";
interface Props {
  centered?: boolean;
  children: ReactNode;
  width?: string;
  height?: string;
}

export default function Card(props: Props) {
  const { children, height, width } = props;

  return <Wrapper height={height} width={width}>{children}</Wrapper>;
}
