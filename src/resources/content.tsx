import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Albar",
  lastName: "Elfauzan",
  name: `Albar Elfauzan`,
  role: "Full-stack Web Dev",
  avatar: "/images/avatar1.jpg",
  email: "albarelfauzan@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/albarelfauzan/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/albarelfauzan",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/avatar1.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi there ! lets get to know me better</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Hey i'm Albar, a full stack web dev wannabe who loves turning caffeine into code, I create things that look good and (most of the time) actually work. On the side, I build projects to satisfy my inner nerd.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Albar is a full-stack web developer who focuses on creating clean, reliable, and user-friendly websites from front to back. 
        he continue sharpening his skills by exploring new web technologies and building personal projects that strengthen his craft.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Project Experience",
    experiences: [
      {
        company: "ArtBeat",
        timeframe: "2022 - 2023",
        role: "Fullstack Web Dev",
        achievements: [
          <>
          Curated art marketplace that helps people to discover and buy authentic artworks across the globe
          </>,
          <>
            Designed from scratch over 50 pages of user interface (UI) and user experience (UX) designs for the ArtBeat website.
          </>,
          <>
            Transforming UI/UX designs into code by building the website using NextJS for the frontend and ExpressJS for the backend.
          </>,
          <>
            Won 3rd place in the NFT category at TRON Grand Hackathon – Season 3.
          </>,
          <>
            Won 4th place in the Builder category at TRON Grand Hackathon - Season 5.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/artbeat.png",
            alt: "ArtBeat Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Bcate",
        timeframe: "2023 - 2023",
        role: "Fullstack Web Dev",
        achievements: [
          <>
          A platform that empowers the architectural design community by using blockchain technology to protect their intellectual property rights and 
enable them to monetize their creativity.
          </>,
          <>
            Created wireframes, prototypes, and final UI designs that enhanced user flow clarity and improved overall usability.
          </>,
          <>
            Built full-stack web features using Next.js for the frontend and Express.js for backend services, ensuring smooth performance and a cohesive user experience.
          </>,
          <>
            Won 3rd place in the Artistry category at TRON Grand Hackathon - Season 5.
          </>,
        ],
        images: [],
      },
      {
        company: "MaLink",
        timeframe: "2024 - 2024",
        role: "Fullstack Web Dev",
        achievements: [
          <>
          A platform to managed assets with crypto automation
          </>,
          <>
            Created wireframes, prototypes, and final UI designs that enhanced user flow clarity and improved overall usability.
          </>,
          <>
            Built full-stack web features using Next.js for the frontend and Express.js for backend services, ensuring smooth performance and a cohesive user experience.
          </>,
          <>
            Won 5th place community track prizes at TRON Grand Hackathon - Season 7.
          </>,
        ],
        images: [],
      },
      {
        company: "AscFi",
        timeframe: "2022 - 2022",
        role: "UI/UX Designer",
        achievements: [
          <>
          An innovative Web3 project that turns various tech questions into digital assets and monetization of answers.
          </>,
          <>
            Conducted iterative design improvements based on user needs, resulting in a more intuitive and engaging user experience.
          </>,
          <>
            Become a participant in EVMxIdeathon in the Web3 category.
          </>,
        ],
        images: [],
      },
      {
        company: "Spade Money",
        timeframe: "2023 - 2023",
        role: "Freelance UI/UX Designer",
        achievements: [
          <>
          A money exchange company that performs currency conversions between Renminbi and Rupiah
          </>,
          <>
            Developed a scalable design system that streamlined component usage and strengthened company consistency throughout the website.
          </>,
        ],
        images: [],
      },
      {
        company: "Piggy Ride",
        timeframe: "2023 - 2023",
        role: "Freelance UI/UX Designer",
        achievements: [
          <>
          A motorcycle & car rental company operating in Seminyak, Bali.
          </>,
          <>
            Crafted user-centered UI/UX solutions by refining flows and layouts to improve clarity, usability, and overall engagement.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Brawijaya University",
        description: <>Studied Computer Engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Designed intuitive and consistent user interfaces in Figma, creating wireframes, prototypes, and components that streamlined the overall design workflow.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/bcate-1.png",
            alt: "Project image",
            width: 16,
            height: 16,
          },
          {
            src: "/images/projects/project-01/piggy-1.png",
            alt: "Project image",
            width: 16,
            height: 16,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/malink2.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },  
      {
        title: "Express.js",
        description: (
          <>Powering backend logic through lightweight Express.js services</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Express.js",
            icon: "expressjs",
          },
        ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/avatar2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/bcate2.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/bcate1.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/artbeat1.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/artbeat2.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/piggy1.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/piggy2.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/piggy3.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
