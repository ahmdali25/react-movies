import PropTypes from "prop-types";
import { WatchIcon, PlayIcon } from "./Icons";

export default function Button({ icon, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 flex h-12 w-auto content-center items-center gap-2 rounded-full bg-darkBlue px-8 text-neutral hover:bg-blue"
    >
      {icon === "play" ? <PlayIcon /> : <WatchIcon />}
      <span>{text}</span>
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
