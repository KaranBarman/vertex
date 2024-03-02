import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  children: React.ReactNode;
  toolTip: string;
}

const Skills = ({ children, toolTip }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="relative flex NextJS justify-center shadow-lg dark:bg-gray-950 bg-opacity-45 rounded-full border-4 dark:border-zinc-800 w-[4rem] p-2 md:hover:scale-[1.125] transition-transform ease-in-out duration-300">
            {children}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{toolTip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Skills;
