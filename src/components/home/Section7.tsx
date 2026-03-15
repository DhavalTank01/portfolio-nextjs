import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { Timeline } from "@/components/common/timeline";
import EducationItem from "./ui/EducationItem";
import education from "@/data/education";

const HomeSection7 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] min-h-screen items-center justify-center dark:bg-dot-white/[0.15] bg-dot-white/[0.15]"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Education</SectionTitle>

        <Timeline
          data={education.map((edu, i) => ({
            title: edu.startDate + " - " + (edu.endDate || "Present"),
            content: <EducationItem key={`education-${i}`} data={edu} />,
          }))}
        />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection7;
