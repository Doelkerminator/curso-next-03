import { WidgetItem } from "@/components/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard de la perra administración"
}

export default function DashboardPage() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <WidgetItem 
            title="Tornillos lijados"
            value={1500}
            percentage={5}
            description="Ayer lijamos más tornillos que la bodega B"/>

    </div>
    );
}