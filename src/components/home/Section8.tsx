import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import GridBox from "@/components/core/GridBox";
import CertificateItem from "./ui/CertificateItem";
import certificates from "@/data/certificates";
import CardBox from "@/components/core/CardBox";

const HomeSection8 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Certificates</SectionTitle>

        <GridBox classNames="justify-items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mt-16 gap-4">
          {certificates.map((cert, index) => {
            return (
              <CardBox 
                key={`certificate-${index}`}
                classNames="p-6 items-start justify-start rounded-[var(--borderRadius)] border border-[rgba(255,255,255,0.10)] dark:bg-[var(--primaryColor5)] bg-[var(--primaryColor5)] shadow-[2px_4px_16px_0px_rgba(100,100,100,0.06)_inset] w-full"
              >
                <CertificateItem data={cert} />
              </CardBox>
            );
          })}
        </GridBox>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection8;
