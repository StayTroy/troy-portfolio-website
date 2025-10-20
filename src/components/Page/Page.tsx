import "@/components/Page/styles/page.css"

export function Page(props: { children: React.ReactNode }) 
{
    return (
        <div className="page">
            {props.children}
        </div>
    );
}