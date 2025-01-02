import "./MessageError.css";

const MessageError = ({ error, type }) => {
  return (
    <div className={`Message_content ${type}`}>
      <div className="Message-conteiner">
        <p>{error}</p>
      </div>
    </div>
  );
};

export default MessageError;
