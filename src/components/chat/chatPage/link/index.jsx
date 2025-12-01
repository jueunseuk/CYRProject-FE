import * as S from "./styles.js";
import * as BC from "@/common/basic/BasicComponent";
import default_profile from "@/assets/image/default_profile.jpg";
import { formatDate } from "@/util/dateFormatter.js";

const LinkMessage = ({ message, isMine }) => {
  return (
    <S.TextMessageWrapper $isMine={isMine}>
        {!isMine && <BC.Image src={message.profileUrl || default_profile} $w={"30px"} $h={"30px"} style={{objectFit: "cover", borderRadius: "30px"}}/>}
        <S.ContentWrapper $isMine={isMine}>
            {!isMine && <BC.Text $color={message.color}>{message.nickname}</BC.Text>}
            <BC.HorizontalWrapper $ai={"flex-end"} $gap={"3px"} style={{maxWidth: "85%", flexDirection: isMine ? "row-reverse" : "row"}}>
              <BC.LinkText title={message.content} href={message.content} target="_blank" $size="13px" style={{wordBreak: "break-word", boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)", padding: "8px 12px", backgroundColor: isMine ? "#d7f1f9" : "#f1f1f1", borderRadius: "10px", cursor: "pointer"}}>
                  링크 이동하기
              </BC.LinkText>
              <BC.Text $size="10px" $color={"#878787"}>{formatDate(message.createdAt, 8)}</BC.Text>
            </BC.HorizontalWrapper>
        </S.ContentWrapper>
    </S.TextMessageWrapper>
  );
};

export default LinkMessage;
