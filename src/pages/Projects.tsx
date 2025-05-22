"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { GridPattern } from "@/components/reactbits/GridPattern";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import MainCard from "@/components/reactbits/MainCard";
import itemsProjects from "@/ProjectItems";

import PopUpModals from "@/components/Modals/PopUpModals";

function Projects() {
  useEffect(() => {
    document.title = "Projects | Abisam";
  }, []);
  // Start Filters

  // Active button
  const [selectedFilters, setSelectedFilters] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState(itemsProjects);
  interface SelectedItem {
    image: string;
    title: string;
    description: string;
    tags: string[];
    [key: string]: any;
  }

  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);
  const [modal, setModal] = useState(false);
  let filters = ["All", "Frontend", "Backend", "Mobile"];

  const handleFilterButtonClick = (selectedCategory: string) => {
    if (selectedCategory == "All") {
      setSelectedFilters([]);
    } else {
      setSelectedFilters([selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = itemsProjects.filter(
          (item) => item.category === selectedCategory
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    }
    if (selectedFilters.length === 0) {
      // Tampilkan semua item jika tidak ada filter aktif (All)
      setFilteredItems([...itemsProjects]);
    }
  };
  // End Filters

  // Pop Up Modal
  const toggleModal = (item: any) => {
    setSelectedItem(item);
    setModal(!modal);
    console.log("Modal dibuka");
  };

  return (
    <>
      <div className="relative top-0 m-0 bg-black z-0 max-w-s min-h-screen overflow-hidden text-white flex flex-col text-center">
        <div className="md:size-full items-center justify-center overflow-hidden rounded-lg bg-background">
          <GridPattern
            width={50}
            height={50}
            x={-1}
            y={-1}
            className={cn(
              "fixed [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
            )}
          />
          <Header className="fixed flex justify-between text-xl left-0 w-full z-20 text-white" />
          {/* Bloop animate header */}
          <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto z-2 max-w-lg">
            <div className="fixed top-0 left-0 w-300 h-120 bg-violet-300 rounded-full filter blur-[200px] opacity-40"></div>
            <div className="fixed top-0 right-7 w-120 h-100 bg-rose-300 rounded-full filter blur-[200px] opacity-40"></div>
            <h1 className="absolute top-14 text-center text-white font-extrabold tracking-tighter z-[9999] flex justify-center items-center">
              My Projects
            </h1>
          </div>

          <div className="flex justify-center items-center relative top-40 z-10 gap-4">
            {filters.map((category, idx) => {
              const isActive =
                (category === "All" && selectedFilters.length === 0) ||
                selectedFilters.includes(category);

              return (
                <button
                  onClick={() => handleFilterButtonClick(category)}
                  key={`filters-${idx}`}
                  className={cn(
                    "px-4 py-1 rounded-full transition-all duration-300 border text-xs md:text-sm font-semibold",
                    isActive
                      ? "bg-white text-black border-white"
                      : "bg-transparent bg-opacity-70 border border-white backdrop-blur-sm hover:bg-gray-600"
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Cards Display */}
          <div className="w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center px-6 md:px-18 mt-40 z-10">
            {filteredItems.map((item) => (
              <MainCard
                key={item.id}
                img={item.image}
                title={item.title}
                description={item.description}
                tags={item.tags}
                link={item.link}
                isLinked={item.isLinked}
                githubLink={item.github}
                cta={item.cta}
                onClick={() => toggleModal(item)}
                category={item.category}
              />
            ))}
          </div>
          <Navigation />
        </div>
      </div>

      {/* Modal Content */}
      {modal && selectedItem !== null && (
        <PopUpModals
          onClick={() => setModal(false)}
          image={selectedItem.image}
          title={selectedItem.title}
          description={selectedItem.description}
          tags={selectedItem.tags}
          githubLink={selectedItem.github}
          isLinked={selectedItem.isLinked}
          link={selectedItem.link}
          cta={selectedItem.cta}
        />
      )}
    </>
  );
}

export default Projects;
