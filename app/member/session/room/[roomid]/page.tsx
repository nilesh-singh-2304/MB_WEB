"use client";
import useUser from "@/hooks/useUser";
import React from "react";
import { v4 as uuid } from "uuid";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = ({ params }: { params: { roomid: string } }) => {
  const { fullName } = useUser();
  const roomID = params.roomid;

  let myMeeting: any = async (element: any) => {
    // generate Kit Token
    const appID = parseInt(process.env.NEXT_PUBLIC_ZEGO_APP_ID!);
    const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET!;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      uuid(),
      fullName || "user" + Date.now(),
      3600
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Shareable Link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <>
      
      <div className="sm:ml-64">
        <div className="p-4 w-full">
          <div className="flex justify-center items-center p-4 h-150 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div
        className="scale-150"
        ref={myMeeting}
      ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;
