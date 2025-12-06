const Footer = () => {
  const services = [
    "Custom Web Applications",
    "React Frontend Development",
    "Scalable Backend APIs",
    "Authentication & Dashboard Systems",
    "End-to-End MERN Projects",
  ];

  return (
    <footer className="bg-primary text-white mt-24 py-6 overflow-hidden">
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center text-lg font-semibold uppercase mx-6"
            >
              <span className="material-symbols-outlined text-xl mx-4">
                spark
              </span>
              {service}
            </div>
          ))}
        </div>
        <div className="flex absolute top-0 animate-marquee2 whitespace-nowrap">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center text-lg font-semibold uppercase mx-6"
            >
              <span className="material-symbols-outlined text-xl mx-4">TH</span>
              {service}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
