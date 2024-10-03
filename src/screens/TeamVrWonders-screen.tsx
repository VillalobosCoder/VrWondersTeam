import { teamData } from "../constants/team-data";

function TeamVrWonders() {
    return (
        <div className="relative mt-20 border-b border-neutral-50 min-h-[800px]" id="quienes-somos">
            <div className="text-center">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 mb-10">¿Quienes somos?</h2>
                <span className="bg-neutral-200 text-[#3f8296] rounded-full h-6 text-md font-medium px-2 py-1 uppercase mt-1">
                    Equipo
                </span>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20">
                {teamData.map((member, index) => (
                    <div key={index} className="w-full sm:w-full lg:w-1/2">
                        <div className="flex">
                            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-200 text-[#3f8296] justify-center items-center rounded-full">
                                {member.icon}
                            </div>
                            <div>
                                <h5 className="mt-1 mb-6 text-lg">{member.titulo}</h5>
                                <p className="text-md p-2 mb-20 text-neutral-500">{member.descripcion}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamVrWonders;