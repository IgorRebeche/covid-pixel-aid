import React from "react";
import Card from "../../Card";
import {
  Wrapper,
  Button,
  CollectedWrapper,
  FinanceNumber,
  Section
} from "./styles";
import Header from "../../Header";

interface Props {}

export default function Home(props: Props) {
  return (
    <Wrapper>
      <Header>
        <Section>
          <CollectedWrapper>
            <span>Arrecadado</span>
            <div>
              <FinanceNumber size={`medium`}>{"R$ 20000,00"}</FinanceNumber>
              <FinanceNumber size={`small`}>{"/ R$ 1.000.000"}</FinanceNumber>
            </div>
          </CollectedWrapper>
        </Section>
        <Section>
          <Button> Compre Pixels! </Button>
        </Section>
        <Section>
          <p style={{ alignSelf: `left` }}> Como Funciona? </p>
        </Section>
      </Header>
      <Card height={'500px'} width={'1500px'}>aaaa</Card>
    </Wrapper>
  );
}
