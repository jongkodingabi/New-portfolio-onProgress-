import Navigation from "@/components/Navigation";
import stars from "@/assets/svg/stars.svg";
import certificateItems from "@/certificateItems";
import { useEffect, useState } from "react";
import SecondaryCertifCard from "@/components/SecondaryCertifCard";
import Modal from "@/components/Modals/PopUpModals";

const CertificatePage = () => {
  useEffect(() => {
    document.title = "Certificates | Abisam";
  }, []);

  interface SelectedItem {
    image: string;
    title: string;
    description: string;
    tags: string[];
    [key: string]: any;
  }

  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  const toggleModal = (item: any) => {
    setSelectedItem(item);
    setModal(!modal);
    console.log(item);
  };
  return (
    <>
      <div
        className="wrapper overflow-hidden flex flex-col min-h-full items-center justify-center"
        // onClick={() => setModal(false)}
      >
        <div className="py-10 mt-14 flex justify-between gap-2">
          <h1 className="font-bold text-2xl">Certificates</h1>
          <img src={stars} alt="Stars" className="w-15 h-15 z-10" />
        </div>
        <div className="flex flex-wrap justify-center items-center relative z-10 gap-4">
          {certificateItems.map((item) => (
            <SecondaryCertifCard
              key={item.id}
              title={item.title}
              description={item.description}
              src={item.src}
              instance={item.instance}
              alt={item.alt}
              onClick={() => toggleModal(item)}
            />
          ))}
        </div>
      </div>
      <Navigation />

      {modal && selectedItem !== null && (
        <Modal
          onClick={() => setModal(false)}
          image={selectedItem.src}
          title={selectedItem.title}
          description={selectedItem.description}
          tags={selectedItem.instance}
        />
      )}
    </>
  );
};

export default CertificatePage;
