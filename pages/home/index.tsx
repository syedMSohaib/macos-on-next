import { PreviewIcon } from "@components/PreviewIcon";
import { homeIcons } from "src/data";

export default function Home() {
  return (
    <div className="flex flex-wrap mt-5 ml-5">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {homeIcons.map((item, i: number) => (
          <PreviewIcon key={`icon_${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}
