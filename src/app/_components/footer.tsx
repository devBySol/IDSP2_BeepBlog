import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#cdcdcd] border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center mb-1">
          <img src="/favicon/logo.svg" alt="logo" width={200} height={200} className="lg:mr-6 mb-6 lg:mb-0" />
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a href={`https://github.com/devBySol/IDSP2_BeepBlog/branches`} className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors ease-in-out mb-6 lg:mb-0 rounded-full shadow-lg hover:shadow-md">
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
