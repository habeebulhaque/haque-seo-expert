import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: "Freelance Digital Marketing Services in Dubai, UAE - Habeebul Haque",
    description: "Comprehensive digital marketing services in Dubai including SEO, PPC, Social Media, and Web Design. Tailored strategies to drive real business growth.",
};

export default function Services() {
    return <ServicesClient />;
}
