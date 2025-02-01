import { motion } from "framer-motion";
import { useState } from "react";
import { RoughNotation } from "react-rough-notation";
import aura from "../assets/aura.png";
import ff from "../assets/ff_logo.svg";
import ohman from "../assets/ohman.jpg";
import eb from "../assets/eb.jpg";

const projects = [
  {
    title: "Farm Fresh",
    description: `Mobile App & Website: A comprehensive solution for ordering fresh groceries, vegetables, and fruits. The 
app features advanced search filters, secure payment options, and real-time delivery tracking 
to enhance user convenience and satisfaction. `,
    image: ff,
    // link: "https://play.google.com/store/apps/details?id=eg.farmfresh.customer",
  },
  {
    title: "ITS Bahrain App",
    description: `Mobile App: A religious app designed for event registration and fetching tiffin menus. The app 
integrates with the ITS API to provide secure login functionality. Through this API, users can 
access detailed Miqaat schedules, fetch the latest tiffin menus, and receive timely updates.`,
    image: "/images/its.png",
    // link: "https://example.com",
  },
  {
    title: "Easy Boba (Ongoing)",
    description: `Social Media Marketing & Website Development: For Easy Boba, we provide comprehensive social media marketing services 
aimed at increasing brand visibility and engagement. By crafting dynamic content and 
targeted campaigns, we help Easy Boba reach a larger audience, drive foot traffic to their 
physical locations, and build a strong online presence. Our strategies focus on fostering 
customer engagement, creating brand loyalty, and boosting sales through platforms like 
Instagram, and Facebook`,
    image: eb,
    // link: "https://example.com",
  },
  //   {
  //     title: "Firoz Farsan (New – Onboarded)",
  //     description: `Social Media Marketing & Website Development:  A newly onboarded client for whom we are currently defining the project scope.
  // The client requires comprehensive social media marketing to enhance their online presence
  // and a professionally designed website to showcase their offerings.`,
  //     image: "/portfolio.png",
  //     // link: "https://example.com",
  //   },
  {
    title: "Aura Power Tools (Ongoing) ",
    description: `Website Development: Currently in progress, we are developing a professional and user-friendly website 
  for Aura Power Tools to showcase their range of tools. The platform will include seamless 
  payment integration, enabling customers to place orders directly on the website. Users will be 
  able to view order details, track their purchases, and receive invoices for their transactions. 
  Additionally, the website will feature an admin panel that allows the Aura Power Tools team 
  to easily manage products, process orders, and monitor overall sales. This comprehensive 
  digital solution is designed to enhance user experience and streamline business operations.`,
    image: aura,
    // link: "https://example.com",
  },
  {
    title: "Oh Man (Ongoing)",
    description: `Social Media Marketing & Website Development: Oh Man, a dynamic clothing and shoes brand, sought to amplify their online 
presence. We provided a visually appealing website and executed social media marketing 
strategies to elevate their brand. Our work focused on creating a user-friendly and responsive 
e-commerce site for a seamless shopping experience. Simultaneously, we crafted engaging 
content and targeted campaigns across platforms like Instagram and Facebook to connect 
with a broader audience, increase customer engagement, and drive sales for their fashion
forward products.`,
    image: ohman,
    // link: "https://example.com",
  },
];

function ProjectsShowcase() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () =>
    setCurrentProject((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      className="relative w-full max-w-5xl mx-auto py-16 px-6"
      id="Projects"
    >
      {/* <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      > */}
      <h2 className="text-center text-white text-3xl w-full">
        <RoughNotation type="highlight" show={true} color="#2563EB">
          Our Work
        </RoughNotation>
      </h2>
      <p className="text-lg mt-4 text-gray-600 dark:text-gray-400 text-center mb-12">
        Take a look at some of my coolest work.
      </p>
      {/* </motion.div> */}

      <div className="relative flex items-center justify-center">
        {/* Project Content */}
        <motion.div
          key={currentProject}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg overflow-hidden shadow-lg max-w-3xl "
        >
          <img
            src={projects[currentProject].image}
            alt={projects[currentProject].title}
            width={800}
            height={500}
            className="w-full h-60 object-fill"
          />
          <div className="p-6 bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              {projects[currentProject].title}
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              {projects[currentProject].description}
            </p>
            {/* <a
              href={projects[currentProject].link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
            >
              View Project →
            </a> */}
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <button
          onClick={prevProject}
          className="absolute left-0 p-3 bg-gray-100 dark:bg-gray-700 rounded-full shadow-lg transform -translate-x-6 hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextProject}
          className="absolute right-0 p-3 bg-gray-100 dark:bg-gray-700 rounded-full shadow-lg transform translate-x-6 hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default ProjectsShowcase;
