import { Linkedin, Mail, MapPin, Phone, Github } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        {/* Contact Card */}
        <div className="bg-card p-10 rounded-2xl shadow-sm border border-primary/10">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Contact Information
          </h3>

          <div className="space-y-10 max-w-sm mx-auto">
            {/* Email */}
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 mb-2">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <p className="font-medium">Email</p>
              <a
                href="mailto:kartikshetty9403@gmail.com"
                className="text-muted-foreground hover:text-primary transition"
              >
                kartikshetty9403@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 mb-2">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <p className="font-medium">Phone</p>
              <a
                href="tel:+919967553439"
                className="text-muted-foreground hover:text-primary transition"
              >
                +91 9967553439
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 mb-2">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <p className="font-medium">Location</p>
              <p className="text-muted-foreground">Mumbai, MH, India</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="pt-10 text-center">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex justify-center gap-8 text-primary">
              <a
                href="https://www.linkedin.com/in/kartik-shetty-in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary/80 transition"
              >
                <Linkedin className="h-6 w-6" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kartikshetty9403@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary/80 transition"
              >
                <Mail className="h-6 w-6" />
              </a>

              <a
                href="https://github.com/Kartikshetty9403"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary/80 transition"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
