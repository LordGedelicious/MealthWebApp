import React, { FC } from 'react';

type Props = {
	photo: string;
  name: string;
  title: string;
  className?: string;
};

const TeamProfile: FC<Props> = ({ photo, name, title, className }) => {
  return (
    <div className={`${className} text-center text-white px-[2vw] pt-6 pb-12`}>
      <img src={photo} alt={`Foto ${name}`} className="rounded-full w-[15vw] h-[15vw] object-cover mb-8" />
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
};

TeamProfile.defaultProps = {
  className: '',
};

export default TeamProfile;