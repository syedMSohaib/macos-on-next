import { range } from "lodash";
import { cn } from "src/lib/utils";

const homeIcons = [
  {
    title: "Projects - 2020 Projects - 2020",
    icon: "/icons/Folder.svg",
    focus: false,
  },
  {
    title: "Sales - December",
    icon: "/icons/excel.svg",
    focus: false,
  },
  {
    title: "UI kit promo.mp4",
    icon: "/icons/Quick-time.svg",
    focus: false,
  },
  {
    title: "UI kit description",
    icon: "/icons/Text.svg",
    focus: false,
  },
];

export default function Home() {
  return (
    // <div className="flex flex-col gap-2 mt-5 ml-5 justify-left">
    //   {range(20).map((i: number) => (
    //     <div key={i} className="w-[50px] h-[60px]">
    //       <img
    //         className="w-full h-full"
    //         src="https://uploads-ssl.webflow.com/5f7081c044fb7b3321ac260e/5f70853d44d99641ce69afeb_reminders.png"
    //       />
    //     </div>
    //   ))}
    // </div>

    <div className="flex flex-wrap mt-5 ml-5">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {homeIcons.map((item, i: number) => (
          <div
            key={`icon_${i}`}
            className={cn(
              "group cursor-pointer flex line-clamp-2 flex-col items-center"
            )}
          >
            <div
              className={cn(
                "w-[80px] h-[80px]",
                "group-hover:bg-black group-hover:bg-opacity-20",
                "flex justify-center items-center"
              )}
            >
              <img className={cn("w-[60px] h-[60px]")} src={item.icon} />
            </div>

            <p
              className={cn(
                "truncate w-[120px] text-white text-sm mt-1",
                "group-hover:bg-blue-500 group-hover:text-white group-hover:p-1"
              )}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
