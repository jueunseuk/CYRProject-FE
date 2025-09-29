import * as S from "./styles";

const Policy = () => {
    return (
        <>
            <S.Wrapper>
                <S.Title>개인정보 보호정책</S.Title>
                <S.Text>본 커뮤니티는 개인정보 보호법 제30조에 따라 이용자의 개인정보를 보호하고, 이와 관련된 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같은 개인정보 보호정책을 수립하여 공개합니다.</S.Text>
                <S.Blank />
                
                <S.SubTitle>제1조 (개인정보 처리 목적)</S.SubTitle>
                <S.Text>본 커뮤니티는 다음의 목적을 위하여 개인정보를 처리하며, 목적 이외의 용도로는 사용하지 않습니다. 목적 변경 시 개인정보 보호법 제18조에 따라 별도 동의를 받을 예정입니다.</S.Text>
                <S.List>
                    <S.FirstListItem>a. 회원가입 및 관리</S.FirstListItem>
                    <S.SecondListItem>본인 확인, 회원제 서비스 제공, 회원 관리, 부정이용 방지, 고지사항 전달을 위해 개인정보를 처리합니다.</S.SecondListItem>
                    <S.FirstListItem>b. 서비스 제공</S.FirstListItem>
                    <S.SecondListItem>서비스 이용, 콘텐츠 제공, 맞춤형 서비스 제공 및 결제 처리를 위해 개인정보를 처리합니다.</S.SecondListItem>
                    <S.FirstListItem>c. 민원 처리</S.FirstListItem>
                    <S.SecondListItem>민원인의 신원 확인, 민원 내용 확인, 처리 결과 통보 등을 위해 개인정보를 처리합니다.</S.SecondListItem>
                </S.List>
                <S.Blank />

                <S.SubTitle>제2조 (개인정보 처리 및 보유 기간)</S.SubTitle>
                <S.Text>본 커뮤니티는 법령에 따른 개인정보 보유 기간 또는 정보 주체의 동의에 따른 기간 내에서만 개인정보를 처리 및 보유합니다.</S.Text>
                <S.List>
                    <S.FirstListItem>a. 회원가입 및 관리</S.FirstListItem>
                    <S.SecondListItem>회원탈퇴 시까지 보관하되, 수사가 진행 중인 경우 해당 사건 종료 시까지 보관</S.SecondListItem>
                    <S.FirstListItem>b. 서비스 제공</S.FirstListItem>
                    <S.SecondListItem>「전자상거래법」에 따라 계약 관련 기록은 5년, 소비자 불만 처리 기록은 3년간 보관</S.SecondListItem>
                </S.List>
                <S.Blank />
                
                <S.SubTitle>제3조 (이용자의 권리와 행사 방법)</S.SubTitle>
                <S.Text>이용자는 언제든지 개인정보의 열람, 정정, 삭제, 처리정지 요구 권리를 행사할 수 있으며, 이메일을 통해 신청할 수 있습니다. 본 커뮤니티는 이용자의 요구에 대해 즉각 조치하겠습니다.</S.Text>
                <S.Blank />

                <S.SubTitle>제4조 (처리하는 개인정보 항목)</S.SubTitle>
                <S.Text>본 커뮤니티는 법령에 따른 개인정보 보유 기간 또는 정보 주체의 동의에 따른 기간 내에서만 개인정보를 처리 및 보유합니다.</S.Text>
                <S.List>
                    <S.FirstListItem>a. 회원가입 및 관리</S.FirstListItem>
                    <S.SecondListItem>1. 필수항목</S.SecondListItem>
                    <S.ThirdListItem>이름, 이메일, 소셜 로그인 식별번호</S.ThirdListItem>
                    <S.SecondListItem>2. 선택항목</S.SecondListItem>
                    <S.ThirdListItem>프로필 사진, 나이, 성별</S.ThirdListItem>
                    <S.FirstListItem>b. 서비스 이용 과정에서 자동 수집</S.FirstListItem>
                    <S.SecondListItem>IP 주소, 쿠키, 접속 기록, 서비스 이용 기록</S.SecondListItem>
                </S.List>
                <S.Blank />

                <S.SubTitle>제5조 (개인정보 파기 절차 및 방법)</S.SubTitle>
                <S.Text>본 커뮤니티는 개인정보 보유 기간 경과 또는 처리 목적 달성 시 지체 없이 해당 정보를 파기합니다. 전자적 파일은 복구 불가능한 방법으로 삭제하며, 종이 문서는 파쇄하거나 소각합니다.</S.Text>
                <S.Blank />

                <S.SubTitle>제6조 (개인정보 보호를 위한 안전성 확보조치)</S.SubTitle>
                <S.Text>본 커뮤니티는 개인정보의 안전성을 확보하기 위하여 다음과 같은 조치를 하고 있습니다.</S.Text>
                <S.List>
                    <S.FirstListItem>a. 관리적 조치</S.FirstListItem>
                    <S.SecondListItem>내부 관리 계획 수립, 직원 교육 시행</S.SecondListItem>
                    <S.FirstListItem>b. 기술적 조치</S.FirstListItem>
                    <S.SecondListItem>DB 및 Application 접근 권한 관리</S.SecondListItem>
                    <S.FirstListItem>c. 물리적 조치</S.FirstListItem>
                    <S.SecondListItem>데이터 보관 시설 접근 통제</S.SecondListItem>
                </S.List>
                <S.Blank />

                <S.SubTitle>제7조 (쿠키 사용 및 거부)</S.SubTitle>
                <S.Text>본 커뮤니티는 맞춤형 서비스 제공을 위해 쿠키를 사용하며, 사용자는 웹 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다. 다만, 쿠키 거부 시 서비스 이용에 다수 제한이 발생할 수 있습니다.</S.Text>
                <S.Blank />

                <S.SubTitle>제8조 (개인정보 보호책임의 한계)</S.SubTitle>
                <S.List>
                    <S.FirstListItem>a. 책임의 한계</S.FirstListItem>
                    <S.SecondListItem>1. 본 사이트는 링크, 다운로드, 광고 등을 포함하여 본 사이트에 포함되어 있거나, 본 사이트를 통해 배포, 전송되거나, 본 사이트에 포함되어 있는 서비스로부터 접근되는 정보(이하 "자료")의 정확성이나 신뢰성에 대해 어떠한 보증도 하지 않습니다.</S.SecondListItem>
                    <S.SecondListItem>2. 귀하는 자료에 대한 신뢰 여부가 전적으로 귀하의 책임임을 인정합니다.</S.SecondListItem>
                    <S.SecondListItem>3. 사이트는 자료 및 서비스의 내용을 수정할 의무를 지지 않으나, 필요에 따라 개선할 수는 있습니다.</S.SecondListItem>
                    <S.SecondListItem>4. 사이트는 자료와 서비스를 "있는 그대로" 제공하며, 서비스 또는 기타 자료 및 제품과 관련하여 상품성, 특정 목적에의 적합성에 대한 보증을 포함하되 이에 제한되지 않고 모든 명시적 또는 묵시적인 보증을 명시적으로 부인합니다. 어떠한 경우에도 서비스, 자료 및 제품과 관련하여 직접, 간접, 부수적, 징벌적, 파생적인 손해에 대해서 책임을 지지 않습니다.</S.SecondListItem>
                    <S.SecondListItem>5. 본 사이트는 지적재산권을 포함한 타인의 권리를 존중하며, 사용자들도 마찬가지로 행동해 주시기를 기대합니다. 본 사이트는 필요한 경우 그 재량에 의해 타인의 권리를 침해하거나 위반하는 사용자에 대하여 사전 통지 없이 서비스 이용 제한 조치를 취할 수 있습니다.</S.SecondListItem>
                    <S.FirstListItem>b. 책임의 한계와 법적 고지의 변경</S.FirstListItem>
                    <S.SecondListItem>본 사이트는 책임의 한계와 법적고지의 내용을 인터넷산업의 상관례에 맞추어 적절한 방법으로 사전 통지없이 수시로 변경할 수 있습니다.</S.SecondListItem>
                    <S.FirstListItem>c. 책임의 한계와 법적 고지의 효력</S.FirstListItem>
                    <S.SecondListItem>책임의 한계와 법적고지사항에서 다루고 있는 세부사항들은 관계당사자들간의 총체적인 합의사항이며, 본 사이트의 개별서비스에서 정하고 있는 별도의 약관, 고지사항 등과 상충되는 경우에는 별도의 약관 또는 고지사항을 우선 적용합니다.</S.SecondListItem>
                </S.List>
                <S.Blank />
                
                <S.SubTitle>제9조 (개인정보 열람 청구)</S.SubTitle>
                <S.Text>이용자는 개인정보 보호법 제35조에 따라 개인정보 열람 청구를 담당자에게 할 수 있으며, 신속히 처리하겠습니다.</S.Text>
                <S.Text>담당자: 윤준수</S.Text>
                <S.Text>연락처: <S.Link href="mailto:junsu120202@gmail.com">junsu120202@gmail.com</S.Link></S.Text>
                <S.Blank />
                
                <S.SubTitle>제10조 (권익침해 구제 방법)</S.SubTitle>
                <S.Text>개인정보 침해 피해구제 및 상담이 필요한 경우 아래 기관에 문의 가능합니다.</S.Text>
                <S.Text><S.Link href="https://privacy.kisa.or.kr/main.do" target="_blank" title="홈페이지로 이동">개인정보 침해신고센터(118)</S.Link></S.Text>
                <S.Text><S.Link href="https://www.kopico.go.kr" target="_blank" title="홈페이지로 이동">개인정보 분쟁조정위원회(1833-6972)</S.Link></S.Text>
                <S.Text><S.Link href="https://ecrm.police.go.kr/minwon/main" target="_blank" title="홈페이지로 이동">경찰청 사이버범죄 신고시스템(182)</S.Link></S.Text>
                <S.Blank />

                <S.SubTitle>제11조 (개인정보 처리방침 시행 및 변경)</S.SubTitle>
                <S.Text>본 방침은 [2025.05.01]부터 적용됩니다.</S.Text>
                <S.Blank />
            </S.Wrapper>
        </>
    )
};

export default Policy;

