import { TabBar } from "@/components/common";
import { Metadata } from "next";
import { cookies } from "next/headers";


export const metadata: Metadata = {
    title: "Cookies",
    description: "Pantalla de cookies"
}

export default async function CookiesPage() {
    const cookieStore = await cookies();
    const tabCookie = cookieStore.get("selectedTab");
    const selectedTab = +(tabCookie?.value ?? 1);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col">
                <span className="text-3xl">Tabs</span>
                <TabBar tabOptions={[1,2,3,4]} currentTab={selectedTab}/>
            </div>
        </div>
    );
}