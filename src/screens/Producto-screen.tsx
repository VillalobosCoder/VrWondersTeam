import { FaRegCircleCheck } from "react-icons/fa6";
import { checkList } from "../constants/check-data";
import Vr from "../assets/vr-agusto.jpg";

function Producto() {
    return (
        <div className="mt-20" id="producto">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6">Tu próxima gran aventura
                <span className="bg-gradient-to-r from-[#0c4f6b] to-[#3f8296] text-transparent bg-clip-text">
                    {" "}
                    está en  realidad virtual.
                </span>
            </h2>
            <div className="flex flex-wrap justify-center">
                <div className="pt-12 w-full lg:w-1/2    rounded-xl">
                    <img src={Vr} alt="Vr" className="rounded-xl"/>
                </div>
                <div className="pt-12 w-full lg:w-1/2">
                    {checkList.map((check, index) => (
                        <div key={index} className="flex mb-12">
                            <div className="flex justify-center p-2 items-center text-green-400 mx-6 bg-green-100 h-10 w-10 rounded-full">
                                <FaRegCircleCheck size={20} />
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl">{check.titulo}</h5>
                                <p className="text-md text-neutral-500">{check.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Producto;