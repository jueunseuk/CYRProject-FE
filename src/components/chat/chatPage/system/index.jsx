import * as BC from "@/common/basic/BasicComponent";

const SystemMessage = ({ message }) => (
    <BC.Text
        $size="13px"
        style={{
            backgroundColor: "#eee",
            padding: "4px 10px",
            borderRadius: "20px",
            color: "#878787",
            alignSelf: "center",
            margin: "10px 0"
        }}
    >
        {message.content}
    </BC.Text>
);

export default SystemMessage;
