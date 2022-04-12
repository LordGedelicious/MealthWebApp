import Girl from "../images/11-11.svg";
import Wave from "../images/vstock svg-wave-events.png";
import Star from "../images/vstock svg-17.svg";
import StarOrange from "../images/vstock svg-17-sorange.svg";
import Webinar from "../images/event-posters/webinar.png";
import Talkshow from "../images/event-posters/talkshow.png";
import Challenges from "../images/event-posters/challenges.png";
import Mealthouse from "../images/event-posters/mealthouse.png";
import EventCard from "../components/EventCard";
import { useRef } from "react";

const Events = () => {
  const eventsSection = useRef(null);

  const gotoEventsSection = () => eventsSection.current.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <div className="bg-spurple lg:pt-[20vh] pt-[15vh] text-center relative overflow-hidden">
        <img src={Star} alt="" className="w-[43rem] absolute -left-[16.75rem] top-[5rem] z-0"/> 
        <img src={StarOrange} alt="" className="absolute left-[13rem] top-[43rem] z-0"/>
        <img src={StarOrange} alt="" className="absolute right-[12rem] top-[15rem] z-0"/>
        <img src={Star} alt="" className="w-[43rem] absolute -right-[21rem] top-[22rem] z-0"/>
        <img src={Girl} alt="" className="w-[295px] mx-auto mb-[1.75rem] relative z-10"/>
        <h1 className="text-white text-[4rem] lg:text-[5rem] leading-[5.6rem] font-medium align-middle px-[10vh] lg:px-[70vh] pb-[6vh] relative z-10">Events</h1>
        <p className="text-white pb-[6vh] lg:px-[45vh] px-[5vh] relative z-10">
          Mealth Events merupakan serangkaian acara yang dapat Meddies ikutin nih untuk menambah pengetahuan terkait dengan eating behavior! 
          <br />
          <br />
          Mealth Events biasanya diadakan setiap dua minggu sekali, yang diisi oleh berbagai ahli di bidangnya masing-masing loh!
        </p>
        <button className="bg-green text-black w-[12.5rem] h-[4.25rem] rounded-[20.5rem] font-[500] text-lg hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:font-[600] transition ease-in-out duration-300" onClick={gotoEventsSection}>
            LEARN MORE!
        </button>
        <img src={Wave} alt="" className="w-full pt-[14vh] lg:pt-[28vh]"/>
      </div>

      <div className="bg-white pb-[5rem] text-center">
        <div ref={eventsSection} className="px-[3vh] lg:px-[11vh] pt-[6vh] lg:pt-[12vh]">
          <EventCard poster={Webinar} title="Webinar">
            Gali pengetahuan lebih dalam terkait <i>eating behaviour</i> bersama pembicara-pembicara profesional (psikolog, nutrisionis, dan psikiater) di bidangnya dengan materi materi yang teoritis yang akan dibawakan dengan konsep satu arah dan dilengkapi powerpoint untuk menambah <i>insight</i>-mu!
          </EventCard>
          <EventCard poster={Talkshow} title="Talkshow">
            Tambah pengetahuanmu dan tanyakan keluhanmu seputar <i>eating behaviour</i> lewat pengalaman-pengalaman nyata yang akan dibawakan dengan santai melalui dialog tanpa presentasi oleh para pembicara, dengan diarahkan oleh moderator yang akan membantu untuk mengarahkan alur acara dan menanyakan pertanyaan pada pembicara.
          </EventCard>
          <EventCard poster={Challenges} title="Challenges">
            Ceritakan pengalaman dan kesulitan yang kamu alami kepada orang-orang yang mengalami hal yang sama denganmu. Mealthouse hadir membantumu untuk bisa saling menguatkan, mendukung, dan sadar bahwa kamu tidak melalui semuanya sendirian.
          </EventCard>
          <EventCard poster={Mealthouse} title="Mealthouse">
            Tantang dirimu untuk mengikuti berbagai macam challenge dari mealth yang akan menghadirkan hal-hal praktikal dan menangkan hadiah setiap bulannya!
          </EventCard>
        </div>
      </div>
    </>
  );
};

export default Events;