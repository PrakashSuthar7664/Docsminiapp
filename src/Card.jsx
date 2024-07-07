import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { RiProgress3Line } from "react-icons/ri";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({ data , reference }) => {
  return (
    <motion.div  drag dragConstraints={reference } whileDrag={{scale:1.1}} dragElastic={.1}  dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }} className='relative bg-zinc-900/60 w-48 h-60 rounded-3xl p-5 text-white overflow-hidden'>
      <FaRegFileAlt />
      <p className='mt-5 font-semibold leading-tight'>{data.title}</p>
      <div className='absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between mb-3 px-5'>
          <h5>{data.fileSize}</h5>
          <span>
            {data.close ? <IoIosClose /> : <CiSaveDown2 />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`py-2 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} w-full items-center flex justify-center gap-2`}>
            <h3 className='text-sm'>{data.tag.tagTitle}</h3>
            <RiProgress3Line />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
