import { FaEarthAmericas } from "react-icons/fa6";

function Inicio() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20" id="inicio">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Lugares lejanos,
        <span className="bg-gradient-to-r from-[#0c4f6b] to-[#3f8296] text-transparent bg-clip-text">
          {" "}
          experiencias cercanas
        </span>
      </h1>
        <p className="flex justify-center my-10">
          Vive la experiencia de caminar por sitios de gran relevancia mundial. ¡Haz de la historia una aventura que puedas experimentar!
        </p>
        <div className="flex justify-center my-10">
          <a className="bg-gradient-to-r from-[#0c4f6b] to-[#3f8296] py-4 px-4 mx-3 rounded-full hover:from-[#106b91] hover:to-[#4fa3bc] flex justify-center items-center gap-2">
            <p className="text-clip text-white">Explora ahora</p>
            <FaEarthAmericas color="white" size={20}/>
          </a>
        </div>
    </div>
  );
};

export default Inicio;