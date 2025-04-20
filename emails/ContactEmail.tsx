import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto my-10 max-w-md rounded border border-gray-200 bg-white p-5">
            <Heading className="text-xl font-bold text-gray-900">
              New Contact Form Submission
            </Heading>
            <Hr className="my-4 border-gray-300" />

            <Section>
              <Text className="text-base font-medium text-gray-900">
                From: {name}
              </Text>
              <Text className="text-sm text-gray-700">Email: {email}</Text>
            </Section>

            <Hr className="my-4 border-gray-300" />

            <Section>
              <Heading as="h3" className="text-lg font-medium text-gray-900">
                Message:
              </Heading>
              <Text className="text-base whitespace-pre-wrap text-gray-700">
                {message}
              </Text>
            </Section>

            <Hr className="my-4 border-gray-300" />

            <Text className="text-xs text-gray-500">
              This email was sent from your portfolio website contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
