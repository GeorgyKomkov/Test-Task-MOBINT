import { ClipLoader } from "react-spinners";



const UpdateIndicator = () => {
    return (
        <div className="update-indicator">

            <ClipLoader color={"#2688eb"} loading={true} size={5 * window.innerWidth / 100} />

        </div>

    );
}


export default UpdateIndicator