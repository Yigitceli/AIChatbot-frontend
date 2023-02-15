import React, { Children, ComponentType, FC, useEffect, useMemo, useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import Leftbar from './Leftbar'



const Container = (Component: FC<any>) => () => {
    const [userChat, setUserChat] = useState<string>("");
    const [textAreaH, setTextAreaH] = useState<number>(24);

    const bottomSize = useMemo(() => {
        if(textAreaH === 192 || textAreaH > 192){
            return 192 - 24;
        }
        return textAreaH - 24;
    }, [textAreaH])

    const textAreaSize = useMemo(() => {
        if(textAreaH === 192 || textAreaH > 192){
            return 192;
        }
        return textAreaH;
    }, [textAreaH])


    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserChat(e.target.value);
        let scHeight = (e.target as HTMLTextAreaElement).scrollHeight;
        setTextAreaH(scHeight);

    }

    console.log(bottomSize)


    return (
        <div className='w-full flex h-full overflow-hidden'>
            <Leftbar />
            <div className='bg-[#343541] w-full h-full flex flex-col p-4'>
                <Component />
                <form className='bg-[#343541] w-full h-[30rem] flex flex-col items-center justify-end gap-4 '>
                    <div style={{ bottom: `${bottomSize}px` }} className='w-full max-h-24 flex bg-[#40414f] p-2 relative md:w-[50rem] shadow-lg overflow-y-auto text-white items-center'>
                        <textarea style={{ height: `${textAreaSize}px` }} onChange={changeHandler} className={`w-full bg-transparent overflow-hidden focus:outline-none resize-none`} value={userChat} />
                        <button><PaperAirplaneIcon className='w-4'/></button>
                    </div>
                    <span className='text-white text-xs text-center'>ChatGPT Feb 13 Version. Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</span>
                </form>
            </div>
        </div>
    )
}

export default Container