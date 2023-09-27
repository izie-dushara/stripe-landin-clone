const SubMenuLink = ({ label, icon, url }) => {
  return (
    <a href={url}>
      {icon}
      {label}
    </a>
  )
};

export default SubMenuLink;
