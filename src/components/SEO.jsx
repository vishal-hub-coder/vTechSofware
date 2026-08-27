import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "V-Tech Software | Custom Software Development Company",
  description = "We provide Website Development, ERP Software, CRM, HRMS, Inventory Management and Business Automation Solutions.",
  keywords = "software development, ERP software, CRM software, HRMS, website development",
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;