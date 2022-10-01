import HEADER from "../Components/Header"
import ImageContainer from "../Components/ImageContainer";
import Button from "../Components/Button";
import { useHistory } from "react-router-dom";

function Landing() {
    const history = useHistory()

    return (
        <>
            <HEADER />
            <ImageContainer />
            <Button btnText="🎉 Create my event" handleClick={() => {
                history.push('/create')
            }} /></>

    )
}

export default Landing;