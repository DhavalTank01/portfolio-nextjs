import type { ICertificateItem } from "@/types";
import Column from "@/components/core/Column";

const CertificateItem = ({ data }: { data: ICertificateItem }) => {
  return (
    <Column classNames="justify-between w-full h-full gap-2">
      <Column classNames="justify-start">
        <p className="text-lg/6 font-semibold">{data.title}</p>
        <p className="text-[var(--textColorLight)] text-base/6 font-medium">
          {data.provider}
        </p>
      </Column>
    </Column>
  );
};

export default CertificateItem;
