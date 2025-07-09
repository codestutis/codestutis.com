export default function Experience({
  title,
  organization,
  location,
  startDate,
  endDate,
  description,
  responsibilities = [],
  technologies = []
}) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 shadow my-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h4 className="text-xl font-bold text-white">{title}</h4>
          <p className="text-gray-300">{organization}{location ? ` · ${location}` : ""}</p>
        </div>
        <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
          <span>{startDate} – {endDate}</span>
        </div>
      </div>
      <p className="text-gray-200 mt-2">{description}</p>
      {responsibilities.length > 0 && (
        <ul className="list-disc list-inside mt-2 text-gray-300">
          {responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech) => (
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
  );
}