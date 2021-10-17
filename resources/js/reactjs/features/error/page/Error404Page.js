import TopNavbar from "../../../common/layout/menu/TopNavbar";
import Gif404 from "../../../../../images/error/404.gif";

const Error404 = () => {
    return (
        <div id="page__404" className="h-full w-full">
            <TopNavbar />
            <div
                className="fixed inset-x-0 top-1/4 flex justify-center items-center"
                id="page__login__content"
            >
                <img src={Gif404} className="rounded-lg" />
            </div>
        </div>
    );
};

export default Error404;
