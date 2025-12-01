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
                <S.Text>본 커뮤니티는 서비스 제공을 위해 쿠키를 사용합니다.</S.Text>
                <S.Link>
                    <S.FirstListItem>a. 필수 쿠키 사용</S.FirstListItem>
                    <S.SecondListItem>로그인 유지, 보안, 세션 관리 등 서비스 제공에 필수적인 쿠키는 동의 없이도 사용됩니다. 필수 쿠키를 차단할 경우 서비스 이용에 제한이 발생할 수 있습니다.</S.SecondListItem>
                    <S.FirstListItem>b. 선택 쿠키 안내</S.FirstListItem>
                    <S.SecondListItem>본 커뮤니티는 현재 광고·분석 목적의 선택 쿠키를 사용하지 않으며, 향후 도입 시 별도 동의를 받겠습니다.</S.SecondListItem>
                    <S.FirstListItem>c. 사용자 설정</S.FirstListItem>
                    <S.SecondListItem>사용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있습니다.</S.SecondListItem>
                </S.Link>
                <S.Blank />

                <S.SubTitle>제8조 (개인정보 열람 청구)</S.SubTitle>
                <S.Text>이용자는 개인정보 보호법 제35조에 따라 개인정보 열람 청구를 담당자에게 할 수 있으며, 신속히 처리하겠습니다.</S.Text>
                <S.Text>담당자: 윤준수</S.Text>
                <S.Text>연락처: <S.Link href="mailto:junsu120202@gmail.com">junsu120202@gmail.com</S.Link></S.Text>
                <S.Blank />
                
                <S.SubTitle>제9조 (권익침해 구제 방법)</S.SubTitle>
                <S.Text>개인정보 침해 피해구제 및 상담이 필요한 경우 아래 기관에 문의 가능합니다.</S.Text>
                <S.Text><S.Link href="https://privacy.kisa.or.kr/main.do" target="_blank" title="홈페이지로 이동">개인정보 침해신고센터(118)</S.Link></S.Text>
                <S.Text><S.Link href="https://www.kopico.go.kr" target="_blank" title="홈페이지로 이동">개인정보 분쟁조정위원회(1833-6972)</S.Link></S.Text>
                <S.Text><S.Link href="https://ecrm.police.go.kr/minwon/main" target="_blank" title="홈페이지로 이동">경찰청 사이버범죄 신고시스템(182)</S.Link></S.Text>
                <S.Blank />

                <S.SubTitle>제10조 (개인정보 처리방침 시행 및 변경)</S.SubTitle>
                <S.Text>본 방침은 커뮤니티 서비스의 시작일인 [2025.11.01]부터 적용됩니다.</S.Text>
                <S.Blank />
            </S.Wrapper>
        </>
    )
};

export default Policy;

