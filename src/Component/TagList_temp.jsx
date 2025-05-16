import React from 'react';
import { Button } from './Button';

const TagList = () => {
  return (
    <div className="flex justify-end w-full items-start  px-5">
      <div className="grid grid-cols-2 gap-x-1 gap-y-2 w-fit  p-10 border border-emerald-600  ">
        {
          Array.from({ length: 9 }, (_, index) => (
            <Button
              key={index}
              consoleTxt="Button clicked!"
              btnTxt="Click Tag BTN"
            />
          ))
        }
      </div>
    </div>
  );
};

export default TagList;

