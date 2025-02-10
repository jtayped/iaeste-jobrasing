import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export function Email({ url }: { url: string }) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to unipal! Let&apos;s get started!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={paragraph}>Heyyyy,</Text>
          <Text style={paragraph}>Confirm your email please.</Text>
          <Section style={btnContainer}>
            <Button style={button} href={url}>
              Confirm
            </Button>
          </Section>
          <Text style={paragraph}>
            From the trenches,
            <br />
            The IAESTE team.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default Email;

const main = {
  backgroundColor: "#f6fbfe",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 20px 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#20a6ee",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};
