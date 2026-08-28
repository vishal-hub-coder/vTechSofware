
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";

import {
  FaWhatsapp,
  FaComments,
  FaEnvelope,
  FaPhone,
  FaSkype,
  FaDesktop,
  FaMapMarkerAlt,
  FaClock,
  FaHeadset,
  FaCheckCircle,
  FaArrowRight,
  FaLifeRing,
  FaTicketAlt,
  FaVideo,
  FaHandshake,
  FaChevronDown,
  FaBolt,
  FaShieldAlt,
  FaStar,
  FaUsers,
} from "react-icons/fa";

import SEO from "../layout/SEO";
import supportImage from "../assets/supportImage.jpg";

const supportOptions = [
  {
    id: "whatsapp",
    title: "WhatsApp Support",
    subtitle: "Quick responses from our team",
    icon: <FaWhatsapp />,
    gradient: "from-emerald-400 via-green-500 to-green-600",
    soft: "bg-emerald-50",
    text: "text-emerald-600",
    border: "hover:border-emerald-300",
  },
  {
    id: "chat",
    title: "Chat with Experts",
    subtitle: "Connect with our support team",
    icon: <FaComments />,
    gradient: "from-blue-400 via-blue-500 to-indigo-600",
    soft: "bg-blue-50",
    text: "text-blue-600",
    border: "hover:border-blue-300",
  },
  {
    id: "email",
    title: "Email Support",
    subtitle: "Get detailed assistance",
    icon: <FaEnvelope />,
    gradient: "from-violet-400 via-purple-500 to-purple-700",
    soft: "bg-purple-50",
    text: "text-purple-600",
    border: "hover:border-purple-300",
  },
  {
    id: "call",
    title: "Calling Support",
    subtitle: "Talk directly with our experts",
    icon: <FaPhone />,
    gradient: "from-orange-400 via-orange-500 to-red-500",
    soft: "bg-orange-50",
    text: "text-orange-600",
    border: "hover:border-orange-300",
  },
  {
    id: "skype",
    title: "Skype Support",
    subtitle: "Video call with our team",
    icon: <FaSkype />,
    gradient: "from-sky-400 via-cyan-500 to-blue-600",
    soft: "bg-sky-50",
    text: "text-sky-600",
    border: "hover:border-sky-300",
  },
  {
    id: "remote",
    title: "Remote Desk Support",
    subtitle: "Get hands-on technical help",
    icon: <FaDesktop />,
    gradient: "from-indigo-400 via-indigo-500 to-violet-600",
    soft: "bg-indigo-50",
    text: "text-indigo-600",
    border: "hover:border-indigo-300",
  },
  {
    id: "visit",
    title: "Visit Our Office",
    subtitle: "Meet our team in person",
    icon: <FaMapMarkerAlt />,
    gradient: "from-pink-400 via-rose-500 to-red-500",
    soft: "bg-pink-50",
    text: "text-pink-600",
    border: "hover:border-pink-300",
  },
  {
    id: "ticket",
    title: "Raise a Ticket",
    subtitle: "Track and resolve your issue",
    icon: <FaTicketAlt />,
    gradient: "from-teal-400 via-cyan-500 to-teal-600",
    soft: "bg-teal-50",
    text: "text-teal-600",
    border: "hover:border-teal-300",
  },
];

const faqs = [
  {
    q: "What are your support hours?",
    a: "Our standard support hours are Monday to Saturday, 9:00 AM to 7:00 PM. Critical issues can receive priority assistance outside standard hours.",
  },
  {
    q: "How quickly will I receive a response?",
    a: "For WhatsApp and calling support, our team generally responds quickly. Email requests may take up to 24 hours depending on the complexity of the issue.",
  },
  {
    q: "How can I track my support ticket?",
    a: "You can track your support request using the ticket ID provided after submitting your issue. Our support team can also provide the latest status.",
  },
  {
    q: "Do you provide remote desktop support?",
    a: "Yes. Our technical team can assist remotely using secure remote-support tools such as AnyDesk or TeamViewer when required.",
  },
  {
    q: "Can I request a product demonstration?",
    a: "Absolutely. You can contact our team to schedule a personalized demonstration of our ERP, CRM, HRMS, inventory, accounting and other business solutions.",
  },
];

const SupportPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "vTech ERP - Support",
    operatingSystem: "Web",
    applicationCategory: "BusinessApplication",
    url: "https://vtechsoftwareerp/support",
    description:
      "vTech ERP Support — Contact us for CRM, HRMS, Payroll, Accounting, Inventory and Sales Management software assistance.",
    image: "https://vtechsoftwareerp/assets/support-og-image.png",
  };

  const handleSupportClick = (option) => {
    Swal.fire({
      title: option.title,
      text: `Do you want to continue with ${option.title}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Continue",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#64748b",
      background: "#ffffff",
      color: "#1e293b",
      customClass: {
        popup: "rounded-3xl",
        confirmButton: "rounded-xl px-6 py-3",
        cancelButton: "rounded-xl px-6 py-3",
      },
    }).then((result) => {
      if (!result.isConfirmed) return;

      switch (option.id) {
        case "whatsapp":
          window.open("https://wa.me/9326870893", "_blank");
          break;

        case "chat":
          Swal.fire({
            icon: "info",
            title: "Chat Support",
            text: "Our live chat expert will connect with you shortly.",
            confirmButtonColor: "#2563eb",
          });
          break;

        case "email":
          window.location.href =
            "mailto:vtechsoftwarevishal@gmail.com?subject=Support Request&body=Hello Team,%0A%0AI need assistance regarding:";
          break;

        case "call":
          window.location.href = "tel:+919326870893";
          break;

        case "skype":
          window.open("skype:live:.cid.sample1234?call", "_self");
          break;

        case "remote":
          Swal.fire({
            icon: "success",
            title: "Remote Support",
            text: "Our technician will guide you through the remote-support process.",
            confirmButtonColor: "#4f46e5",
          });
          break;

        case "visit":
          Swal.fire({
            icon: "info",
            title: "Visit Our Office",
            html: `
              <div style="line-height:1.8">
                <strong>vTech Software Solutions</strong><br/>
                New Delhi, India
              </div>
            `,
            confirmButtonColor: "#ec4899",
          });
          break;

        case "ticket":
          Swal.fire({
            icon: "info",
            title: "Raise a Support Ticket",
            text: "Our ticketing system will help you track your issue from start to resolution.",
            confirmButtonColor: "#0d9488",
          });
          break;

        default:
          break;
      }
    });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50">
      <SEO
        title="Support - vTech Software Solutions"
        description="Need help? Contact vTech Software Solutions through WhatsApp, Email, Chat, Phone, Skype, Remote Desk or Office Support."
        keywords="vTech support, ERP support, CRM support, HRMS support, software support"
        jsonLD={jsonLD}
      />

      {/* =========================================================
          HERO SECTION
      ========================================================== */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={supportImage}
            alt="vTech Support"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/95 to-indigo-950/95" />
        </div>

        {/* Gradient Glow */}
        <motion.div
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 shadow-lg shadow-cyan-500/10 backdrop-blur-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                Premium Customer Support
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              We're Here to{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                Help You
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl"
            >
              Get fast, reliable and expert assistance whenever you need it.
              Connect with our team through multiple support channels designed
              around your business.
            </motion.p>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {[
                {
                  icon: <FaBolt />,
                  number: "< 1hr",
                  label: "Fast Response",
                },
                {
                  icon: <FaUsers />,
                  number: "24/7",
                  label: "Critical Support",
                },
                {
                  icon: <FaStar />,
                  number: "99%",
                  label: "Customer Satisfaction",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl"
                >
                  <div className="mb-1 flex items-center justify-center gap-2 text-cyan-300">
                    {item.icon}
                    <span className="text-2xl font-black text-white">
                      {item.number}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-slate-50 [clip-path:ellipse(65%_100%_at_50%_100%)]" />
      </section>

      {/* =========================================================
          TRUST STRIP
      ========================================================== */}
      <section className="relative z-20 -mt-2 px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/60 sm:grid-cols-3"
          >
            {[
              {
                icon: <FaShieldAlt />,
                title: "Reliable Support",
                text: "Professional assistance",
              },
              {
                icon: <FaHeadset />,
                title: "Expert Team",
                text: "Skilled support engineers",
              },
              {
                icon: <FaHandshake />,
                title: "Customer First",
                text: "Your success matters",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-6 ${
                  index !== 2 ? "border-b sm:border-b-0 sm:border-r" : ""
                } border-slate-100`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-lg text-white shadow-lg shadow-blue-500/20">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-bold text-slate-800">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SUPPORT OPTIONS
      ========================================================== */}
      <section className="relative py-24">
        {/* Decorative background */}
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 rounded-full bg-purple-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700">
              <FaLifeRing />
              Support Center
            </span>

            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Choose How You Want{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Help
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
              Whether you need technical assistance, product guidance or
              account support, our team is ready to help.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {supportOptions.map((option, index) => (
              <motion.button
                key={option.id}
                type="button"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSupportClick(option)}
                className={`group relative overflow-hidden rounded-3xl border-2 border-slate-100 bg-white p-6 text-left shadow-lg shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl ${option.border}`}
              >
                {/* Hover glow */}
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${option.gradient} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${option.gradient} text-xl text-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      {option.icon}
                    </div>

                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full ${option.soft} ${option.text} transition-all group-hover:translate-x-1`}
                    >
                      <FaArrowRight className="text-sm" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-lg font-extrabold text-slate-800">
                    {option.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {option.subtitle}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs font-bold text-slate-400">
                    <span>CONTACT NOW</span>
                    <span className="h-px flex-1 bg-slate-100" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PREMIUM SUPPORT CTA
      ========================================================== */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-950 shadow-2xl">
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/40 via-indigo-700/30 to-purple-700/40" />

          {/* Glow */}
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:p-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-xl">
                <FaHeadset />
                Need Immediate Assistance?
              </div>

              <h2 className="max-w-3xl text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                Your Problem.
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Our Priority.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                Don't let technical problems slow your business down. Connect
                with our support team and get the assistance you need.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Expert Assistance",
                  "Fast Response",
                  "Secure Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    <FaCheckCircle className="text-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <button
                onClick={() =>
                  (window.location.href =
                    "mailto:vtechsoftwarevishal@gmail.com?subject=Support Request")
                }
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-blue-700 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <FaEnvelope />
                Contact Support
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() =>
                  (window.location.href = "tel:+919326870893")
                }
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-xl transition-all hover:bg-white/20"
              >
                <FaPhone />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIRECT CONTACT
      ========================================================== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Direct Contact
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Talk to Our Team
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Prefer direct communication? Reach us through the channels below.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: <FaEnvelope />,
                title: "Email",
                value: "vtechsoftwarevishal@gmail.com",
                gradient: "from-blue-500 to-indigo-600",
              },
              {
                icon: <FaPhone />,
                title: "Phone",
                value: "+91 9326870893",
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                icon: <FaClock />,
                title: "Working Hours",
                value: "Mon - Sat · 9 AM - 7 PM",
                gradient: "from-purple-500 to-pink-600",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition-all hover:bg-white hover:shadow-xl"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-xl text-white shadow-lg`}
                >
                  {item.icon}
                </div>

                <p className="mt-5 text-sm font-semibold text-slate-400">
                  {item.title}
                </p>

                <p className="mt-2 break-words font-bold text-slate-800">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-700">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
              Everything You Need to Know
            </h2>

            <p className="mt-4 text-slate-500">
              Find quick answers to common support questions.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 ${
                    isOpen
                      ? "border-blue-200 shadow-xl shadow-blue-100/40"
                      : "border-slate-100 hover:border-slate-200 hover:shadow-md"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                          isOpen
                            ? "bg-blue-600 text-white"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {index + 1}
                      </span>

                      <span className="font-bold text-slate-800">
                        {faq.q}
                      </span>
                    </div>

                    <FaChevronDown
                      className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="border-t border-slate-100 px-6 pb-6 pt-5 pl-[4.75rem] text-sm leading-7 text-slate-500">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 py-20">
        <motion.div
          className="absolute left-10 top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl text-white backdrop-blur-xl">
              <FaHeadset />
            </div>

            <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">
              Still Need Help?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Our support team is ready to help you solve your problem and
              keep your business running smoothly.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={() =>
                  (window.location.href =
                    "mailto:vtechsoftwarevishal@gmail.com?subject=Support Request")
                }
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <FaEnvelope />
                Get in Touch
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() =>
                  window.open("https://wa.me/9326870893", "_blank")
                }
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-xl transition-all hover:bg-white/20"
              >
                <FaWhatsapp />
                WhatsApp Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;

