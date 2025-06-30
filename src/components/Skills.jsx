import { Badge } from "@/components/ui/badge"
import skillData from "@/assets/skills.json"

export default function Skills() {
    return (
        <div className="space-y-4">
            {Object.entries(skillData).map(([key, values]) => (
                <div key={key}>
                    <h3 className="text-white text-lg font-semibold capitalize my-2">{key}</h3>
                    <div className="flex flex-wrap gap-2">
                        {values.items.map((skill) => (
                            <Badge
                                key={skill}
                                variant="secondary"
                                style={{
                                    backgroundColor: values.color,
                                    color: values.textColor
                                }}
                            >
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}