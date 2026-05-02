import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    title: "Web Development & Digital Marketing Intern",
    company_name: "SHASAA GROUPS",
    date: "JAN 2026 - FEB 2026",
    icon: <Briefcase />,
    iconBg: "#1F2833",
    points: [
      "Assisted in social media marketing campaigns and created digital content for promotional activities",
      "Performed SEO optimization techniques and analyzed website traffic metrics",
      "Contributed to front-end development and UI improvements",
      "Supported online branding and marketing strategies"
    ],
  },
  {
    title: "Full Stack Development Projects",
    company_name: "Personal & Academic Projects",
    date: "2024 - 2026",
    icon: <Briefcase />,
    iconBg: "#1F2833",
    points: [
      "Built AI-integrated platform for legal case categorization and lawyer matching using MERN stack",
      "Developed full-stack food donation management system with responsive UI and MongoDB",
      "Created a machine learning NLP system for detecting AI-generated fake financial news using Python",
      "Implemented authentication, complex database integration, and predictive AI models"
    ],
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    company_name: "Dr. M.G.R. Educational and Research Institute",
    date: "2023 - 2026",
    icon: <GraduationCap />,
    iconBg: "#B026FF",
    points: [
      "Specialized in Full Stack Web Development and AI Integration",
      "Completed certifications: Python Programming, IBM Advanced AI, Web Development",
      "Developed multiple real-world applications solving business problems",
      "Strong foundation in MERN stack, Python, and SQL"
    ],
  }
];

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: 'rgba(255, 255, 255, 0.05)', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.1)' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg, color: '#fff', boxShadow: '0 0 10px #66FCF1, inset 0 0 10px #66FCF1', border: 'none' }}
    icon={experience.icon}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-accent text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-gray-300 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-2">What I have done so far</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Work Experience.</h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline lineColor="rgba(102, 252, 241, 0.2)">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
