import Link from "./Link";

const Sublink = ({ links, page }) => {
  return (
    <article>
      <h4>{page}</h4>
      <div className="sidebar-sublinks">
        {links.map((link, index) => {
          const { url, icon, label } = link;
          return <Link key={index} url={url} icon={icon} label={label} />
        })}
      </div>
    </article>
  );
};

export default Sublink;
