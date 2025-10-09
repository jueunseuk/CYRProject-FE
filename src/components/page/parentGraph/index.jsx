import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import Experience from "../childGraph/experience";
import Glass from "../childGraph/glass";
import Sand from "../childGraph/sand";
import Temperature from "../childGraph/temperature";
import Cheer from "../childGraph/cheer";

const tabs = ["경험치", "모래알", "유리 조각", "활동 온도", "응원"];

const ParentGraph = ({userId}) => {
    const [selected, setSelected] = useState(0);
    const [underline, setUnderline] = useState({ width: 0, offset: 0 });
    const refs = useRef([]);

    useEffect(() => {
        if(refs.current[selected]) {
            const el = refs.current[selected];
            setUnderline({
                width: el.offsetWidth,
                offset: el.offsetLeft,
            });
        }
    }, [selected]);

    const getGraphComponent = (selected) => {
        switch (selected) {
            case 0: return <Experience userId={userId} type={"경험치"} />;
            case 1: return <Sand userId={userId} type={"모래알"} />;
            case 2: return <Glass userId={userId} type={"유리 조각"} />;
            case 3: return <Temperature userId={userId} type={"활동 온도"} />;
            case 4: return <Cheer userId={userId} type={"응원"} />;
            default: return null;
        }
    };

    return (
        <S.Wrapper>
            <S.Text $size={"18px"} $weight={"700"} style={{marginBottom: "10px"}}>활동 통계</S.Text>
            <S.HorizontalWrapper $jc={"flex-start"} >
                <S.TabWrapper>
                    {tabs.map((tab, idx) => (
                        <S.NavigateText
                            key={tab}
                            ref={(el) => (refs.current[idx] = el)}
                            $active={selected === idx}
                            onClick={() => setSelected(idx)}>
                            {tab}
                        </S.NavigateText>
                    ))}
                    <S.Underline $width={underline.width} $offset={underline.offset} />
                </S.TabWrapper>
            </S.HorizontalWrapper>
            {getGraphComponent(selected)}
        </S.Wrapper>
    );
};

export default ParentGraph;