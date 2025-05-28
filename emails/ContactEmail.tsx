import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
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
        <Body className="bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
          <Container className="mx-auto my-10 max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
            <Section className="mb-4 rounded-t-lg bg-gradient-to-r from-blue-600 to-purple-600 p-5">
              <Heading className="text-center text-2xl font-bold text-white">
                New Message Received
              </Heading>
              <Text className="mt-1 text-center text-sm text-blue-100">
                Someone wants to connect with you
              </Text>
            </Section>

            <Section className="px-2">
              <Text className="mb-4 text-base text-gray-500">
                You've received a new message from your portfolio website:
              </Text>
            </Section>

            <Section className="mb-4 rounded-lg border-l-4 border-blue-500 bg-gray-50 p-4">
              <Heading
                as="h3"
                className="text-md mb-2 font-medium text-gray-700"
              >
                Sender Details
              </Heading>
              <Text className="mb-1 text-lg font-medium text-gray-900">
                Name: <span className="font-bold">{name}</span>
              </Text>
              <Text className="text-md mb-0 text-blue-600">
                Email:{" "}
                <Link href={`mailto:${email}`} className="underline">
                  {email}
                </Link>
              </Text>
            </Section>

            <Section className="mb-4 rounded-lg border-l-4 border-purple-500 bg-gray-50 p-4">
              <Heading
                as="h3"
                className="text-md mb-2 font-medium text-gray-700"
              >
                Message Content
              </Heading>
              <Text className="rounded border border-gray-200 bg-white p-3 text-base whitespace-pre-wrap text-gray-700 italic">
                "{message}"
              </Text>
            </Section>

            <Hr className="my-4 border border-gray-200" />

            <Section className="text-center">
              <Text className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} | This email was automatically
                generated from your portfolio contact form.
              </Text>
              <Text className="mt-1 text-xs text-gray-400">
                Please do not reply directly to this email.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
