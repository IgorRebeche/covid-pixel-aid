import React, { ReactNode } from "react";
import { Wrapper } from "./styles";
interface Props {
  centered?: boolean;
  children: ReactNode;
}

export default function Card(props: Props) {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
}
