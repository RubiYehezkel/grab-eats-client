const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          GrabEats.com
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <a href="/">
            <span>Privacy Policy</span>
          </a>
          <a href="/">
            <span>Terms of service</span>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
