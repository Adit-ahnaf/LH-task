"use client";

import SideBarButton from "@/app/components/SideBarButton";
import useData from "@/app/hook/useData";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import ConferenceDetails from "@/app/components/ConferenceDetails";
import "react-accessible-accordion/dist/fancy-example.css";
import { Draggable } from "react-drag-reorder";

export default function Conference({ params }) {
  const [data] = useData();
  const [updateData, setUpdateData] = useState({});
  const [testData, setTasteData] = useState(null);
  const [isSchedule, setIsSchedule] = useState(false);

  const handleSideMenu = (id) => {
    const foundData = data.find((item) => item.id == params.id);
    if (id) {
      switch (id) {
        case "organizer":
          if (foundData) setTasteData(foundData.organizers);
          setIsSchedule(false);
          break;
        case "speaker":
          if (foundData) setTasteData(foundData.speakers);
          setIsSchedule(false);
          break;
        case "schedule":
          if (foundData) setTasteData(foundData.schedule);
          setIsSchedule(true);
          break;
        case "sponsor":
          if (foundData) setTasteData(foundData.sponsors);
          setIsSchedule(false);
          break;
        default:
          if (foundData) setTasteData(foundData.organizers);
          setIsSchedule(false);
          break;
      }
    }
  };

  const findSingleData = data.find((item) => item.id == params.id);

  const getName = () => {
    if (findSingleData) return findSingleData.name;
  };

  const getDescription = () => {
    if (findSingleData) return findSingleData.description;
  };

  useEffect(() => {
    if (findSingleData) setTasteData(findSingleData.organizers);
  }, [findSingleData]);

  return (
    <div className=" max-w-[90%] scrn-900:max-w-[70%] m-auto  ">
      <h1 className="text-[#0A142F] font-bold text-[30px] sm:text-[34px] scrn-900:text-[40px] mt-9">
        {getName()}
      </h1>
      <p className="text-[#0A142FCC] pt-[8px] sm:pt-[20px] py-[20px] scrn-900:py-[30px] text-[14px] scrn-900:text-[18px] ">
        {getDescription()}
      </p>

      <div className=" hidden scrn-900:grid grid-cols-[0.5fr_1fr] gap-[40px] mb-[60px]">
        <div className="flex flex-col gap-5">
          <Draggable>
            <SideBarButton name={"organizer"} handleSideMenu={()=>{handleSideMenu("organizer")}} />
            <SideBarButton name={"speaker"} handleSideMenu={()=>{handleSideMenu("speaker")}} />
            <SideBarButton name={"schedule"} handleSideMenu={()=>{handleSideMenu("schedule")}} />
            <SideBarButton name={"sponsor"} handleSideMenu={()=>{handleSideMenu("sponsor")}} />
            <div></div>
          </Draggable>
        </div>
        <ConferenceDetails isSchedule={isSchedule} testData={testData} />
      </div>

      {/* <------------- Responsive mode ------------> */}
      <Accordion className=" block scrn-900:hidden" allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <SideBarButton
                name={"organizer"}
                handleSideMenu={handleSideMenu}
              />
            </AccordionItemButton>
          </AccordionItemHeading>
          <div className="bg-[#f4f4f4] mb-5">
            <AccordionItemPanel>
              <ConferenceDetails isSchedule={isSchedule} testData={testData} />
            </AccordionItemPanel>
          </div>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <SideBarButton name={"speaker"} handleSideMenu={handleSideMenu} />
            </AccordionItemButton>
          </AccordionItemHeading>
          <div className="bg-[#f4f4f4] mb-5">
            <AccordionItemPanel>
              <ConferenceDetails isSchedule={isSchedule} testData={testData} />
            </AccordionItemPanel>
          </div>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <SideBarButton
                name={"schedule"}
                handleSideMenu={handleSideMenu}
              />
            </AccordionItemButton>
          </AccordionItemHeading>
          <div className="bg-[#f4f4f4] mb-5">
            <AccordionItemPanel>
              <ConferenceDetails isSchedule={isSchedule} testData={testData} />
            </AccordionItemPanel>
          </div>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <SideBarButton name={"sponsor"} handleSideMenu={handleSideMenu} />
            </AccordionItemButton>
          </AccordionItemHeading>
          <div className="bg-[#f4f4f4] mb-5">
            <AccordionItemPanel>
              <ConferenceDetails isSchedule={isSchedule} testData={testData} />
            </AccordionItemPanel>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
