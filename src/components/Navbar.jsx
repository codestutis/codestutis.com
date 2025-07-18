import { Dock, DockIcon } from "@/components/magicui/dock";
import { HomeIcon, AcademicCapIcon, BriefcaseIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { Separator } from "@/components/ui/separator"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Navbar() {
  return (
    <nav className="fixed bottom-2 left-1/2 transform -translate-x-1/2 max-w-full">
      <Dock
        direction="middle"
        className="bg-gray-900 border border-gray-800 shadow-lg rounded-4xl px-4 py-2 max-w-full overflow-x-auto overflow-y-hidden"
      >
        <DockIcon className="p-2">
            <Tooltip>
                <TooltipTrigger asChild>
                    <a href="#top" aria-label="Home">
                        <HomeIcon className="w-6 h-6 text-white" />
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Home</p>
                </TooltipContent>
            </Tooltip>
        </DockIcon>
        <DockIcon>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a href="#work" aria-label="Work experience">
                        <BriefcaseIcon className="w-6 h-6 text-white"></BriefcaseIcon>
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Work Experience</p>
                </TooltipContent>
            </Tooltip>
        </DockIcon>
        <DockIcon>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a href="#education" aria-label="Eduacation">
                        <AcademicCapIcon className="w-6 h-6 text-white"></AcademicCapIcon>
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Education</p>
                </TooltipContent>
            </Tooltip>
        </DockIcon>
        <DockIcon>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a href="#projects" aria-label="Projects">
                        <WrenchScrewdriverIcon className="w-6 h-6 text-white"></WrenchScrewdriverIcon>
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Projects</p>
                </TooltipContent>
            </Tooltip>
        </DockIcon>
        <Separator orientation="vertical" className="bg-gray-800" />
        <DockIcon>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a href="https://github.com/codestutis" target="_blank" rel="noopener noreferrer" aria-label="Github">
                        <FiGithub className="w-6 h-6 text-white" />
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Github</p>
                </TooltipContent>
            </Tooltip>
        </DockIcon>
        <DockIcon>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a href="https://www.linkedin.com/in/kestutis-biskis/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                        <FiLinkedin className="w-6 h-6 text-white" />
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Linkedin</p>
                </TooltipContent>
            </Tooltip>
        </DockIcon>
        <DockIcon>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a href="mailto:kestutis.biskis@codestutis.com" target="_blank" rel="noopener noreferrer" aria-label="Email me">
                        <FiMail className="w-6 h-6 text-white" />
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Email</p>
                </TooltipContent>
            </Tooltip>
        </DockIcon>
      </Dock>
    </nav>
  );
}
