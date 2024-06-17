export default function AuthLayout({
   children
}:{
    children: React.ReactNode
}) {
    return (
        <div className="h-screen w-screen flex justify-center items-start p-[5%] overflow-hidden bg-slate-600">
            {children}
        </div>
    )
}