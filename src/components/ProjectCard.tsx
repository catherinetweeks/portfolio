type ProjectCardProps = {
  image: string;
  type: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export function ProjectCard({
  image,
  type,
  title,
  description,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-white overflow-hidden max-w-sm w-full transition hover:-translate-y-1">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >

      {/* image */}
      <img src={image} alt={title} className="w-full h-50 object-cover" />

      {/* content */}
      <div className="p-4">
        <p className="text-sm text-gray-500">{type}</p>
        <h3 className="text-lg font-semibold mt-1">{title}</h3>
        <p className="text-gray-700 text-sm mt-2">{description}</p>

        {/* tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
    </div>
  );
}