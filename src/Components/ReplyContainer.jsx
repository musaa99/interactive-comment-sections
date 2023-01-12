import Replys from "./Replys";

const ReplyContainer = ({
  commentData,
  updateScore,
  addReply,
  editComment,
  deleteComment,
  setDeleteModalState,
}) => {
  return (
    <div className="reply-container">
      {commentData.map((data) => (
        <Replys
          key={data.id}
          commentData={data}
          updateScore={updateScore}
          addNewReply={addReply}
          editComment={editComment}
          deleteComment={deleteComment}
          setDeleteModalState={setDeleteModalState}
        />
      ))}
    </div>
  );
};

export default ReplyContainer;
