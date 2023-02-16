import React, { Children, ComponentType, FC, useEffect, useMemo, useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import Leftbar from './Leftbar'



const Container = (Component: FC<any>) => () => {
    const [userChat, setUserChat] = useState<string>("");
    const [textAreaH, setTextAreaH] = useState<number>(24);


    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserChat(e.target.value);
        let scHeight = (e.target as HTMLTextAreaElement).scrollHeight;
        setTextAreaH(scHeight);

    }

    const textAreaSize = useMemo(() => {
        if(textAreaH === 192 || textAreaH > 192){
            return 192;
        }
        return textAreaH;
    }, [textAreaH])


    return (
        <div className='w-full flex h-full overflow-hidden'>
            <Leftbar />
            <div className='bg-[#343541] w-full h-full flex flex-col md:p-4 '>
                <Component setUserChat={setUserChat}/>
                <form className='bg-[#343541] w-full max-h-[20rem] flex flex-col items-center justify-end gap-4 md:border-0 border-t-2 border-[#40414f] pt-4 md:py-0'>
                    <div className={`rounded-md w-full max-h-full flex bg-[#40414f] p-2 relative md:w-[50rem] shadow-lg text-white items-${textAreaSize > 24 ? 'end' : 'center'}`}>
                        <textarea style={{ height: `${textAreaSize}px` }} onChange={changeHandler} className={`w-full overflow-y-auto bg-transparent focus:outline-none resize-none pr-5`} value={userChat} />
                        <button className='absolute bottom-3 right-5'><PaperAirplaneIcon className='w-4' /></button>
                    </div>
                    <span className='text-white text-xs text-center'>ChatGPT Feb 13 Version. Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</span>
                </form>
            </div>
        </div>
    )
}

export default Container