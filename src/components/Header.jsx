//import logo from "./assets/react.svg";
import logo from "../assets/Navbar Brand.png";

function Header() {
    return (
        <div className="w-full h-[72px] px-[24px] bg-[#0B0121] flex justify-center">
            <div className="flex w-[1200px] h-[72px] justify-center items-center">
                <div className="flex w-[1200px] h-[72px] justify-between items-center">
                    <div className="flex w-[138px] h-[22px] items-center">
                        <img src={logo} alt="Vaultflow Logo" className="" />
                        {/* <p className="w-[106px] h-[22px] left-8 text-white">Vaultflow</p> */}
                    </div>
                    <div className="flex w-[762px] h-[72px] gap-8 justify-end items-center text-white">
                        <div className="w-[94px] h-[72px] py-6 px-3"><a href="#">Features</a></div>
                        <div className="w-[81px] h-[72px] py-6 px-3"><a href="#">Pricing</a></div>
                        <div className="w-[97px] h-[72px] py-6 px-3"><a href="#">About us</a></div>
                        <button className="w-[189px] h-[40px] px-5 py-2 bg-white border text-black rounded-[50px] gap-2">Download the app</button>
                        <button className="w-[189px] h-[40px] px-5 py-2 border border-white rounded-full text-white">Talk to an expert</button>
                    </div>
                </div>
            </div>

        </div>


    );

}
export default Header