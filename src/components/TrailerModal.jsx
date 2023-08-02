import PropTypes from "prop-types";

export default function TrailerModal({ id }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 flex h-screen w-full items-center justify-center bg-black">
      <div className="h-1/5 shadow-lg md:h-1/3 md:w-2/3 xl:h-4/5 xl:w-4/5">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="autoplay; encrypted-media;"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

TrailerModal.propTypes = {
  id: PropTypes.string.isRequired,
};
