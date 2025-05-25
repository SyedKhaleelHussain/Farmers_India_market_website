import { useEffect } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  useEffect(() => {
    // Add LinkedIn badge script
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-600 to-green-400 flex items-center justify-center p-6">
      <section className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl max-w-4xl w-full p-10 text-center mt-20">
        <h1 className="text-5xl font-extrabold mb-12 text-green-700 dark:text-green-400">
          Contact Me
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-xl mx-auto">
          I'd love to connect with you! Reach out anytime via email, phone, or
          through my LinkedIn and GitHub profiles.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {/* Email */}
          <a
            href="mailto:khaleelhussainprof@gmail.com"
            className="flex items-center gap-3 bg-green-100 text-green-800 hover:bg-green-200 px-6 py-3 rounded-xl font-semibold transition"
            title="Send me an email"
          >
            <Mail className="w-6 h-6" />
            khaleelhussainprof@gmail.com
          </a>

          {/* Phone */}
          <a
            href="tel:+1234567890"
            className="flex items-center gap-3 bg-green-100 text-green-800 hover:bg-green-200 px-6 py-3 rounded-xl font-semibold transition"
            title="Call me"
          >
            <Phone className="w-6 h-6" />
            +1 (248) 252-9591
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/SyedKhaleelHussain"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-100 text-green-800 hover:bg-green-200 px-6 py-3 rounded-xl font-semibold transition"
            title="My GitHub Profile"
          >
            <Github className="w-6 h-6" />
            GitHub
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/syed-khaleel-hussain"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-100 text-green-800 hover:bg-green-200 px-6 py-3 rounded-xl font-semibold transition"
            title="My LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
            LinkedIn
          </a>
        </div>

        {/* LinkedIn Badge */}
        <div
          className="mx-auto"
          style={{ maxWidth: 320 }}
          aria-label="LinkedIn Profile Badge"
        >
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="dark"
            data-type="VERTICAL"
            data-vanity="syed-khaleel-hussain"
            data-version="v1"
          >
            <a
              className="badge-base__link LI-simple-link"
              href="https://www.linkedin.com/in/syed-khaleel-hussain?trk=profile-badge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Syed Khaleel Hussain
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
