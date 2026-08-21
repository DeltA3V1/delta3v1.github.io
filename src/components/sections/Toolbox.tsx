import { Chip, ChipGroup } from "../ui/Chip";

function ToolboxGroup({ header, chips }: { header: string; chips: { text: string; proficiency?: 'beginner' | 'intermediate' | 'advanced'; }[] }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-4xl font-inter py-2 font-medium">{header}</h2>
      <ChipGroup chips={chips} />
      <svg
        className="w-40 h-1 text-secondary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 160 2"
      >
        <path d="M0 2H160" stroke-width="2"/>
      </svg>
    </div>
  );
}

export function Toolbox() {
  return (
    <section id="toolbox" className="flex flex-col items-center justify-between bg-dominant transition-colors duration-300 gap-16">
      <ToolboxGroup
        header="[languages]"
        chips={[
          { text: "HTML", proficiency: "intermediate" },
          { text: "CSS", proficiency: "intermediate" },
          { text: "Java", proficiency: "advanced" },
          { text: "Python", proficiency: "advanced" },
          { text: "JavaScript", proficiency: "intermediate" },
          { text: "TypeScript", proficiency: "intermediate" },
          { text: "Lua", proficiency: "intermediate" },
        ]}
      />
      <ToolboxGroup
        header="[tools]"
        chips={[
          { text: "GitHub", proficiency: "intermediate" },
          { text: "VSCode", proficiency: "intermediate" },
          { text: "Cursor", proficiency: "intermediate" },
          { text: "Figma", proficiency: "intermediate" },
        ]}
      />
      <ToolboxGroup
        header="[frameworks]"
        chips={[
          { text: "React", proficiency: "intermediate" },
          { text: "Tailwind", proficiency: "intermediate" },
          { text: "Vite", proficiency: "intermediate" },
        ]}
      />
      <ToolboxGroup
        header="[exploring]"
        chips={[
          { text: "Data Science", proficiency: "beginner" },
          { text: "Blender", proficiency: "beginner" },
          { text: "Cybersecurity", proficiency: "beginner" },
          { text: "AI", proficiency: "beginner" },
        ]}
      />
    </section>
  )
}