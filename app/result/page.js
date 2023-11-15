import Image from "next/image"; 

export default function Result() {
  return (
    <section className=" h-fit w-full bg-merahtua font-Poppins pt-28 pb-40">
      <div className="sm:ml-10 lg:ml-24">
        <p className="text-krim text-3xl mb-6 font-semibold ">Result</p>

        <div className="w-11/12 rounded-2xl bg-[#FEFEFE] flex py-28">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <div className="w-24 h-24 flex justify-center items-center rounded-full bg-[#FFEAEA] mx-auto">
              <p className="text-[#5D2510] font-semibold text-2xl">80%</p>
            </div>
            <p className="text-[#5D2510] mt-2 font-semibold text-2xl ">
              Persentase
            </p>
            <p className="text-[#5D2510] mt-6 font-regular text-md text-justify sm:mx-4 lg:mx-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optioquos est laborum. Laborum porro similique aliquid fuga quosdoloremque culpa quas accusamus reiciendis rerum! Ipsam expedita
              soluta autem consequatur sit.
            </p>
          </div>

          <div className="w-[2px] h-56 bg-slate-200 my-auto mx-4"></div>

          <div className="w-1/2 flex flex-col justify-center items-center">
            <div className=" bg-merahtua rounded-lg px-2 pt-2 ">
            <Image src='/depresi.png' width={551} height={304} className="w-96 shadow-lg rounded-xl"></Image>
            <h3 className="text-center font-medium text-2xl text-white py-4">Depresi Berat</h3>
            </div>

          </div>

        </div>

      </div>
      
      <div className="mt-8 flex justify-center">
        <button type="button" class="text-merahtua bg-[#EDE1D2] hover:bg-white  focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-md px-9 py-3.5 mb-2 shadow-lg">Back</button>
        </div>
    </section>
  );
}
