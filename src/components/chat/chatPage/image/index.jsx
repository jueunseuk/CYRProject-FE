import * as BC from "@/common/basic/BasicComponent";

const ImageMessage = ({ message, isMine }) => (
    <BC.Image
      src={message.content}
      alt="chat-image"
      style={{ maxWidth: "200px", borderRadius: "10px" }}
    />
);

export default ImageMessage;
