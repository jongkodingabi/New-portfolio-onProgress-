import certificateItems from "@/certificateItems";
import SertifCard from "@/components/reactbits/SertifCard";
import MainButton from "../button/MainButton";

export const Certificate = () => {
  const certificates = certificateItems.slice(0, 3);
  return (
    <>
      <div className="bg-black w-screen flex flex-col items-center justify-center text-center overflow-x-hidden">
        {/* Title */}

        <p className="text-lg font-light text-gray-400 mt-4 sm:mx-2">
          Here are some of my projects that I have worked on.
        </p>

        <div className="flex flex-col space-y-18 justify-center items-center py-10">
          {/* Card Projects */}
          {certificates.map((certificate) => (
            <SertifCard
              key={certificate.id}
              imageUrl={certificate.src}
              title={certificate.title}
              description={certificate.description}
              date={certificate.date}
              instance={certificate.instance}
            />
          ))}
        </div>
        {/* Projects Nav */}
        <MainButton title="View All" />
      </div>
    </>
  );
};
