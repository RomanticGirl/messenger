import DesctopSidebar from "./DesctopSidebar";

async function Sidebar({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-full">
            <DesctopSidebar />
            <main className="lg:pl-20 h-full">
                {children}
            </main>
            {children}
        </div>
    )
}

export default Sidebar;