import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="my-4">
      <a
        className="flex items-center justify-center gap-x-2 no-underline hover:opacity-80"
        href="https://github.com/lucaslmlok/"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub size={30} />
        <small>Built by lucaslmlok 2022.</small>
      </a>
    </footer>
  );
};

export default Footer;
