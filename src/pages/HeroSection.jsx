import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import Image1 from "../assets/hero-img.png";
import BgImage from "../assets/herosection.png";
import SEO from "../layout/SEO";

const HERO_TEXT = "Empower Your Business with Expert Freelance Talent";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  // --------------------------------------------------
  // Stable Floating Particles
  // --------------------------------------------------
  const particles = useMemo(() => {
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1.5,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  // --------------------------------------------------
  // Typewriter Effect
  // --------------------------------------------------
  useEffect(() => {
    let timer;

    if (index < HERO_TEXT.length) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev + HERO_TEXT[index]);
        setIndex((prev) => prev + 1);
      }, 75);
    } else {
      timer = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <>
      <SEO
        title="Home - vTechSoftware Freelancing Platform"
        description="Connect with top-rated freelancers for web development, design, marketing and business projects."
        canonical="https://vtechsoftwareerp.com/"
      />

      <section
        className="
          relative
          min-h-screen
          flex
          items-center
          justify-center
          overflow-hidden
          bg-[#08050b]
          text-white
        "
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* =====================================================
            BACKGROUND OVERLAY
        ====================================================== */}

        <div className="absolute inset-0 bg-[#050308]/75" />

        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-950/50 to-orange-950/40" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(245,158,11,0.13),transparent_35%)]" />

        {/* =====================================================
            GOLDEN DIWALI GLOW
        ====================================================== */}

        <motion.div
          className="
            absolute
            -top-32
            left-1/2
            -translate-x-1/2
            w-[650px]
            h-[650px]
            rounded-full
            bg-orange-500/10
            blur-[150px]
          "
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            bottom-[-200px]
            left-[-150px]
            w-[550px]
            h-[550px]
            rounded-full
            bg-yellow-500/10
            blur-[130px]
          "
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            top-[20%]
            right-[-150px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-purple-600/20
            blur-[140px]
          "
          animate={{
            scale: [1, 1.25, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            DIWALI SPARKLES / PARTICLES
        ====================================================== */}

        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="
                absolute
                rounded-full
                bg-yellow-300
                shadow-[0_0_10px_rgba(250,204,21,0.8)]
              "
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [0, -35, 0],
                opacity: [
                  particle.opacity,
                  1,
                  particle.opacity,
                ],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* =====================================================
            DIWALI FLOATING DIYAS
        ====================================================== */}

        <motion.div
          className="
            absolute
            top-28
            left-[7%]
            hidden
            lg:block
          "
          animate={{
            y: [0, -12, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            {/* Flame */}
            <motion.div
              className="
                absolute
                -top-8
                left-1/2
                -translate-x-1/2
                w-5
                h-8
                rounded-[50%]
                bg-gradient-to-t
                from-orange-600
                via-yellow-300
                to-white
                blur-[1px]
                shadow-[0_0_30px_rgba(251,191,36,1)]
              "
              animate={{
                scale: [1, 1.15, 0.9, 1],
                rotate: [-3, 4, -2, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
            />

            {/* Diya */}
            <div
              className="
                w-20
                h-8
                rounded-b-full
                bg-gradient-to-b
                from-yellow-500
                via-orange-500
                to-orange-800
                shadow-[0_10px_35px_rgba(249,115,22,0.55)]
              "
            />

            <div className="absolute top-1 left-2 right-2 h-2 rounded-full bg-yellow-200/50 blur-sm" />
          </div>
        </motion.div>

        <motion.div
          className="
            absolute
            bottom-32
            right-[7%]
            hidden
            lg:block
          "
          animate={{
            y: [0, 12, 0],
            rotate: [2, -2, 2],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            <motion.div
              className="
                absolute
                -top-8
                left-1/2
                -translate-x-1/2
                w-5
                h-8
                rounded-[50%]
                bg-gradient-to-t
                from-orange-600
                via-yellow-300
                to-white
                shadow-[0_0_30px_rgba(251,191,36,1)]
              "
              animate={{
                scale: [1, 0.9, 1.15, 1],
              }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
              }}
            />

            <div
              className="
                w-20
                h-8
                rounded-b-full
                bg-gradient-to-b
                from-yellow-500
                via-orange-500
                to-orange-800
                shadow-[0_10px_35px_rgba(249,115,22,0.55)]
              "
            />
          </div>
        </motion.div>

        {/* =====================================================
            DECORATIVE RINGS
        ====================================================== */}

        <motion.div
          className="
            absolute
            top-[12%]
            right-[12%]
            w-28
            h-28
            rounded-full
            border
            border-yellow-400/20
          "
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 5,
              repeat: Infinity,
            },
          }}
        />

        <motion.div
          className="
            absolute
            bottom-[15%]
            left-[10%]
            w-20
            h-20
            rounded-full
            border
            border-orange-400/20
          "
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: {
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 4,
              repeat: Infinity,
            },
          }}
        />

        {/* =====================================================
            MAIN CONTAINER
        ====================================================== */}

        <div
          className="
            relative
            z-10
            w-full
            max-w-7xl
            mx-auto
            px-5
            sm:px-8
            lg:px-10
            py-28
            lg:py-24
          "
        >
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <motion.div
              className="text-center lg:text-left"
              initial={{
                opacity: 0,
                x: -60,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            >

              {/* Diwali Badge */}

              <motion.div
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-5
                  py-2.5
                  rounded-full
                  border
                  border-yellow-400/30
                  bg-yellow-400/10
                  backdrop-blur-xl
                  shadow-[0_0_30px_rgba(250,204,21,0.08)]
                  mb-7
                "
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.7,
                }}
              >
                <motion.span
                  className="
                    text-xl
                    drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]
                  "
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  🪔
                </motion.span>

                <span className="text-sm sm:text-base font-medium text-yellow-200">
                  Diwali Special • Light Up Your Business
                </span>

                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,1)]" />
              </motion.div>

              {/* Heading */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.8,
                }}
              >
                <h1
                  className="
                    text-4xl
                    sm:text-5xl
                    lg:text-6xl
                    xl:text-[4.3rem]
                    font-black
                    leading-[1.05]
                    tracking-tight
                  "
                >
                  <span className="block text-white">
                    {displayText}
                  </span>

                  <span
                    className="
                      inline-block
                      h-[1em]
                      w-[3px]
                      ml-2
                      align-middle
                      bg-gradient-to-b
                      from-yellow-300
                      to-orange-500
                      shadow-[0_0_12px_rgba(250,204,21,0.8)]
                      animate-pulse
                    "
                  />
                </h1>

                {/* Golden Accent */}

                <div className="mt-5 flex items-center justify-center lg:justify-start gap-3">
                  <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-yellow-400" />

                  <span className="text-yellow-400 text-sm">
                    ✦
                  </span>

                  <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-yellow-400" />
                </div>
              </motion.div>

              {/* Description */}

              <motion.p
                className="
                  mt-7
                  text-base
                  sm:text-lg
                  lg:text-xl
                  text-gray-300
                  leading-relaxed
                  max-w-2xl
                  mx-auto
                  lg:mx-0
                "
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.55,
                  duration: 0.7,
                }}
              >
                Connect with skilled freelancers worldwide and turn
                your ideas into reality. From web development and
                UI/UX design to digital marketing, find the right
                talent to grow your business faster.
              </motion.p>

              {/* CTA Buttons */}

              <motion.div
                className="
                  mt-9
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                  justify-center
                  lg:justify-start
                "
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.7,
                }}
              >

                {/* Primary */}

                <motion.button
                  type="button"
                  className="
                    group
                    relative
                    overflow-hidden
                    px-8
                    py-4
                    rounded-2xl
                    font-bold
                    text-black
                    bg-gradient-to-r
                    from-yellow-300
                    via-amber-400
                    to-orange-500
                    shadow-[0_10px_40px_rgba(245,158,11,0.25)]
                    transition-all
                  "
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    boxShadow:
                      "0 20px 50px rgba(245,158,11,0.4)",
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Find Freelancers
                    <span className="text-lg transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>

                  <span
                    className="
                      absolute
                      inset-0
                      bg-white/30
                      translate-x-[-120%]
                      skew-x-[-20deg]
                      group-hover:translate-x-[120%]
                      transition-transform
                      duration-700
                    "
                  />
                </motion.button>

                {/* Secondary */}

                <motion.button
                  type="button"
                  className="
                    group
                    px-8
                    py-4
                    rounded-2xl
                    font-semibold
                    text-white
                    border
                    border-white/20
                    bg-white/[0.07]
                    backdrop-blur-xl
                    hover:bg-white/[0.12]
                    hover:border-yellow-400/40
                    transition-all
                  "
                  whileHover={{
                    scale: 1.04,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Post a Project
                    <span className="text-yellow-400 transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>
                </motion.button>
              </motion.div>

              {/* Trust */}

              <motion.div
                className="
                  mt-8
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  lg:justify-start
                  gap-x-6
                  gap-y-3
                  text-sm
                  text-gray-400
                "
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.9,
                  duration: 0.7,
                }}
              >
                <span className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  Verified Talent
                </span>

                <span className="flex items-center gap-2">
                  <span className="text-yellow-400">★</span>
                  Top Rated
                </span>

                <span className="flex items-center gap-2">
                  <span className="text-blue-400">⚡</span>
                  Fast Delivery
                </span>
              </motion.div>

              {/* Stats */}

              <motion.div
                className="
                  mt-10
                  grid
                  grid-cols-3
                  max-w-xl
                  mx-auto
                  lg:mx-0
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.045]
                  backdrop-blur-xl
                  overflow-hidden
                "
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1,
                  duration: 0.7,
                }}
              >
                {[
                  {
                    number: "10K+",
                    label: "Freelancers",
                  },
                  {
                    number: "5K+",
                    label: "Projects",
                  },
                  {
                    number: "98%",
                    label: "Satisfaction",
                  },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`
                      py-5
                      px-3
                      text-center
                      ${
                        index !== 2
                          ? "border-r border-white/10"
                          : ""
                      }
                    `}
                  >
                    <div
                      className="
                        text-xl
                        sm:text-2xl
                        font-black
                        bg-gradient-to-r
                        from-yellow-200
                        to-orange-400
                        bg-clip-text
                        text-transparent
                      "
                    >
                      {stat.number}
                    </div>

                    <div className="mt-1 text-xs sm:text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* =================================================
                RIGHT IMAGE
            ================================================== */}

            <motion.div
              className="
                relative
                flex
                items-center
                justify-center
                min-h-[420px]
                lg:min-h-[600px]
              "
              initial={{
                opacity: 0,
                scale: 0.8,
                x: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 1.1,
                type: "spring",
                stiffness: 80,
              }}
            >

              {/* Outer Glow */}

              <motion.div
                className="
                  absolute
                  w-[320px]
                  h-[320px]
                  sm:w-[430px]
                  sm:h-[430px]
                  lg:w-[540px]
                  lg:h-[540px]
                  rounded-full
                  bg-gradient-to-r
                  from-yellow-500/20
                  via-orange-500/10
                  to-purple-600/20
                  blur-[80px]
                "
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Rotating Golden Ring */}

              <motion.div
                className="
                  absolute
                  w-[300px]
                  h-[300px]
                  sm:w-[400px]
                  sm:h-[400px]
                  lg:w-[510px]
                  lg:h-[510px]
                  rounded-full
                  border
                  border-yellow-400/15
                  border-dashed
                "
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Inner Ring */}

              <motion.div
                className="
                  absolute
                  w-[240px]
                  h-[240px]
                  sm:w-[320px]
                  sm:h-[320px]
                  lg:w-[420px]
                  lg:h-[420px]
                  rounded-full
                  border
                  border-orange-400/10
                "
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Image */}

              <motion.img
                src={Image1}
                alt="vTechSoftware freelance business platform"
                className="
                  relative
                  z-10
                  w-full
                  max-w-[280px]
                  sm:max-w-[370px]
                  lg:max-w-[500px]
                  object-contain
                  drop-shadow-[0_25px_60px_rgba(0,0,0,0.65)]
                "
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.04,
                  rotate: 1,
                }}
              />

              {/* =================================================
                  VERIFIED CARD
              ================================================== */}

              <motion.div
                className="
                  absolute
                  z-20
                  left-0
                  bottom-4
                  sm:left-0
                  lg:left-[-15px]
                  px-4
                  py-3
                  rounded-2xl
                  border
                  border-white/15
                  bg-black/45
                  backdrop-blur-xl
                  shadow-2xl
                "
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-10
                      h-10
                      rounded-xl
                      bg-green-500/10
                      border
                      border-green-400/20
                    "
                  >
                    <span className="text-green-400 text-lg">
                      ✓
                    </span>
                  </div>

                  <div>
                    <div className="text-sm font-bold text-white">
                      Top Rated
                    </div>

                    <div className="text-xs text-gray-400">
                      Verified Freelancers
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  UPTIME CARD
              ================================================== */}

              <motion.div
                className="
                  absolute
                  z-20
                  top-5
                  right-0
                  sm:right-0
                  lg:right-[-15px]
                  px-4
                  py-3
                  rounded-2xl
                  border
                  border-white/15
                  bg-black/45
                  backdrop-blur-xl
                  shadow-2xl
                "
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-10
                      h-10
                      rounded-xl
                      bg-yellow-500/10
                      border
                      border-yellow-400/20
                    "
                  >
                    <span className="text-yellow-400 text-lg">
                      ⚡
                    </span>
                  </div>

                  <div>
                    <div className="text-sm font-bold text-white">
                      99.9%
                    </div>

                    <div className="text-xs text-gray-400">
                      Platform Uptime
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  SMALL FLOATING BADGE
              ================================================== */}

              <motion.div
                className="
                  absolute
                  z-20
                  top-[38%]
                  right-[-10px]
                  hidden
                  sm:flex
                  items-center
                  gap-2
                  px-3
                  py-2
                  rounded-full
                  border
                  border-yellow-400/20
                  bg-yellow-400/10
                  backdrop-blur-xl
                "
                animate={{
                  x: [0, 8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-yellow-400">
                  ★
                </span>

                <span className="text-xs font-semibold text-yellow-100">
                  5.0 Rating
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM FADE
        ====================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-40
            bg-gradient-to-t
            from-[#08050b]
            via-[#08050b]/60
            to-transparent
            pointer-events-none
          "
        />

        {/* =====================================================
            BOTTOM DIWALI DECORATION
        ====================================================== */}

        <div
          className="
            absolute
            bottom-3
            left-1/2
            -translate-x-1/2
            flex
            items-center
            gap-3
            opacity-50
          "
        >
          <span className="text-yellow-500/70">✦</span>

          <span className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

          <span className="text-orange-400/80 text-lg">
            🪔
          </span>

          <span className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

          <span className="text-yellow-500/70">✦</span>
        </div>
      </section>
    </>
  );
};

export default HeroSection;