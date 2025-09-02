import logoVault from "../assets/logoVaultflow.png";

function Footer() {
  return ( 
    <section className="w-full h-[340px] px-16 opacity-100 bg-[#0B0121] gap-4">
      <br />
      <div className="w-[1200px] px-6 opacity-100 container mx-auto max-w-6xl">
        
        {/*conteneur flex-nowrap */}
        <div className="w-[1152px] h-[290px] opacity-100 flex flex-nowrap gap-8">
          
          {/* Bloc Contact*/}
          <div className="w-[462px] h-[290px] gap-10 opacity-100 flex flex-col text-left px-6">
            <div className="w-[462px] h-[123px] gap-4 opacity-100 flex flex-col">
              <div className="w-[462px] h-[29px] opacity-100 font-montserrat text-[15px] leading-[130%] tracking-[-0.16px] text-white">
                <h2 className="font-montserrat font-medium text-[32px] leading-[130%] tracking-[-0.16px] text-white">Contact </h2>
                <div className="w-[462px] h-[78px] gap-1.5 opacity-100 space-y-2">
                  <p>Work inquires: work@vaultflow.com</p>
                  <p>PR and speaking: press@vaultflow.com</p>
                  <p>New business: newbusiness@vaultflow.com</p>
                </div>
              </div>
            </div>

            <div className="w-[206px] h-[67px] gap-4 opacity-100 flex flex-col">
              <h1 className="w-[91px] h-[29px] opacity-100 text-white font-montserrat font-medium text-[32px] leading-[130%] tracking-[-0.16px] gap-3">Careers</h1>
              <div className="w-[206px] h-[22px] opacity-100 text-white font-montserrat gap-1.5">
                Careers@vaultflow.com
              </div>
            </div>

            <div className="w-[289px] h-[20px] opacity-100 text-white font-montserrat items-center">
              © 2023 Vaultflow. All Rights Reserved.
            </div>
          </div>

          {/* Bloc Address- Social */}
          <div className="w-[462px] h-[252px] gap-10 opacity-100 flex flex-col items-center">
            <div className="w-[462px] h-[89px] gap-4 opacity-100 ">
              <h1 className="w-[462px] h-[29px] opacity-100 font-montserrat font-medium text-[32px] leading-[130%] tracking-[-0.16px] text-white gap-3">Address</h1>
              <br />
              <div className="w-[210px] h-[44px] opacity-100 text-white font-montserrat gap-1.5">
                <p>398 11th Street, Floor 2</p>
                <p>San Francisco, CA 94103</p>
              </div>
            </div>

            <div className="w-[462px] h-[123px] gap-4 opacity-100 flex flex-col">
              <h1 className="w-[71px] h-[29px] opacity-100 font-montserrat font-medium text-[32px] leading-[130%] tracking-[-0.16px] text-white mt-6 mb-4">Social</h1>

              <div className="w-[462px] h-[78px] gap-1.5 opacity-100">
                <p className="w-[61px] h-[22px] opacity-100 text-white font-montserra hover:text-blue-400 transition duration-300">Twitter</p>
                <p className="w-[91px] h-[22px] opacity-100 text-white font-montserra">Instagram</p>
                <p className="w-[60px] h-[22px] opacity-100 text-white font-montserra">Tik Tok</p>
              </div>
            </div>
          </div>

          {/* Bloc Logo */}
          <div className="w-[462px] h-[290px] opacity-100 flex justify-end items-start flex-col">
            <div className="w-[138px] h-[22px] gap-2.5 opacity-100 flex justify-end">
              <img src={logoVault} alt="Logo de Vaultflow" className="h-[22px] w-[138px]" />
            </div>
          </div>
<br />
        </div>
      </div>
    </section>
  );
}

export default Footer;
