import { PageChange } from '@/components/PageChange/PageChange'
import { ContactForm } from '@/components/ContactForm/ContactForm';
import backward from "@/static/logos/remotebackwardoutline-svgrepo-com.svg";
import "@/routes/styles/contact.css"

export function ContactRoute(){
    return (
        <main className='contact-section'>
            <div className='contact-title'>
                <h1>Contact Page</h1>
            </div>
            <ContactForm/>
            <PageChange
                link="/"
                icon={backward}
            />
        </main>
    );
}
