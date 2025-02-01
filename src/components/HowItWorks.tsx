import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import { motion, useScroll, useTransform } from "framer-motion";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Brainstorm",
    description:
      "Understand your goals, target audience, and unique requirements. Collaborate to develop ideas that align with your business vision.",
  },
  {
    icon: <MapIcon />,
    title: "Unify",
    description:
      "Combine creativity and technology to design seamless solutions. Ensure all elements—software, web, and marketing—work in harmony.",
  },
  {
    icon: <PlaneIcon />,
    title: "Implement",
    description:
      "Develop and launch your tailored solutions with precision. Focus on quality, functionality, and scalability for future growth.",
  },
  {
    icon: <GiftIcon />,
    title: "Leverage",
    description:
      "Use analytics and feedback to enhance performance. Adapt and optimize to stay ahead in the competitive landscape.",
  },
];

export const HowItWorks = () => {
  const { scrollYProgress } = useScroll();
  // const scaleValue = useTransform(scrollYProgress, [-1, 1], [1, 2]); // Example of scaling
  const opacityValue = useTransform(
    scrollYProgress,
    [0.5, 0.75, 1],
    [1, 0.75, 0.5]
  ); // Example of fading out
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Starting state
      whileInView={{ opacity: 1, y: 0 }} // When the element comes
      transition={{ duration: 0.8 }}
      style={{ opacity: opacityValue }}
    >
      <section id="howItWorks" className="container text-center py-24 sm:py-32">
        <h2 className="text-3xl md:text-4xl font-bold ">
          How We{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Works{" "}
          </span>
          Step-by-Step Guide
        </h2>
        <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground"></p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon, title, description }: FeatureProps) => (
            <Card key={title} className="bg-muted/50">
              <CardHeader>
                <CardTitle className="grid gap-4 place-items-center">
                  {icon}
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>{description}</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
