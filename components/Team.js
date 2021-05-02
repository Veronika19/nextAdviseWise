import SocialIcons from './socialProfile';
import Image from 'next/image';

import TeamData from '../teams.json';

export default function Team() {
  const teamData = TeamData.map((team) => {
    return (
      <div key={team.name} className="flex flex-wrap -m-4">
        <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-1/3 md:w-1/3 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center inset-0 rounded-xl"
              width={350}
              height={350}
              alt="hero"
              src={team.image}
            />
          </div>
          <div className="lg:flex-grow md:w-2/3 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-lg  mb-2 font-medium text-gray-900">
              {team.name}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="235"
              height="2"
              viewBox="90 0 110 2"
              fill="none"
            >
              <rect width="435" height="2" fill="#d35063"></rect>
            </svg>
            <h2 className="text-gray-500 mb-3 font-bold">{team.designation}</h2>
            <p className="mb-4 leading-relaxed">{team.desc1}</p>
            <p className="mb-4 leading-relaxed">{team.desc2}</p>
            <p className="mb-4 leading-relaxed">{team.desc3}</p>
            <div className="flex justify-center">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{teamData}</>;
}
