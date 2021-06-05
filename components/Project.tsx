import Image from 'next/image';
import React from 'react';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

interface ProjectProps {
  name: string;
  description: string;
  img: string;
  alt: string;
  technologies: string[];
  vision?: string;
  github: string;
  href?: string;
}

const Project: React.FC<ProjectProps> = ({
  name,
  description,
  img,
  technologies,
  vision,
  github,
  alt,
  href,
}) => {
  return (
    <>
      <div className="flex gap-8 lg:flex-row">
        <div className="cursor-pointer flex justify-center w-full h-full transform h-64 bg-blue-400 w-1/5 transition duration-500 hover:scale-125">
          <Image
            className="rounded-2xl flex-1"
            src={img}
            quality={100}
            layout="intrinsic"
            width={800}
            height={600}
            alt={alt}
          />
        </div>
      </div>
    </>

  );
};

export default Project;
