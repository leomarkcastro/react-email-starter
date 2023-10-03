import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Text,
  Tailwind,
  Preview,
  Button,
  Section,
  Row,
  Column,
  Img,
  Hr,
  Link,
} from "@react-email/components";
import { Markdown } from "@react-email/markdown";
import CustomFont from "../components/CustomFont";
import React from "react";

const markdownText = `
# Shop Your Favorite Shops

In Food Truck Community, you can select an array of food trucks with ease, and order your favorite foods from them.

# Get Your Food Delivered

You can get your food delivered to your home, or you can pick them up at the food truck location.

# Earn Points

You can earn points by ordering foods from our food trucks, and use them to redeem rewards.
`;

export default function WelcomeEmail() {
  return (
    <Html lang="en">
      <Preview>Sample Email</Preview>
      <Head>
        <CustomFont
          fontFamily="YoungSerif"
          fallbackFontFamily="Georgia"
          webFont={{
            url: "https://fonts.gstatic.com/s/youngserif/v2/3qTpojO2nS2VtkB3KtkQZ1t93kY.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>

      <Tailwind
        config={{
          theme: {
            extend: {
              fontFamily: {
                title: ["YoungSerif", "Georgia"],
              },
            },
          },
        }}
      >
        <Body className="font-sans bg-white">
          <Container className="pr-2">
            <Section>
              <Text className="mb-0 text-center font-title">Welcome To</Text>
              <Heading className="mt-0 text-center font-title">
                Food Truck Community
              </Heading>
              <Text>
                By Clicking the Button Below, you consent to our User{" "}
                <Link>Privacy Policy</Link> and <Link>Terms of Conditions</Link>
              </Text>
              <Button
                href="https://www.google.com"
                className="w-full p-2 text-center bg-yellow-300 rounded-md"
              >
                Verify Your Account
              </Button>
            </Section>
            <Hr className="my-8" />
            <Section>
              <Text className="text-xl text-center font-title">
                What To Expect Next
              </Text>
              <Row>
                <Column className="w-1/3 text-center">
                  <Img
                    src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=domino-geeZzrAXyMQ-unsplash.jpg"
                    alt="food truck"
                    className="w-24 h-24 mx-auto overflow-hidden border-2 border-yellow-400 rounded-xl"
                  />
                  <Text>You can start ordering now on our website!</Text>
                </Column>
                <Column className="w-1/3 text-center">
                  <Img
                    src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=domino-geeZzrAXyMQ-unsplash.jpg"
                    alt="food truck"
                    className="w-24 h-24 mx-auto overflow-hidden border-2 border-yellow-400 rounded-xl"
                  />
                  <Text>Pick your date and foods of choice!</Text>
                </Column>
                <Column className="w-1/3 text-center">
                  <Img
                    src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=domino-geeZzrAXyMQ-unsplash.jpg"
                    alt="food truck"
                    className="w-24 h-24 mx-auto overflow-hidden border-2 border-yellow-400 rounded-xl"
                  />
                  <Text>
                    Place and Pay your order and wait for magic to happen!
                  </Text>
                </Column>
              </Row>
              <Markdown
                markdownCustomStyles={{
                  h1: {
                    fontFamily: "YoungSerif, Georgia",
                    fontSize: "1.15rem",
                  },
                }}
                markdownContainerStyles={{
                  padding: "0.2rem",
                }}
              >
                {markdownText}
              </Markdown>
            </Section>
            <Hr className="my-8" />
            <Section>
              <Text className="break-all">
                If you encountered any issues, you can report to our support
                email{" "}
                <Link href="mailto:support@foodtruckcommunity.com">
                  support@foodtruckcommunity.com
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
