export const Footer = () => {
  return (
    <footer className="w-full mx-auto bg-black py-4">
      <p className="text-white text-center">
        All rights reserved &copy; {new Date().getFullYear()} |{" "}
        <a href="https://github.com/ezequiel-arevalo/react-tailwind-template">
          Ezequiel Arevalo
        </a>
      </p>
    </footer>
  );
};
