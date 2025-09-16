import React from "react";

const ProcessManagementPage = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Process Management
      </h1>

      <p className="text-gray-600 mb-8">
        Streamline, automate, and monitor business processes with powerful
        process management tools. Ensure efficiency, accountability, and
        compliance across all workflows.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Workflow Automation
          </h2>
          <p className="text-gray-600">
            Automate repetitive tasks, define business rules, and create
            seamless workflows across departments.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Approvals & Compliance
          </h2>
          <p className="text-gray-600">
            Ensure proper authorization with multi-level approvals and maintain
            compliance with industry standards.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Real-Time Tracking
          </h2>
          <p className="text-gray-600">
            Monitor ongoing processes with real-time dashboards and detailed
            analytics for better decision-making.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Task Management
          </h2>
          <p className="text-gray-600">
            Assign, prioritize, and track tasks to ensure smooth execution of
            every process step.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Audit Trails
          </h2>
          <p className="text-gray-600">
            Maintain a complete history of process changes and approvals for
            accountability and transparency.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Integration Support
          </h2>
          <p className="text-gray-600">
            Seamlessly integrate with ERP, CRM, HRM, and other enterprise
            systems for unified process execution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessManagementPage;
