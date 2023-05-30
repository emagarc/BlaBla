import getCurrentUser from "../../actions/getCurrentUser";
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

async function Sidebar({
    children
}: {
    children: React.ReactNode;
}) {
    const currentUser = await getCurrentUser();
    return (
            <div 
                className="
                    h-full
                    bg-sidebar-image
                    bg-contain
                    bg-repeat-y
                "
            >
                <DesktopSidebar currentUser={currentUser!}/>
                <MobileFooter />
                <main 
                    className="
                        w-full
                        lg:pl-20 h-full
                        "
                    >
                {children}
                </main>
            </div>
    )
};

export default Sidebar;