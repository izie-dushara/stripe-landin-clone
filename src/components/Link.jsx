const Link = ({ url, icon, label }) => {
  return (
    <a href={url}
    >
      {icon}
      {label}
    </a>
  )
};

export default Link;
