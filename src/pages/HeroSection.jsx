
import React, { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SEO from "../layout/SEO";

const HERO_TEXT = "Empower Your Business with Expert Freelance Talent";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  // =========================================================
  // TYPEWRITER
  // =========================================================
  useEffect(() => {
    let timer;

    if (index < HERO_TEXT.length) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev + HERO_TEXT[index]);
        setIndex((prev) => prev + 1);
      }, 65);
    } else {
      timer = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [index]);

  // =========================================================
  // PARTICLES
  // =========================================================
  const particles = useMemo(() => {
    return Array.from({ length: 45 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 7 + 6,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  // =========================================================
  // MOUSE PARALLAX
  // =========================================================
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  const rotateX = useTransform(smoothY, [-500, 500], [8, -8]);
  const rotateY = useTransform(smoothX, [-500, 500], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <>
      <SEO
        title="Home - vTechSoftware Freelancing Platform"
        description="Connect with top-rated freelancers for web development, design, marketing and business projects."
        canonical="https://vtechsoftwareerp.com/"
      />

      <section
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-[#06040a]
          text-white
          flex
          items-center
        "
      >
        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="absolute inset-0 bg-[#06040a]" />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_20%_30%,rgba(139,92,246,0.18),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(245,158,11,0.15),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(124,58,237,0.12),transparent_35%)]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />

        {/* =====================================================
            LARGE GLOWS
        ====================================================== */}

        <motion.div
          className="
            absolute
            -top-40
            -left-40
            w-[600px]
            h-[600px]
            rounded-full
            bg-purple-600/10
            blur-[150px]
          "
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            -bottom-40
            right-[-100px]
            w-[650px]
            h-[650px]
            rounded-full
            bg-orange-500/10
            blur-[160px]
          "
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =====================================================
            PARTICLES
        ====================================================== */}

        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="
                absolute
                rounded-full
                bg-yellow-300
                shadow-[0_0_12px_rgba(250,204,21,0.8)]
              "
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [0, -30, 0],
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
          "
        >
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">

            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <motion.div
              className="text-center lg:text-left"
              initial={{
                opacity: 0,
                x: -70,
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

              {/* BADGE */}

              <motion.div
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-5
                  py-2.5
                  rounded-full
                  border
                  border-yellow-400/20
                  bg-yellow-400/[0.07]
                  backdrop-blur-xl
                  shadow-[0_0_35px_rgba(250,204,21,0.08)]
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
                  animate={{
                    rotate: [-8, 8, -8],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="text-xl"
                >
                  ✨
                </motion.span>

                <span className="text-sm sm:text-base font-medium text-yellow-200">
                  Build • Connect • Grow
                </span>

                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,1)] animate-pulse" />
              </motion.div>

              {/* HEADING */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
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
                 text-3xl
sm:text-2xl
lg:text-2xl
xl:text-[1.5rem]
                    font-black
                    leading-[1.04]
                    tracking-tight
                  "
                >
                  <span className="text-white">
                    {displayText}
                  </span>

                  <span
                    className="
                      inline-block
                      ml-2
                      w-[3px]
                      h-[0.95em]
                      align-middle
                      bg-gradient-to-b
                      from-yellow-300
                      to-orange-500
                      shadow-[0_0_15px_rgba(250,204,21,0.9)]
                      animate-pulse
                    "
                  />
                </h1>

                <div className="mt-5 flex items-center justify-center lg:justify-start gap-3">
                  <div className="h-[2px] w-14 bg-gradient-to-r from-transparent to-yellow-400" />

                  <span className="text-yellow-400">
                    ✦
                  </span>

                  <div className="h-[2px] w-14 bg-gradient-to-l from-transparent to-yellow-400" />
                </div>
              </motion.div>

              {/* DESCRIPTION */}

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
                Connect with skilled freelancers, discover
                exceptional talent, and transform your ideas
                into powerful digital experiences.
              </motion.p>

              {/* BUTTONS */}

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

                {/* PRIMARY */}

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
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
                    shadow-[0_15px_45px_rgba(245,158,11,0.25)]
                  "
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Find Freelancers

                    <motion.span
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                      }}
                    >
                      →
                    </motion.span>
                  </span>

                  <span
                    className="
                      absolute
                      inset-0
                      bg-white/30
                      -translate-x-[120%]
                      skew-x-[-20deg]
                      group-hover:translate-x-[120%]
                      transition-transform
                      duration-700
                    "
                  />
                </motion.button>

                {/* SECONDARY */}

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.04,
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    px-8
                    py-4
                    rounded-2xl
                    font-semibold
                    text-white
                    border
                    border-white/15
                    bg-white/[0.06]
                    backdrop-blur-xl
                    hover:bg-white/[0.1]
                    hover:border-yellow-400/30
                    transition-all
                  "
                >
                  <span className="flex items-center justify-center gap-2">
                    Post a Project

                    <span className="text-yellow-400">
                      ↗
                    </span>
                  </span>
                </motion.button>

              </motion.div>

              {/* TRUST */}

              <motion.div
                className="
                  mt-8
                  flex
                  flex-wrap
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

              {/* STATS */}

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
                  bg-white/[0.04]
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
                  ["10K+", "Freelancers"],
                  ["5K+", "Projects"],
                  ["98%", "Satisfaction"],
                ].map(([number, label], i) => (
                  <div
                    key={label}
                    className={`
                      py-5
                      px-3
                      text-center
                      ${i !== 2 ? "border-r border-white/10" : ""}
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
                      {number}
                    </div>

                    <div className="mt-1 text-xs sm:text-sm text-gray-400">
                      {label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* =================================================
                RIGHT SIDE - NEW PREMIUM VISUAL
            ================================================= */}

            <motion.div
              className="
                relative
                min-h-[480px]
                lg:min-h-[620px]
                flex
                items-center
                justify-center
                perspective-[1200px]
              "
              initial={{
                opacity: 0,
                x: 70,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.35,
                duration: 1.2,
                type: "spring",
                stiffness: 70,
              }}
            >

              {/* MAIN GLOW */}

              <motion.div
                className="
                  absolute
                  w-[300px]
                  h-[300px]
                  sm:w-[430px]
                  sm:h-[430px]
                  lg:w-[520px]
                  lg:h-[520px]
                  rounded-full
                  bg-gradient-to-r
                  from-purple-600/20
                  via-yellow-500/10
                  to-orange-500/20
                  blur-[90px]
                "
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.45, 0.75, 0.45],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* ORBIT 1 */}

              <motion.div
                className="
                  absolute
                  w-[300px]
                  h-[300px]
                  sm:w-[400px]
                  sm:h-[400px]
                  lg:w-[500px]
                  lg:h-[500px]
                  rounded-full
                  border
                  border-yellow-400/15
                  border-dashed
                "
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span
                  className="
                    absolute
                    -top-2
                    left-1/2
                    w-4
                    h-4
                    rounded-full
                    bg-yellow-300
                    shadow-[0_0_25px_rgba(250,204,21,1)]
                  "
                />
              </motion.div>

              {/* ORBIT 2 */}

              <motion.div
                className="
                  absolute
                  w-[230px]
                  h-[230px]
                  sm:w-[320px]
                  sm:h-[320px]
                  lg:w-[410px]
                  lg:h-[410px]
                  rounded-full
                  border
                  border-purple-400/20
                "
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span
                  className="
                    absolute
                    bottom-5
                    right-5
                    w-3
                    h-3
                    rounded-full
                    bg-purple-300
                    shadow-[0_0_20px_rgba(192,132,252,1)]
                  "
                />
              </motion.div>

              {/* =================================================
                  CENTRAL DASHBOARD
              ================================================= */}

              <motion.div
                style={{
                  rotateX,
                  rotateY,
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="
                  relative
                  z-10
                  w-[290px]
                  sm:w-[370px]
                  lg:w-[470px]
                  rounded-[28px]
                  border
                  border-white/15
                  bg-[#100b18]/90
                  backdrop-blur-2xl
                  shadow-[0_35px_100px_rgba(0,0,0,0.65)]
                  p-5
                  sm:p-6
                "
              >

                {/* TOP BAR */}

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        w-10
                        h-10
                        rounded-xl
                        bg-gradient-to-br
                        from-yellow-300
                        to-orange-500
                        flex
                        items-center
                        justify-center
                        text-black
                        font-black
                        shadow-[0_0_25px_rgba(245,158,11,0.3)]
                      "
                    >
                      V
                    </div>

                    <div>
                      <div className="text-sm font-bold text-white">
                        vTech Workspace
                      </div>

                      <div className="text-[11px] text-gray-500">
                        Freelance Platform
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                </div>

                {/* DASHBOARD HEADER */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-gradient-to-br
                    from-white/[0.08]
                    to-white/[0.02]
                    p-5
                  "
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xs text-gray-500">
                        Project Growth
                      </div>

                      <div className="mt-1 text-3xl font-black text-white">
                        +84.6%
                      </div>
                    </div>

                    <div
                      className="
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        text-green-300
                        bg-green-400/10
                        border
                        border-green-400/20
                      "
                    >
                      ↑ 24.8%
                    </div>
                  </div>

                  {/* GRAPH */}

                  <div className="mt-6 flex items-end gap-2 h-24">
                    {[35, 48, 42, 62, 54, 76, 67, 88, 72, 96].map(
                      (height, i) => (
                        <motion.div
                          key={i}
                          className="
                            flex-1
                            rounded-t-lg
                            bg-gradient-to-t
                            from-purple-600
                            via-yellow-500
                            to-yellow-300
                          "
                          initial={{
                            height: 0,
                          }}
                          animate={{
                            height: `${height}%`,
                          }}
                          transition={{
                            delay: 1 + i * 0.08,
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* CARDS */}

                <div className="grid grid-cols-2 gap-3 mt-4">

                  <motion.div
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-4
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Active Projects
                      </span>

                      <span className="text-purple-400">
                        ◈
                      </span>
                    </div>

                    <div className="mt-2 text-2xl font-black">
                      128
                    </div>

                    <div className="mt-1 text-[11px] text-green-400">
                      +18 this week
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-4
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Talent Online
                      </span>

                      <span className="text-green-400">
                        ●
                      </span>
                    </div>

                    <div className="mt-2 text-2xl font-black">
                      2.4K
                    </div>

                    <div className="mt-1 text-[11px] text-gray-500">
                      Available now
                    </div>
                  </motion.div>

                </div>

                {/* FREELANCERS */}

                <div className="mt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-gray-400">
                      Top Freelancers
                    </span>

                    <span className="text-[11px] text-yellow-400">
                      View all →
                    </span>
                  </div>

                  <div className="flex -space-x-2">
                    {[
                      "👨🏻‍💻",
                      "👩🏻‍🎨",
                      "👨🏽‍🚀",
                      "👩🏽‍💻",
                      "👨🏻‍🎨",
                    ].map((avatar, i) => (
                      <motion.div
                        key={i}
                        className="
                          w-10
                          h-10
                          rounded-full
                          border-2
                          border-[#100b18]
                          bg-gradient-to-br
                          from-purple-500/40
                          to-yellow-500/30
                          flex
                          items-center
                          justify-center
                          text-lg
                        "
                        initial={{
                          opacity: 0,
                          scale: 0,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: 1.2 + i * 0.1,
                          type: "spring",
                        }}
                      >
                        {avatar}
                      </motion.div>
                    ))}

                    <div
                      className="
                        w-10
                        h-10
                        rounded-full
                        border-2
                        border-[#100b18]
                        bg-white/10
                        flex
                        items-center
                        justify-center
                        text-xs
                        font-bold
                      "
                    >
                      +99
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  FLOATING CARD - VERIFIED
              ================================================= */}

              <motion.div
                className="
                  absolute
                  z-20
                  left-0
                  sm:left-[-15px]
                  lg:left-[-25px]
                  bottom-12
                  px-4
                  py-3
                  rounded-2xl
                  border
                  border-white/15
                  bg-black/55
                  backdrop-blur-xl
                  shadow-2xl
                "
                animate={{
                  y: [0, -12, 0],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-green-400/10
                      border
                      border-green-400/20
                      flex
                      items-center
                      justify-center
                      text-green-400
                    "
                  >
                    ✓
                  </div>

                  <div>
                    <div className="text-sm font-bold">
                      Verified Talent
                    </div>

                    <div className="text-xs text-gray-500">
                      Expert developers
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  FLOATING CARD - PAYMENT
              ================================================= */}

              <motion.div
                className="
                  absolute
                  z-20
                  top-8
                  right-0
                  sm:right-[-10px]
                  lg:right-[-20px]
                  px-4
                  py-3
                  rounded-2xl
                  border
                  border-white/15
                  bg-black/55
                  backdrop-blur-xl
                  shadow-2xl
                "
                animate={{
                  y: [0, 12, 0],
                  rotate: [1, -1, 1],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-yellow-400/10
                      border
                      border-yellow-400/20
                      flex
                      items-center
                      justify-center
                      text-yellow-400
                    "
                  >
                    $
                  </div>

                  <div>
                    <div className="text-sm font-bold">
                      Secure Payment
                    </div>

                    <div className="text-xs text-gray-500">
                      Protected transactions
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  FLOATING RATING
              ================================================= */}

              <motion.div
                className="
                  absolute
                  z-20
                  top-[43%]
                  right-[-10px]
                  hidden
                  sm:flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  border
                  border-yellow-400/20
                  bg-yellow-400/[0.08]
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

              {/* =================================================
                  MINI FLOATING ICONS
              ================================================= */}

              <motion.div
                className="
                  absolute
                  top-[22%]
                  left-[5%]
                  w-12
                  h-12
                  rounded-2xl
                  bg-purple-500/10
                  border
                  border-purple-400/20
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  text-purple-300
                  text-xl
                "
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                &lt;/&gt;
              </motion.div>

              <motion.div
                className="
                  absolute
                  bottom-[20%]
                  right-[8%]
                  w-12
                  h-12
                  rounded-2xl
                  bg-orange-500/10
                  border
                  border-orange-400/20
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  text-orange-300
                  text-xl
                "
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                }}
              >
                ⚡
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
            h-32
            bg-gradient-to-t
            from-[#06040a]
            to-transparent
            pointer-events-none
          "
        />

        {/* =====================================================
            SCROLL INDICATOR
        ====================================================== */}

        <motion.div
          className="
            absolute
            bottom-7
            left-1/2
            -translate-x-1/2
            hidden
            md:flex
            flex-col
            items-center
            gap-2
            text-gray-500
          "
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Explore
          </span>

          <span className="text-yellow-400">
            ↓
          </span>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;

