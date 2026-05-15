export default function AdminDashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold"> Dashboard </h1>
                <p className="text-muted-foreground"> Manage website content and district updates. </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"> <div className="rounded-2xl border p-6"> Total News </div>
                <div className="rounded-2xl border p-6"> Gallery Images </div>
                <div className="rounded-2xl border p-6"> Citizen Messages </div>
                <div className="rounded-2xl border p-6"> Projects </div>
            </div>
        </div>);
}