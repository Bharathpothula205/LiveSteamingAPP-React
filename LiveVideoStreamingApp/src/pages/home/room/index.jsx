import React from 'react'
import {useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

const RoomPage = () => {
    const {roomId}=useParams();
    const myMeeting= async(element)=>{
        const appID =1226501373;
        const serverSecret = "06c0ff5f4606afb93964f6cc57d297c5";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),'bharath')
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container:element,
            scnerio:{
                mode:ZegoUIKitPrebuilt.VideoConference,
            },
        });
    };
  return (
    <div className='room-page'>
     <div ref={myMeeting}/>
    </div>
  )
}

export default RoomPage
