import React, { FC } from "react";
import Button from "../components/Button";

type Props = {
  poster: string;
  title: string;
  date?: string;
  className?: string;
};

const EventCard: FC<Props> = ({ children, poster, title, date, className }) => {
  return (
    <div className={`${className} bg-[#FFF] lg:flex lg:flex-row p-[4vh] lg:p-[5vh] mb-[1.875rem] rounded-[26px] text-justify`}>
      <div className="mb-[1.5rem] lg:mr-[2.875rem] flex-none">
        <img src={poster} alt="Poster Webinar" className="w-[284px] rounded-[17px] mx-auto"/>
      </div>
      <div className="relative">
        <div className="lg:flex lg:justify-between mb-[0.625rem]">
          <div>
            <h3 className="font-black text-[1.5rem] lg:text-[2.25rem]">{title}</h3>
          </div>
          <div>
            <h3 className="text-red text-[1.5rem] lg:text-[2.25rem]">{date}</h3>
          </div>
        </div>
        <p className="lg:text-[1.5rem] lg:leading-[29px]">{children}</p>
        <a href="https://lynk.id/mealth" className="block text-right mt-[2rem]">
          <Button className="bg-green hover:font-black font-[500] lg:text-lg w-[8.5rem] h-[3rem] rounded-[2.375rem] lg:w-[12.5rem] lg:h-[4.25rem] lg:rounded-[2.5rem]">Book Now!</Button>
        </a>
      </div>
    </div>
  );
};

EventCard.defaultProps = {
  className: '',
  date: 'DD-MM-YY',
};

export default EventCard;