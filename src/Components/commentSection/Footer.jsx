import CommentBtn from "./CommentBtn";
import Votes from "./Votes";

const Footer = ({
  updateScore,
  commentData,
  setReplying,
  setDeleting,
  setDeleteModalState,
  setEditing,
  type,
}) => {
  return (
    <div className="comment--footer">
      <Votes
        updateScore={updateScore}
        commentData={commentData}
        type={type}
      />

      <CommentBtn
        commentData={commentData}
        setReplying={setReplying}
        setDeleting={setDeleting}
        setDeleteModalState={setDeleteModalState}
        setEditing={setEditing}
      />
    </div>
  );
};

export default Footer;
