// ======================================================
// File: src/sections/Contact.jsx
// Purpose: Contact section — contact method cards, a thank-you
//          banner, and an availability card.
// Why it exists: Gives visitors a way to reach out and see
//                availability at a glance.
// Used In:
//   - src/pages/Home.jsx
// Responsibilities:
//   - Renders the "Contact" header.
//   - Renders the four contact method cards + thank-you banner.
//   - Renders the Availability card with info rows.
// ======================================================

// Section + row icons (lucide-react)
import {
  Send,
  Mail,
  FileText,
  CalendarCheck,
  MapPin,
  Clock,
  Brain,
  Sparkles,
} from "lucide-react";

// Brand icons for the social contact cards
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Purple icon badge reused across the portfolio
import IconBadge from "../components/IconBadge";

// Hoverable card reused from the About section
import AboutCard from "../components/AboutCard";

// Clickable contact method card
import ContactCard from "../components/ContactCard";

// Technology chips for the "Currently Learning" row
import TechChip from "../components/TechChip";

// Shared theme-aware card styling (background, border, shadow)
import { cardStyle, cardStyleShadow } from "../utils/cardStyle";

// Scroll-reveal wrapper + heading underline styles
import Reveal from "../components/Reveal";
import { underlineClasses } from "../utils/underlineClasses";

// Resume file (imported so Vite bundles it and returns its URL)
import resume from "../assets/Sama_Prudhvi_Sai_Reddy_Resume.docx";

function Contact({ isDark }) {
  const subtitleText = isDark ? "text-slate-300" : "text-slate-600";
  const badgeText = isDark ? "text-slate-200" : "text-slate-700";
  const textSecondary = isDark ? "text-slate-300" : "text-slate-600";
  const rowDivider = isDark ? "divide-slate-800" : "divide-slate-200/70";

  // Contact methods data
  const contactMethods = [
    {
      title: "Email",
      description: "samaprudhvisaireddy@gmail.com",
      href: "mailto:samaprudhvisaireddy@gmail.com",
      icon: Mail,
    },
    {
      title: "LinkedIn",
      description: "Connect with me",
      href: "https://www.linkedin.com/in/prudhvisaireddy-sama-185435381/",
      icon: FaLinkedin,
    },
    {
      title: "GitHub",
      description: "View my repositories",
      href: "https://github.com/prudhvi128",
      icon: FaGithub,
    },
    {
      title: "Resume",
      description: "Download Resume",
      href: resume,
      download: "Sama_Prudhvi_Sai_Reddy_Resume.docx",
      icon: FileText,
    },
  ];

  // Availability rows data (the learning row below renders pills)
  const availabilityRows = [
    {
      title: "Available for Internships",
      description:
        "Actively looking for Software Engineering Internship opportunities.",
      icon: CalendarCheck,
      statusDot: true,
    },
    {
      title: "Location",
      description: "India",
      icon: MapPin,
    },
    {
      title: "Response Time",
      description: "Usually responds within 24 hours.",
      icon: Clock,
    },
  ];

  const learning = ["React", "FastAPI", "AI / ML Basics"];

  return (
    // Contact Section
    <section
      id="contact"
      className="scroll-mt-20 w-full max-w-[1500px] mx-auto px-6 sm:px-10 py-24"
    >
      {/* Header */}
      <Reveal variant="up">
        {({ visible }) => (
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div
              className={`flex items-center gap-3 px-4 py-2 rounded-full ${cardStyle(isDark)}`}
            >
              <IconBadge icon={Send} isDark={isDark} className="w-8 h-8" />
              <span className={`font-medium ${badgeText}`}>Contact</span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold">
              Let's Build Something{" "}
              <span className="text-violet-500">Amazing Together</span>
            </h2>

            {/* Underline grows from 0 to full once the section appears */}
            <span className={underlineClasses(visible)} />

            {/* Subtitle */}
            <p className={`mt-4 max-w-[600px] text-lg leading-8 ${subtitleText}`}>
              I'm currently looking for Software Engineering internships and
              exciting opportunities where I can learn, contribute, and grow.
              <br />
              If you'd like to collaborate, discuss a project, or simply connect,
              I'd love to hear from you.
            </p>
          </div>
        )}
      </Reveal>

      {/* Content Grid (60% / 40%) */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Side */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <Reveal key={method.title} variant="up" delay={index * 100} className="h-full">
                <ContactCard
                  icon={method.icon}
                  title={method.title}
                  description={method.description}
                  href={method.href}
                  download={method.download}
                  isDark={isDark}
                />
              </Reveal>
            ))}
          </div>

          {/* Thank You Banner */}
          <Reveal variant="up" delay={150}>
            <div className={`rounded-3xl p-6 sm:p-8 ${cardStyleShadow(isDark)}`}>
              <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                <IconBadge
                  icon={Sparkles}
                  isDark={isDark}
                  className="w-14 h-14 shrink-0"
                />
                <div>
                  <p className="text-lg font-semibold">
                    Thanks for visiting my portfolio!
                  </p>
                  <p className={`mt-1 ${textSecondary}`}>
                    Looking forward to building something meaningful together.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-2">
          {/* Availability Card */}
          <Reveal variant="up" delay={200}>
          <AboutCard
            icon={CalendarCheck}
            title="Availability"
            isDark={isDark}
            className="p-6 sm:p-8"
          >
            {/* Info Rows */}
            <div className={`mt-6 divide-y ${rowDivider}`}>
              {availabilityRows.map((row) => (
                <div
                  key={row.title}
                  className="flex items-start gap-4 py-5 first:pt-0 last:pb-0"
                >
                  <IconBadge
                    icon={row.icon}
                    isDark={isDark}
                    className="w-10 h-10 shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      {row.statusDot && (
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                      )}
                      <h4 className="font-semibold">{row.title}</h4>
                    </div>
                    <p className={`mt-1 text-sm leading-6 ${textSecondary}`}>
                      {row.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Currently Learning Row */}
              <div className="flex items-start gap-4 py-5 last:pb-0">
                <IconBadge
                  icon={Brain}
                  isDark={isDark}
                  className="w-10 h-10 shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="font-semibold">Currently Learning</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {learning.map((item) => (
                      <TechChip key={item} text={item} isDark={isDark} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AboutCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Contact section rendered by the Home page.
export default Contact;
