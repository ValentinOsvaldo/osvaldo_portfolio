interface Props {
  title: string;
  company: string;
  time: string;
  type: string;
  stack: string[];
  tasks: string[];
  url: string;
}

export const ExperienceCard: React.FC<Props> = (props) => {
  const { company, type, stack, tasks, time, title, url } = props;

  return (
    <div className="job-card">
      <h4 className="font-semibold text-2xl text-teal-500">{title}</h4>
      <h5 className="text-lg font-medium text-gray-100">
        <a href={ url } target="_blank" rel="noopener noreferrer" className="hover:underline">
          {company}
        </a>{' '}
        - {time}
      </h5>
      <span className="text-gray-300">{type}</span>
      <p className="font-medium text-gray-200">Technologies: {stack.join(' - ')}</p>
      <ul className="list-disc mt-2 pl-6 marker:text-teal-300">
        {tasks.map((task) => (
          <li key={task} className="text-gray-300">{task}</li>
        ))}
      </ul>
    </div>
  );
};
