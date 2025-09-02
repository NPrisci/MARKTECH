import hero2 from "../assets/hero2.png";
function Hero() {
    return (
        <section className="w-full h-[1201.810791015625px] px-5 pb-20 pt-44 gap-40 text-center relative bg-[url('/hero1.jpg')] bg-cover bg-center flex justify-center items-center flex-col ">
            <div className="w-[960px] h-[951.8108520507812px] gap-24 justify-center items-center">
                <section className="w-[960px] h-[399.81085205078125px] gap-6 justify-center flex flex-col items-center text-center">
                    <button className="w-[417.6216735839844px] px-[9.91px] py-[19.81px] rounded-[61.91px] border-t-[1.24px] border-white/20 bg-white/3 text-[#ECECEC] mb-8">We just raised $20M in Series B. Learn more</button>

                    <div className="w-[960px] h-[242px] gap-6 ">
                        <div className="w-[960px] h-[160px] flex flex-col items-center text-center">
                            <h1 className="text-5xl md:text-6xl mb-6 text-[#ECECEC] font-medium text-[80px] leading-[100%] tracking-[3%] text-center">
                                Modern analytics <br />
                                <span className="text-gray-400">for the modern world</span>
                            </h1>
                            <div className="w-[600px] h-[58px] flex flex-col items-center text-center ">
                                <p className="text-gray-400 max-w-xl mx-auto mb-8">
                                <p className="justify-center mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                                <p className="justify-center ">Suspendisse varius enim in eros elementum tristique.</p>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[394px] h-[64px] gap-4 pt-4 justify-center flex space-x-4">
                        <button className="w-[197px] h-[48px] px-6 py-3 gap-2  bg-white text-black rounded-full">Download the app</button>
                        <button className="w-[181px] h-[48px] px-6 py-3 border border-white border-t-[1px] rounded-full text-white">Talk to an expert</button>
                    </div>

                </section>
                 <div>
                <img src={hero2} alt="Hero Dashboard" className="shadow-lg flex justify-center w-[960px] h-[472px] rounded-3xl" />
            </div>
            </div>
        </section>
    );
}

export default Hero 