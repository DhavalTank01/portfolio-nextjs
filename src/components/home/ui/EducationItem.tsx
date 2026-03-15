import type { IEducationItem } from "@/types";
import Column from "@/components/core/Column";

const EducationItem = ({ data }: { data: IEducationItem }) => {
  return (
    <Column classNames="justify-between w-full h-full gap-2">
      <Column classNames="justify-start">
        <p className="text-lg/6 font-semibold">{data.degree}</p>

        <p className="text-[var(--textColorLight)] text-base/6 font-medium">
          {data.institution}
        </p>
        <p className="text-[var(--textColorLight)] text-sm/6 font-normal">
          {data.location}
        </p>
      </Column>
    </Column>
  );
};

export default EducationItem;
