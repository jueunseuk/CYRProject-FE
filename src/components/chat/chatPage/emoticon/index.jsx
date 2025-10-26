import * as S from "./styles.js";
import * as BC from "@/common/basic/BasicComponent";
import { formatDate } from "@/util/dateFormatter";

const EmoticonMessage = ({ message, isMine }) => (
    <S.TextMessageWrapper $isMine={isMine}>
          {!isMine && <BC.Image src={message.profileUrl} $w={"30px"} $h={"30px"} style={{objectFit: "cover", borderRadius: "30px"}}/>}
          <S.ContentWrapper $isMine={isMine}>
              {!isMine && <BC.Text>{message.nickname}</BC.Text>}
              <BC.HorizontalWrapper $ai={"flex-end"} $gap={"3px"} style={{maxWidth: "85%", flexDirection: isMine ? "row-reverse" : "row"}}>
                  <BC.Image
                      src={message.content}
                      alt="chat-image"
                      style={{ width: "120px", borderRadius: "10px" }}
                      />
                  <BC.Text $size="10px" $color={"#878787"}>{formatDate(message.createdAt, 8)}</BC.Text>
              </BC.HorizontalWrapper>
          </S.ContentWrapper>
    </S.TextMessageWrapper>
);

export default EmoticonMessage;
