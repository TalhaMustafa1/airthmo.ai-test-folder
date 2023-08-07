import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import loopingWords from "../constants/loopWords";

const TextLoop = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      1200
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="flex item-center pt-2 mt-16 sm:mb-16 md:mb-12">
    <div className="m-auto flex-row inline-flex justify-center">
      <div className="text-wrapper sm:text-3xl md:text-1xl text-[#00000] font-bold"> 
        arithmo.ai is &nbsp;
        </div> 
        <div className="loop-text sm:text-3xl md:text-3xl text-[#0029FF] font-bold">
        <TextTransition springConfig={presets.wobbly}>
          {loopingWords[index % loopingWords.length]}
        </TextTransition>
        </div>       
    </div>
    </div>
  )
}

export default TextLoop;