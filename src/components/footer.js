const Footer = () => {
  const today = new Date();
  return (
    <footer className="Footer">
      <p className="foot-para">
        Copyright &copy;
        {' '}
        {today.getFullYear()}
        {' '}
        Projects by Unorji Kingsley and Charles Andrews.
      </p>
    </footer>
  );
};

export default Footer;
