import type { ReactNode } from "react";

export default function DashboardLayout({ children, }: { children: ReactNode; }) {
    return (
        <div className="flex min-h-screen">
            {/* <DashboardSidebar /> */}
            <div className="flex flex-1 flex-col">
                {/* <DashboardHeader /> */}
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>);
}