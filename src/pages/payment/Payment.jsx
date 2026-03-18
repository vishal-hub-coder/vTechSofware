import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const initialPlan = location.state?.plan || "Business";
  const initialAmount = location.state?.amount ? String(location.state.amount) : "499";
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    plan: initialPlan,
    amount: initialAmount,
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-12 px-4 md:px-10">
      <div className="max-w-5xl mx-auto bg-slate-900/90 backdrop-blur rounded-3xl border border-white/10 shadow-2xl p-6 md:p-10">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Secure One-Time Purchase</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Complete Your Payment</h1>
          <p className="text-slate-300 mt-2 max-w-2xl mx-auto">
            Enter your billing details and card information to finish setup and access your ERP tools instantly.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl bg-emerald-500/15 border border-emerald-500/40 p-6">
            <h2 className="text-2xl font-bold text-emerald-300">Payment Completed!</h2>
            <p className="mt-2 text-slate-200">Thank you, {formData.fullName || "Customer"}. Your payment is processed.</p>
            <div className="mt-4 p-4 rounded-xl bg-slate-800/70 border border-white/10">
              <p className="text-sm text-slate-300">Plan: <span className="text-white">{formData.plan}</span></p>
              <p className="text-sm text-slate-300 mt-1">Amount: <span className="text-white">${formData.amount}.00</span></p>
              <p className="text-sm text-slate-300 mt-1">Receipt sent to: <span className="text-white">{formData.email || "—"}</span></p>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-400 transition"
            >
              Make Another Payment
            </button>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-200 mb-1">Full Name</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/20 bg-slate-800 px-3 py-2 text-white focus:border-cyan-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-200 mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/20 bg-slate-800 px-3 py-2 text-white focus:border-cyan-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-200 mb-1">Company</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="w-full rounded-xl border border-white/20 bg-slate-800 px-3 py-2 text-white focus:border-cyan-400 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-200 mb-1">Selected Plan</label>
                  <select
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/20 bg-slate-800 px-3 py-2 text-white focus:border-cyan-400 outline-none"
                  >
                    <option value="Business">Business</option>
                    <option value="Growth">Growth</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-slate-200 mb-1">Amount (USD)</label>
                  <input
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    type="number"
                    min="1"
                    className="w-full rounded-xl border border-white/20 bg-slate-800 px-3 py-2 text-white focus:border-cyan-400 outline-none"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label className="block text-sm text-slate-200 mb-1">Card Number</label>
                <input
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  placeholder="1234 5678 9012 3456"
                  className="w-full rounded-xl border border-white/20 bg-slate-800 px-3 py-2 text-white focus:border-cyan-400 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-200 mb-1">Expiry</label>
                  <input
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    required
                    placeholder="MM/YY"
                    className="w-full rounded-xl border border-white/20 bg-slate-800 px-3 py-2 text-white focus:border-cyan-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-200 mb-1">CVV</label>
                  <input
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    placeholder="123"
                    className="w-full rounded-xl border border-white/20 bg-slate-800 px-3 py-2 text-white focus:border-cyan-400 outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-semibold text-slate-900 hover:from-cyan-400 hover:to-blue-500 transition"
              >
                Pay ${formData.amount}.00
              </button>
            </form>

            <aside className="rounded-2xl border border-white/10 bg-slate-800/60 p-4">
              <div className="mb-4">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Order Summary</p>
                <h3 className="text-xl font-bold mt-2">ERP Subscription</h3>
                <p className="text-slate-300 mt-1">Billed monthly; easily pause or upgrade anytime.
                </p>
              </div>

              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-300">Plan</span><span className="font-semibold">{formData.plan}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-300">Monthly Fees</span><span className="font-semibold">${formData.amount}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-300">Tax (18%)</span><span className="font-semibold">${((Number(formData.amount) || 0) * 0.18).toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 font-bold text-white text-lg">
                  <span>Total</span><span>${((Number(formData.amount) || 0) * 1.18).toFixed(2)}</span>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;

