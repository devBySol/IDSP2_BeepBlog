import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex items-center">
        <img src="/favicon/mainLogo.svg" alt="Beep Logo" className="w-12 h-12 mr-4" />
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">Beep</h1>
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">Welcome to Beep.</h4>
    </section>
  );
}
