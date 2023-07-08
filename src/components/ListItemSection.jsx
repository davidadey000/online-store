import ListItem from "./ListItem";

const ListItemsSection = ({ options }) => {
  return (
    <div className="bg-white rounded-sm m-2 lg:m-0 ">
      <ul className="">
        {options.map(({ icon, title, link }) => (
          <ListItem key={title} link={link} icon={icon} title={title} />
        ))}
      </ul>
    </div>
  );
};

export default ListItemsSection;
