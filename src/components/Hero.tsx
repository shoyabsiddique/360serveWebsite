import { HeroCards } from "./HeroCards";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  const handleDone = () => {
    console.log("Type effect finished.");
  };

  const handleType = (text: number) => {
    console.log(`${text} was just typed.`);
  };

  const { scrollYProgress } = useScroll();
  const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 0]); // Example of scaling
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Starting state
      whileInView={{ opacity: 1, y: 0 }} // When the element comes
      transition={{ duration: 0.8 }}
      style={{ scale: scaleValue }}
    >
      <section
        className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10"
        id="Services"
      >
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            {/* <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                One Stop
              </span>{" "}
              For All Your
            </h1>{" "}
            IT Needs at{" "}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                360Serve
              </span>{" "}
            </h2> */}
            {/* <div className="typewriter">
              <h1>One Stop For All Your IT Needs at 360Serve</h1>
            </div> */}
            <h1
              style={{
                paddingTop: "5rem",
                margin: "auto 0",
                fontWeight: "normal",
              }}
            >
              <h1 className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text font-bold">
                At 360Serve We
              </h1>{" "}
              <span style={{ color: "orange", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Develop Apps",
                    "Develop Websites",
                    "Do Digital Marketing",
                    "Provide Solutions",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </span>
            </h1>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Transforming Ideas into Digital Solutions That Drive Success.
          </p>

          {/* <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div> */}
        </div>

        {/* Hero cards sections */}
        <div className="z-10">
          <HeroCards />
        </div>

        {/* Shadow effect */}
        <div className="shadow"></div>
      </section>
    </motion.div>
  );
};
