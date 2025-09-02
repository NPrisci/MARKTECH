import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";
import Image from "../assets/Image.png";
function Feature() {
    return (
        <section className="w-full h-[1298px] px-5 gap-2.5 flex flex-col items-center text-center bg-[#0B0121]">
            <div className='w-[470px] h-[324px] py-6 gap-2.5 flex flex-col items-center text-center'>
                <div className="w-[450px] h-[194px] gap-2.5 px-2.5 flex flex-col items-center text-center">
                    <div className="w-[430px] h-[174px] font-montserrat font-medium text-[48px] leading-[120%] tracking-[-0.32px]g text-white">
                        <p>Features that </p>
                        <p> work for your </p>
                        <p> future.</p>
                    </div>
                </div>
                <div className="w-[470px] h-[58px] font-normal text-lg tracking-[0px] text-center align-middle text-[18px] leading-[160%] font-montserrat text-white">
                    <p>Check out our amazing features and experience the </p>
                    <p>power of Vaultflow for yourself.</p>
                </div>
            </div>
            <div className="w-[1200px] h-[894px] gap-20 px-2.5 ">
                <div className="w-[1180px] h-[372px] gap-6 grid grid-cols-2">
                    <div className="w-[578px] h-[372px] rounded-lg bg-black/30 shadow-[inset_0px_0.5px_0px_0px_rgba(255,255,255,0.5),-2px_-2px_40px_0px_rgba(187,155,255,0.15),-2px_-2px_10px_0px_rgba(233,223,255,0.3)]">
                        
                        <div className="w-[578px] h-[372px] flex flex-col text-left px-4"> <br />
                            <img src={Icon1} alt="Logo" className="h-[80px] w-[80px]" />
                            <div className="w-[458px] h-[186px] gap-2.5 text-[#ECECEC] text-left px-6">
                                <div className="w-[458px] h-[42px]  font-montserrat font-medium text-[32px] leading-[130%] tracking-[-0.16px]">Analytics Dashboard</div>
                                <div className="w-[458px] h-[84px] font-montserrat font-normal text-[14px] leading-[150%] tracking-[0]">
                                    <p>Our Analytics Dashboard provides a clear and intuitive interface </p>
                                    <p>for you to easily analyze your data. From customizable graphs to</p>
                                    <p>real-time data updates, our dashboard offers everything you </p>
                                    <p>need to gain valuable insights.</p>
                                </div>
                                <div className="w-[458px] h-[40px] pt-4 gap-4">
                                    <div className="w-[132px] h-[24px] gap-2 underline underline-offset-2"><a href="#">View dashboard</a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[578px] h-[372px] rounded-lg bg-black/10 shadow-[inset_0px_0.5px_0px_0px_rgba(255,255,255,0.5),-2px_-2px_40px_0px_rgba(187,155,255,0.15),-2px_-2px_10px_0px_rgba(233,223,255,0.3)]">
                        
                        <div className="w-[578px] h-[372px] flex flex-col text-left px-4"> <br />
                            <img src={Icon2} alt="Logo" className="h-[80px] w-[80px] " />
                            <div className="w-[458px] h-[186px] gap-2.5 text-[#ECECEC] text-left px-6">
                                <div className="w-[458px] h-[42px]  font-montserrat font-medium text-[32px] leading-[130%] tracking-[-0.16px]">Digital Credit Tokens</div>
                                <div className="w-[458px] h-[84px] font-montserrat font-normal text-[14px] leading-[150%] tracking-[0]">
                                    <p>Reward your customers and incentivize engagement with our </p>
                                    <p>innovative digital credit tokens. Our tokens can be customized to </p>
                                    <p>match your branding, and are a flexible and scalable way to drive </p>
                                    <p> customer loyalty and encourage repeat business.</p>
                                </div>
                                <div className="w-[458px] h-[40px] pt-4 gap-4">
                                    <div className="w-[132px] h-[24px] gap-2 underline underline-offset-2"><a href="#">View tokens</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="grid grid-cols-2 justify-self-end w-[1180px] h-[422px] gap-4 rounded-[20px] p-[60px] opacity-100 shadow-[inset_0px_0.5px_0px_0px_rgba(255,255,255,0.5),-2px_-2px_40px_0px_rgba(187,155,255,0.15),-2px_-2px_10px_0px_rgba(233,223,255,0.3)]">
                    <div className="w-[460px] h-[302px] gap-6 rounded-lg bg-transparent ">
                        <img src={Icon3} alt="Logo" className="h-[80px] w-[80px] " />
                        <div className="w-[460px] h-[228px] gap-2.5 flex flex-col items-center px-4">
                            <div className="w-[460px] h-[228px] gap-2.5 text-[#ECECEC] text-left px-6">
                                <div className="w-[460px] h-[42px]  font-montserrat font-medium text-[32px] leading-[130%] tracking-[-0.16px]">Code Collaboration</div>
                                <div className="w-[460px] h-[126px] font-montserrat font-normal text-[14px] leading-[150%] tracking-[0] ">
                                    <p>Our advanced code synchronization technology ensures</p>
                                    <p>that your data is always up-to-date and accurate, no matter where it's</p>
                                    <p>coming from. Whether you're integrating data from multiple </p>
                                    <p>sources or working with a team of developers, our</p>
                                    <p>synchronization technology makes it easy to collaborate and</p>
                                    <p>ensure that your data is consistent and reliable.</p>
                                </div>
                                <div className="w-[196px] h-[40px] pt-4 gap-4">
                                    <div className="w-[196px] h-[24px] gap-2 underline underline-offset-2"><a href="#">View code collaboration</a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[584px] h-[300px] flex + justify-end">
                      <img src={Image} alt="Image" className="h-[300px] w-[467px]  " />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Feature
