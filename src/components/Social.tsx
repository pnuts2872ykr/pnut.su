export default function Social({
  name,
  username,
  icon,
  url,
  className,
}: {
  name: string;
  username: string;
  icon: any;
  url?: string;
  className?: string;
}) {
  return (
    <a
      href={url}
      rel='noopener noreferrer'
      target='_blank'
      className={`flex items-center gap-4 px-4 py-3 ${className}`}
    >
      {icon}
      <div>
        <h4>{name}</h4>
        <p>{username}</p>
      </div>
    </a>
  );
}