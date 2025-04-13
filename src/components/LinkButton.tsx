import githubIcon from "@/assets/png/githubIcon.png";
import linkIcon from "@/assets/png/linkIcon.png";
import IconCTA from "@/components/button/iconCTA";

type LinkButtonProps = {
  githubLink: string;
  link: string;
  isLinked: boolean;
};

export default function LinkButton({
  githubLink,
  link,
  isLinked,
}: LinkButtonProps) {
  return (
    <div className="flex gap-6">
      {githubLink && (
        <IconCTA link={githubLink} imageUrl={githubIcon} altText="GitHub" />
      )}
      {isLinked && link && (
        <IconCTA link={link} imageUrl={linkIcon} altText="Link" />
      )}
    </div>
  );
}
