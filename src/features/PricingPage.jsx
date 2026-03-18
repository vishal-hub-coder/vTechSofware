import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaCheck, 
  FaTimes, 
  FaArrowRight, 
  FaCrown, 
  FaRocket, 
  FaStar,
  FaShieldAlt,
  FaUndo,
  FaHeadset,
  FaChartLine,
  FaBox,
  FaUsers,
  FaShoppingCart,
  FaProjectDiagram,
  FaDatabase,
  FaEnvelope,
  FaGlobe,
  FaMobileAlt
} from "react-icons/fa";

const plans = [
  {
    name: "Basic Plan",
    price: "499",
    period: "month",
    description: "Perfect for small businesses getting started",
    icon: <FaBox />,
    color: "from-blue-500 to-cyan-400",
    popular: false,
    features: [
      { name: "LMS Dashboard", included: true },
      { name: "Orders Dashboard", included: true },
      { name: "Service Dashboard", included: true },
      { name: "Inventory Dashboard", included: true },
      { name: "Project Dashboard", included: true },
      { name: "Production Dashboard", included: true },
      { name: "Account's Dashboard", included: true },
      { name: "Profile Setup", included: true },
      { name: "Password Creation", included: true },
      { name: "Salary Reports", included: true },
      { name: "Leave Apply", included: true },
      { name: "Company Setup", included: true },
      { name: "Create Employee", included: true },
      { name: "Create Product", included: true },
      { name: "Lead Setup", included: true },
      { name: "Create Customer", included: true },
      { name: "Quotation", included: true },
      { name: "Generate Order", included: true },
      { name: "Generate Purchase", included: true },
      { name: "GST Report", included: true },
      { name: "Website API", included: true },
      { name: "IndiaMart API", included: true },
      { name: "TradeIndia API", included: true },
      { name: "WhatsApp API", included: true },
      { name: "Email API", included: true },
      { name: "All Module Training", included: true },
      { name: "HR Module", included: false },
      { name: "Custom Reports", included: false },
      { name: "Priority Support", included: false },
    ],
  },
  {
    name: "Standard Plan",
    price: "699",
    period: "month",
    description: "Ideal for growing businesses",
    icon: <FaChartLine />,
    color: "from-purple-500 to-pink-400",
    popular: true,
    features: [
      { name: "LMS Dashboard", included: true },
      { name: "Orders Dashboard", included: true },
      { name: "Service Dashboard", included: true },
      { name: "Inventory Dashboard", included: true },
      { name: "Project Dashboard", included: true },
      { name: "Production Dashboard", included: true },
      { name: "Account's Dashboard", included: true },
      { name: "Profile Setup", included: true },
      { name: "Password Creation", included: true },
      { name: "Salary Reports", included: true },
      { name: "Leave Apply", included: true },
      { name: "Company Setup", included: true },
      { name: "Create Employee", included: true },
      { name: "Create Product", included: true },
      { name: "Lead Setup", included: true },
      { name: "Create Customer", included: true },
      { name: "Quotation", included: true },
      { name: "Generate Order", included: true },
      { name: "Generate Purchase", included: true },
      { name: "GST Report", included: true },
      { name: "Website API", included: true },
      { name: "IndiaMart API", included: true },
      { name: "TradeIndia API", included: true },
      { name: "WhatsApp API", included: true },
      { name: "Email API", included: true },
      { name: "SMS API", included: true },
      { name: "All Module Training", included: true },
      { name: "HR Module", included: true },
      { name: "Custom Reports", included: false },
      { name: "Priority Support", included: false },
    ],
  },
  {
    name: "Business Plan",
    price: "999",
    period: "month",
    description: "For businesses ready to scale",
    icon: <FaRocket />,
    color: "from-orange-500 to-red-400",
    popular: false,
    features: [
      { name: "LMS Dashboard", included: true },
      { name: "Orders Dashboard", included: true },
      { name: "Service Dashboard", included: true },
      { name: "Inventory Dashboard", included: true },
      { name: "Project Dashboard", included: true },
      { name: "Production Dashboard", included: true },
      { name: "Account's Dashboard", included: true },
      { name: "Profile Setup", included: true },
      { name: "Password Creation", included: true },
      { name: "Salary Reports", included: true },
      { name: "Leave Apply", included: true },
      { name: "Company Setup", included: true },
      { name: "Create Employee", included: true },
      { name: "Create Product", included: true },
      { name: "Lead Setup", included: true },
      { name: "Create Customer", included: true },
      { name: "Quotation", included: true },
      { name: "Generate Order", included: true },
      { name: "Generate Purchase", included: true },
      { name: "GST Report", included: true },
      { name: "Website API", included: true },
      { name: "IndiaMart API", included: true },
      { name: "TradeIndia API", included: true },
      { name: "WhatsApp API", included: true },
      { name: "Email API", included: true },
      { name: "SMS API", included: true },
      { name: "All Module Training", included: true },
      { name: "HR Module", included: true },
      { name: "Custom Reports", included: true },
      { name: "Priority Support", included: false },
    ],
  },
  {
    name: "Premium Plan",
    price: "1299",
    period: "month",
    description: "The ultimate solution for enterprises",
    icon: <FaCrown />,
    color: "from-yellow-500 to-amber-400",
    popular: false,
    features: [
      { name: "LMS Dashboard", included: true },
      { name: "Orders Dashboard", included: true },
      { name: "Service Dashboard", included: true },
      { name: "Inventory Dashboard", included: true },
      { name: "Project Dashboard", included: true },
      { name: "Production Dashboard", included: true },
      { name: "Account's Dashboard", included: true },
      { name: "Profile Setup", included: true },
      { name: "Password Creation", included: true },
      { name: "Salary Reports", included: true },
      { name: "Leave Apply", included: true },
      { name: "Company Setup", included: true },
      { name: "Create Employee", included: true },
      { name: "Create Product", included: true },
      { name: "Lead Setup", included: true },
      { name: "Create Customer", included: true },
      { name: "Quotation", included: true },
      { name: "Generate Order", included: true },
      { name: "Generate Purchase", included: true },
      { name: "GST Report", included: true },
      { name: "Website API", included: true },
      { name: "IndiaMart API", included: true },
      { name: "TradeIndia API", included: true },
      { name: "WhatsApp API", included: true },
      { name: "Email API", included: true },
      { name: "SMS API", included: true },
      { name: "All Module Training", included: true },
      { name: "HR Module", included: true },
      { name: "Custom Reports", included: true },
      { name: "Priority Support", included: true },
    ],
  },
];

const benefits = [
  { icon: <FaShieldAlt />, text: "Secure & Reliable" },
  { icon: <FaUndo />, text: "30-Day Money Back" },
  { icon: <FaHeadset />, text: "24/7 Support" },
  { icon: <FaGlobe />, text: "Cloud Based" },
];

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-cyan-200 text-sm font-medium mb-6 border border-white/20">
              Simple, Transparent Pricing
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-yellow-300">
              Perfect Plan
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Flexible pricing that grows with your business. All plans include a free trial.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div 
            className="flex items-center justify-center gap-4 mt-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-indigo-300'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="relative w-16 h-8 bg-white/20 rounded-full p-1 transition-colors"
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: billingCycle === "monthly" ? 0 : 32 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-white' : 'text-indigo-300'}`}>
              Annual <span className="text-green-400 text-xs">(Save 20%)</span>
            </span>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mt-10"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-cyan-300">{benefit.icon}</span>
                <span className="text-white text-sm">{benefit.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} billingCycle={billingCycle} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Can I change plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                q: "Is there a free trial?",
                a: "Yes! All plans come with a 14-day free trial. No credit card required."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, debit cards, UPI, and bank transfers."
              },
              {
                q: "Do you offer refunds?",
                a: "We offer a 30-day money-back guarantee if you're not satisfied with our service."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h4 className="font-bold text-gray-800 mb-2">{faq.q}</h4>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const PricingCard = ({ plan, index, billingCycle }) => {
  const [expanded, setExpanded] = useState(false);

  const displayPrice = billingCycle === "annual" 
    ? Math.round(plan.price * 12 * 0.8) 
    : plan.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 ${
        plan.popular ? "ring-2 ring-purple-500 scale-105 z-10" : ""
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
            <FaStar /> Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className={`p-6 rounded-t-3xl bg-gradient-to-r ${plan.color} text-white`}>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl">
            {plan.icon}
          </div>
          {plan.popular && (
            <FaCrown className="text-yellow-300 text-xl" />
          )}
        </div>
        <h3 className="text-xl font-bold">{plan.name}</h3>
        <p className="text-white/80 text-sm">{plan.description}</p>
      </div>

      {/* Price */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-gray-800">₹</span>
          <span className="text-5xl font-extrabold text-gray-800">{displayPrice}</span>
          <span className="text-gray-500">/{plan.period}</span>
        </div>
        {billingCycle === "annual" && (
          <p className="text-sm text-green-600 font-medium mt-1">
            Save ₹{plan.price * 12 * 0.2}/year
          </p>
        )}
      </div>

      {/* Features */}
      <div className="p-6">
        <AnimatePresence>
          <motion.div 
            className={`space-y-3 ${expanded ? 'max-h-[500px]' : 'max-h-64'} overflow-hidden`}
            initial={false}
            animate={{ maxHeight: expanded ? 500 : 256 }}
            transition={{ duration: 0.3 }}
          >
            {plan.features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.02 }}
                className="flex items-center gap-3"
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                  feature.included ? "bg-green-100" : "bg-red-100"
                }`}>
                  {feature.included ? (
                    <FaCheck className="text-green-600 text-xs" />
                  ) : (
                    <FaTimes className="text-red-400 text-xs" />
                  )}
                </div>
                <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                  {feature.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full mt-4 py-2 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors flex items-center justify-center gap-1"
        >
          {expanded ? "Show Less" : "Show All Features"}
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ▼
          </motion.span>
        </button>
      </div>

      {/* CTA */}
      <div className="p-6 pt-0">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            to="/payment"
            state={{ plan: plan.name, amount: displayPrice }}
            className={`w-full inline-flex py-4 rounded-xl font-bold text-lg transition-all duration-300 items-center justify-center gap-2 ${
              plan.popular
                ? `bg-gradient-to-r ${plan.color} text-white shadow-lg hover:shadow-xl`
                : "bg-gray-800 text-white hover:bg-gray-900"
            }`}
          >
            Get Started
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PricingPage;
