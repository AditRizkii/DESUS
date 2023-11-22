import getTingkatDepresi from "@/app/api/tingkatDepresi/getTingkatDepresi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ContentDiagnose from "./content";

export default async function Result({ params }) {
  const id = params.id;
  const tingkat = await getTingkatDepresi();
  const arrTingkat = Object.values(tingkat);
  // const sarans = JSON.parse()
  // console.log(arrTingkat);
  return (
    <section className=" h-fit w-full bg-merahtua font-Poppins pt-16 pb-16">
      {arrTingkat.map((e) => {
        // console.log(parseInt(id) === e.id);
        if (e?.id === parseInt(id)) {
          return (
            <ContentDiagnose
              key={e?.id}
              id={e?.id}
              saran={e?.saran}
              image={e?.foto}
              diagnose={e?.nama}
            />
          );
        } else if (parseInt(id) === 8) {
          return (
            <ContentDiagnose
              key={parseInt(id)}
              id={parseInt(id)}
              saran={"Tidak terindikasi Depresi"}
              image={""}
              diagnose={"Tidak terindikasi depresi"}
            />
          );
        }
      })}

      <div className="mt-8 flex justify-center">
        <Link
          href="/quiz"
          class="text-merahtua bg-[#EDE1D2] hover:bg-white  focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-md px-9 py-3.5 mb-2 shadow-lg"
        >
          Back
        </Link>
      </div>
    </section>
  );
}
