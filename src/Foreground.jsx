import React, { useRef } from 'react';
import Card from './Card';

const Foreground = () => {

  const ref = useRef(null) ; 
  const data = [
    {
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Downloading...", tagColor: "green" }
    },
   
    {
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Downloading...", tagColor: "green" }
    },
    {
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".4mb",
      close: false,
      tag: { isOpen: true, tagTitle: "uploading...", tagColor: "blue" }
    },
    // Add more items as needed
  ];

  return (
    <div className='fixed h-full w-full z-[3] p-5 flex  gap-3 flex-wrap ' ref = {ref}>
      {data.map((item, index) => (
        <Card key={index} data={item} reference = {ref}/>
      ))}
    </div>
  );
}

export default Foreground;
