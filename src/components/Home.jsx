import Banner from "../assets/banner.png";
const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20">
      <div className="rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 ">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          {/* banner image */}
          <div>
            <img src={Banner} alt="" className="lg:h-[500px] lg:w-[500px]" />
          </div>
          {/* banner content */}
          <div className="md:w-3/5">
            <h2 className="md:text-6xl text-4xl font-bold text-[#44b678] mb-6 leading-relaxed">
              Solusi Tugas Terbaik untuk Anda
              <span className="md:text-5xl text-4xl font-bold text-[#44b678]">
                .
              </span>
            </h2>
            <p className="mb-8 text-slate-700 text-justify sm:text-sm md:text-xl">
              Selamat datang di JokiinAja, platform solusi tugas untuk
              mahasiswa. Dapatkan tugas Anda selesai dengan mudah dan efisien
              bersama tim joki profesional kami. Kualitas terjamin, tepat waktu.
              Bergabunglah sekarang!
            </p>
            <div>
              <button className="py-3 px-8 font-semibold bg-[#44b678] text-white rounded hover:bg-[#3c805b] transition-all duration-300">
                Temukan Lebih Banyak
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
