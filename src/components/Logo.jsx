import Logo1 from "../assets/Logo1.png";
import Logo2 from "../assets/Logo2.png";
import Logo3 from "../assets/Logo3.png";
import Logo4 from "../assets/Logo4.png";
import Logo5 from "../assets/Logo5.png";
import Logo6 from "../assets/Logo6.png";
import Logo7 from "../assets/Logo7.png";

function Logo() {
    return (
        <section className="w-full h-[210.2696533203125px] px-[60px] py-[20px] gap-10 flex flex-col items-center text-center bg-[#0B0121]">
            <p className="w-[664px] h-[26px] font-normal text-sm tracking-normal leading-[3rem] align-middle text-white">Trusted by teams at over 1,000 of the world’s leading organizations</p>
            <div className="w-[1400px] h-[25] gap-6 flex flex-wrap justify-center grayscale">
                <img src={Logo1} alt="Logo1" className="h-6 w-[62px]" />
                <img src={Logo2} alt="Logo2" className="h-[17px] w-[87px]" />
                <img src={Logo3} alt="Logo3" className="h-[21px] w-[67px]" />
                <img src={Logo4} alt="Logo4" className="h-[13px] w-[143px]" />
                <img src={Logo5} alt="Logo5" className="h-[24.27px] w-[80px]" />
                <img src={Logo6} alt="Logo6" className="h-[22.8px] w-[120px]" />
                <img src={Logo7} alt="Logo7" className="h-[20px] w-[54.29px]" />
            </div>
        </section>
    );
}

export default Logo