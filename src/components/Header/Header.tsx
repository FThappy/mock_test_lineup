import React from 'react'
import { Button } from '../ui/button';
import { BUTTON_HEADER } from '@/common/constain';
import type { TIME_FRAME_TYPE } from '@/lib/typeCommon';

type Props = {
  handleChangeTimeFrame: (value: TIME_FRAME_TYPE) => void;
};

const Header = (props: Props) => {
  const { handleChangeTimeFrame } = props;
  return (
    <section className="w-full flex justify-end gap-2 py-2">{BUTTON_HEADER.map((item)=>{
        return <Button key={item.label} className='cursor-pointer' onClick={(e)=>{
            e.preventDefault()
            handleChangeTimeFrame(item.value as TIME_FRAME_TYPE);
        }}>{item.label}</Button>
    })}</section>
  );
}

export default Header