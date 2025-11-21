import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic Plan",
    price: "499 INR",
    description: "/User/month Billing Annually",
    features: [
      "LMS Dashboard",
      "Orders Dashboard",
      "Service Dashboard",
      "Inventory Dashboard",
      "Project Dashboard",
      "Production Dashboard",
      "Account's Dashboard",
      "Profile Setup",
      "Password Creation",
      "Salary Reports",
      "Leave apply",
      "Hiring Creation",
      "Salary Create",
      "Leave Section",
      "Company Setup",
      "Create Employee",
      "Create Product",
      "Lead Setup",
      "Window Setup",
      "Generate Complain",
      "Complain Assign",
      "Complain Report",
      "Create Customer",
      "Quotation",
      "Generate Order",
      "Generate Purchase",
      "Generate Performa",
      "Generate Text Invoice",
      "Generate Contract",
      "Generate Requisition",
      "Create Project",
      "Start Production",
      "Customer Payment",
      "Supplier Payment",
      "Bank Account Section",
      "Profit and Loss",
      "Balance Sheet",
      "All Ledger Report",
      "Inventory Summary",
      "GST Report",
      "LMS Summary",
      "Order Summary",
      "Purchase Summary",
      "Payment Summary",
      "WhatsApp Summary",
      "Email Summary",
      "SMS Summary",
      "Website API",
      "IndiaMart API",
      "TradeIndia API",
      "Just Dial API",
      "Facebook API",
      "Exporter India API",
      "WhatsApp API",
      "Email API",
      "SMS API",
      "All Module Training",
    ],
  },
  {
    name: "Standard Plan",
    price: "699 INR",
    description: "/User/month Billing Annually",
    features: [
      "LMS Dashboard",
      "Orders Dashboard",
      "Service Dashboard",
      "Inventory Dashboard",
      "Project Dashboard",
      "Production Dashboard",
      "Account's Dashboard",
      "Profile Setup",
      "Password Creation",
      "Salary Reports",
      "Leave Apply",
      "Hiring Creation",
      "Salary Create",
      "Leave Section",
      "Company Setup",
      "Create Employee",
      "Create Products",
      "Lead Setup",
      "Window Setup",
      "Generate Complain",
      "Complain Assign",
      "Complain Report",
      "Create Customers",
      "Quotations",
      "Generate Order",
      "Generate Purchase",
      "Generate Performa",
      "Generate Text Invoice",
      "Generate Contract",
      "Generate Requisition",
      "Create Project",
      "Start Production",
      "Customers Payment",
      "Supplier Payment",
      "Bank Account Section",
      "Profit and Loss",
      "Balance Sheet",
      "All Ledger Report",
      "Inventory Summary",
      "GST Report",
      "LMS Summary",
      "Order Summary",
      "Purchase Summary",
      "Payment Summary",
      "WhatsApp Summary",
      "Email Summary",
      "SMS Summary",
      "Website API",
      "Email API",
      "All Module Summary",
    ],
  },
  {
    name: "Business Plan",
    price: "999 INR",
    description: "/User/month Billing Annually",
    features: [
      "LMS Dashboard",
      "Orders Dashboard",
      "Service Dashboard",
      "Inventory Dashboard",
      "Project Dashboard",
      "Production Dashboard",
      "Account's Dashboard",
      "Profile Setup",
      "Password Creation",
      "Salary Reports",
      "Leave Apply",
      "Hiring Creation",
      "Salary Create",
      "Leave Section",
      "Company Setup",
      "Create Employee",
      "Create Products",
      "Lead Setup",
      "Window Setup",
      "Generate Complain",
      "Complain Assign",
      "Complain Report",
      "Create Customers",
      "Quotations",
      "Generate Order",
      "Generate Purchase",
      "Generate Performa",
      "Generate Text Invoice",
      "Generate Contract",
      "Generate Requisition",
      "Create Project",
      "Start Production",
      "Customers Payment",
      "Supplier Payment",
      "Bank Account Section",
      "Profit and Loss",
      "Balance Sheet",
      "All Ledger Report",
      "Inventory Summary",
      "GST Report",
      "LMS Summary",
      "Order Summary",
      "Purchase Summary",
      "Payment Summary",
      "WhatsApp Summary",
      "Email Summary",
      "SMS Summary",
      "Website API",
      "Email API",
      "All Module Summary",
    ],
  },
  {
    name: "Premium Plan",
    price: "1299 INR",
    description: "/User/month Billing Annually",
    features: [
      "LMS Dashboard",
      "Orders Dashboard",
      "Service Dashboard",
      "Inventory Dashboard",
      "Project Dashboard",
      "Production Dashboard",
      "Account's Dashboard",
      "Profile Setup",
      "Password Creation",
      "Salary Reports",
      "Leave Apply",
      "Hiring Creation",
      "Salary Create",
      "Leave Section",
      "Company Setup",
      "Create Employee",
      "Create Products",
      "Lead Setup",
      "Window Setup",
      "Generate Complain",
      "Complain Assign",
      "Complain Report",
      "Create Customers",
      "Quotations",
      "Generate Order",
      "Generate Purchase",
      "Generate Performa",
      "Generate Text Invoice",
      "Generate Contract",
      "Generate Requisition",
      "Create Project",
      "Start Production",
      "Customers Payment",
      "Supplier Payment",
      "Bank Account Section",
      "Profit and Loss",
      "Balance Sheet",
      "All Ledger Report",
      "Inventory Summary",
      "GST Report",
      "LMS Summary",
      "Order Summary",
      "Purchase Summary",
      "Payment Summary",
      "WhatsApp Summary",
      "Email Summary",
      "SMS Summary",
      "Website API",
      "Email API",
      "All Module Summary",
    ],
  },
];

// Selected features for checkmark
const planFeatureCheck = {
  "Basic Plan": [
    "LMS Dashboard",
    "Orders Dashboard",
    "Profile Setup",
    "Generate Purchase",
    "LMS Summary",
    "Company Setup",
    "Create Employee",
    "Create Product",
    "Lead Setup",
    "Create Customer",
    "Quotation",
    "Generate Order",
    "Website API",
    "IndiaMart API",
    "TradeIndia API",
    "Just Dial API",
    "Facebook API",
    "Exporter India API",
    "WhatsApp API",
    "Email API",
    "SMS API",
    "All Module Training",
  ],
  "Standard Plan": plans[1].features.filter(
    (f) =>
      ![
        "Project Dashboard",
        "Service Dashboard",
        "Production Dashboard",
        "HR",
        "Purchase",
        "Text Invoice",
        "Performa",
        "Account's Dashboard",
      ].includes(f)
  ),
  "Business Plan": plans[2].features.filter(
    (f) => !["Create Products", "Create Project"].includes(f)
  ),
  "Premium Plan": plans[3].features,
};

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h1>
        <p className="text-gray-600 text-xl mb-2">
          Transforming Customer Connections, One Click at a Time.
        </p>
        <p className="text-gray-500 text-lg">
          Irresistible Features Tailored for Excellence.
        </p>
        <p className="mt-4 text-green-600 font-semibold">
          ✓ Upgrade Your Plan Anytime &nbsp; ✓ Flexible free trial
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} delay={index * 0.2} />
        ))}
      </div>
    </div>
  );
};

const PricingCard = ({ plan, delay }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
    >
      <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
      <p className="text-3xl font-extrabold mb-1">{plan.price}</p>
      <p className="text-gray-500 mb-6">{plan.description}</p>

      <ul
        className={`mb-4 w-full space-y-2 text-gray-700 transition-all duration-500 ${
          expanded ? "max-h-[600px] overflow-y-auto" : "max-h-40 overflow-hidden"
        }`}
      >
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <span
              className={`mr-2 ${
                planFeatureCheck[plan.name].includes(feature)
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {planFeatureCheck[plan.name].includes(feature) ? "✓" : "✗"}
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-center w-full border border-blue-500 text-blue-500 font-semibold py-2 rounded-lg hover:bg-blue-50 transition-colors"
      >
        {expanded ? "Hide" : "Read More"}
      </button>

      <button className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors">
       <Link to={`/book-demo-section`}>Buy Now</Link>
        
      </button>
    </motion.div>
  );
};

export default PricingPage;
