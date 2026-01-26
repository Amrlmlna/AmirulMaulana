import InteractiveBackground from "./InteractiveBackground";

export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-black relative z-10 overflow-hidden">
      <InteractiveBackground />
      <h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-none text-white mix-blend-difference select-none text-center relative z-20">
        AMIRUL
        <br />
        MAULANA
      </h1>
      <p className="mt-8 text-neutral-500 uppercase tracking-widest text-sm font-mono relative z-20">
        Creativity x Engineering
      </p>
    </section>
  );
}
