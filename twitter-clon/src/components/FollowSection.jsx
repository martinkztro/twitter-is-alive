import FollowCard from "./FollowCard";



const FollowSection = () => { 

    return (
        <>
            <section className="flex flex-col">

                <div className="bg-[#22303c93] flex flex-col w-[70%] h-[60%] mt-4 p-5 rounded-3xl gap-4">

                    <h1 className="text-white ml-12 font-bold text-xl mb-4">Who to follow</h1>
                    
                    <FollowCard name={"Martin"} username={"@martinkztro"} avatar={"https://unavatar.io/kikobeats"}/>

                    <FollowCard name={"NASA"} username={"@nasaspace"} avatar={"https://unavatar.io/kikobeats"}/>

                    <FollowCard name={"Elon Musk"} username={"@elonmusk"} avatar={"https://unavatar.io/kikobeats"}/>

                    <FollowCard name={"M. Zucker"} username={"@zuck"} avatar={"https://unavatar.io/kikobeats"}/>

                    <figure>
                        <p className="text-blue-500 text-center mt-8">See more</p>
                    </figure>

                </div>

            </section>








        </>
    );

    
}

export default FollowSection;