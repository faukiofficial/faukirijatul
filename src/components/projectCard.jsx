import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectCard = ({ item }) => {
  return (
    <Link
      to={`/project/${item._id}`}
      className="border rounded-md hover:shadow-xl hover:shadow-gray-500 hover:scale-120 transition duration-500 ease-in-out transform hover:rotate-5 w-full h-full bg-white"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full rounded-t-md border-b"
      />
      <div className="p-3">
        <h4 className="text-lg font-semibold">{item.title}</h4>
        <div className="mt-2">
          <b className="font-semibold">Main Stack :</b>
          <div>{item.mainStack?.join(" | ")}</div>
        </div>
      </div>
    </Link>
  );
};

ProjectCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    mainStack: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
