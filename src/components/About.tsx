export const About = () => {
  return (
    <section id="About" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          {/* <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          /> */}
          {/* <AboutLogo /> */}
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                360Serve
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                At 360Serve, we specialize in turning your ideas into reality
                with innovative and reliable software solutions. From custom
                software development to creating stunning, user-friendly
                websites, we offer a full suite of services designed to help
                businesses thrive in today’s digital landscape. Our mission is
                simple: to empower individuals and organizations with
                cutting-edge technology that drives growth, efficiency, and
                success. Whether you need a robust mobile app, a tailored
                business application, or a seamless e-commerce platform, our
                team of skilled developers and designers has you covered.
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
