import Craft from "@/components/craftshop/craft";
import Shop from "@/components/craftshop/shop";
import { useParams } from "react-router-dom";
import WrongPage from "../wrong/WrongPage";
import Inventory from "@/components/craftshop/inventory";

const Craftshop = () => {
    const { subPath } = useParams();

    const getComponent = () => {
        switch(subPath) {
            case "craftshop": return <Craft />;
            case "shop": return <Shop />;
            case "inventory": return <Inventory />;
            default : return <WrongPage />;
        }
    };

    return (
        <>
            {getComponent()}
        </>
    )
};

export default Craftshop;