import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/system/SectionIntro";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Container>
      <SectionIntro
        align={align}
        description={description}
        eyebrow={eyebrow}
        title={title}
      />
    </Container>
  );
}
