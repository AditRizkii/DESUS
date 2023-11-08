import SignOut from "../_components/auth/sign-out";
import SideBar from "../_components/SideBar";
import Content from "../_components/admin/Content";

import "../_assets/css/argon-dashboard-tailwind.css";
import "../_assets/css/argon-dashboard-tailwind.min.css";
import "../_assets/css/nucleo-svg.css";
import "../_assets/css/perfect-scrollbar.css";
import "../_assets/css/tooltips.css";

export default function Home() {
  return (
    <>
      <SideBar />
      <Content />
      {/* <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full max-w-screen-lg aspect-video"
        ></iframe>
        <SignOut />
      </div> */}
    </>
  );
}
