import React, { ReactNode } from "react";
import { Wrapper } from "./styles";

interface Props {
  children: ReactNode;
}

export default function Header(props: Props) {
  return <Wrapper>{props.children}</Wrapper>;
}
