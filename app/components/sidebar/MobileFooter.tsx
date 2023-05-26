"use client";

import useConversation from "../../hooks/useConversation";
import useRoutes from "../../hooks/useRoutes";

import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed
        justify-between
        w-full
        bottom-0
        z-40 
        flex
        items-center 
        bg-white 
        border-t-[1px] 
        lg:hidden
        "
      >
      {routes.map((r) => (
        <MobileItem
          key={r.href}
          href={r.href}
          active={r.active}
          icon={r.icon}
          onClick={r.onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
