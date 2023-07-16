import React from "react";
import { cn } from "src/lib/utils";

const dockElements = [
  {
    name: "Finder",
    img: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853981255cc36b3a37af_finder.png",
  },
  {
    name: "Siri",
    img: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ff3bafbac60495771_siri.png",
  },
  {
    name: "LaunchPad",
    img: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853943597517f128b9b4_launchpad.png",
  },
  {
    name: "Contacts",
    img: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853743597518c528b9b3_contacts.png",
  },
  {
    name: "Notes",
    img: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c849ec3735b52cef9_notes.png",
  },
  {
    name: "Reminders",
    img: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853d44d99641ce69afeb_reminders.png",
  },
  {
    name: "Photos",
    img: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853c55558a2e1192ee09_photos.png",
  },
  {
    name: "Messages",
    img: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853a55558a68e192ee08_messages.png",
  },
  {
    name: "FaceTime",
    img: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708537f18e2cb27247c904_facetime.png",
  },
  {
    name: "Music",
    img: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ba0782d6ff2aca6b3_music.png",
  },
  {
    name: "Podcasts",
    img: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853cc718ba9ede6888f9_podcasts.png",
  },
  {
    name: "TV",
    img: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f708540dd82638d7b8eda70_tv.png",
  },
  {
    name: "App Store",
    img: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853270b5e2ccfd795b49_appstore.png",
  },
  {
    name: "Safari",
    img: "https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853ddd826358438eda6d_safari.png",
  },
  {
    name: "Bin",
    img: "https://findicons.com/files/icons/569/longhorn_objects/128/trash.png",
  },
];

export const Dock = () => {
  return (
    <div>
      <div className="w-auto h-[60px]  flex justify-center absolute -translate-x-2/4 rounded-2xl left-2/4 bottom-5">
        <div className="w-auto h-full bg-white bg-opacity-20 border-gray-300 flex items-center justify-center backdrop-blur-[13px] p-[3px] rounded-2xl">
          {dockElements.map((element, index) => {
            return (
              <li
                className={cn(
                  `group li-${index + 1}`,
                  `flex items-center justify-center w-[50px] h-[50px] align-bottom transition-[0.2s] origin-[50%_100%]`,
                  "hover:mx-[13px] hover:my-0"
                )}
              >
                <div
                  className={cn(
                    "invisible group-hover:visible",
                    "absolute top-[-60px] text-[rgba(255,255,255,0.9)] h-2.5 flex items-center justify-center invisible px-[15px] py-3.5 rounded-[5px]",
                    "bg-[#00000080] text-xs font-medium",
                    "after:content-[''] after:absolute after:w-0 after:h-0 after:backdrop-blur-[13px]",
                    "after:border-t-[10px] after:border-t-[rgba(0,0,0,0.5)] after:border-x-[10px] after:border-x-transparent after:border-solid after:-bottom-2.5"
                  )}
                >
                  {element.name}
                </div>
                <img
                  className="group-hover:scale-125 group-hover:-translate-y-4 w-full h-full object-cover transition-[0.2s]"
                  src={element.img}
                  alt=""
                />
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};
