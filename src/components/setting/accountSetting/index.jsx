import * as S from "./styles";
import * as BC from "@/common/basic/BasicComponent";
import * as U from "@/apis/user";
import { useState } from "react";
import SeccessionConfirm from "@/components/modal/secessionConfirm";

const AccountSetting = () => {
    const [openSecessionModal, setOpenSecessionModal] = useState(false);

    return (
        <S.Wrapper>
            {openSecessionModal && <SeccessionConfirm onClose={() => setOpenSecessionModal(false)} />}
            <S.Button onClick={() => setOpenSecessionModal(true)}>회원 탈퇴</S.Button>
        </S.Wrapper>
    );
};

export default AccountSetting;