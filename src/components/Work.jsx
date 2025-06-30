import workData from "@/assets/work.json"

export default function Work() {


    // Object.values(workData).map((job, i) => ())
    // gets each each job from work.json

    // add logo for each job

    // make elements for all the shit

    // make a badge for each of the technologies

    

    return (
        <div className="space-y-8">
            {Object.values(workData).map((job, idx) => (
                <div key={job.company + job.title + idx} className="bg-gray-900 rounded-lg p-4 shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-white">{job.title}</h3>
                            <p className="text-gray-300">{job.company} &middot; {job.location}</p>
                        </div>
                        <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                            <span>{job.startDate} – {job.endDate}</span>
                        </div>
                    </div>
                    <p className="text-gray-200 mt-2">{job.description}</p>
                    {job.responsibilities && job.responsibilities.length > 0 && (
                        <ul className="list-disc list-inside mt-2 text-gray-300">
                            {job.responsibilities.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    )}
                    {job.technologies && job.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {job.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-gray-800 text-gray-200 px-2 py-1 rounded text-xs font-mono"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}