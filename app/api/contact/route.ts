import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { service, ...formData } = body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // Format email content
        const htmlContent = `
            <h2>New Inquiry for ${service}</h2>
            <table style="width: 100%; border-collapse: collapse;">
                ${Object.entries(formData).map(([key, value]) => `
                    <tr>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold; width: 30%;">${key.charAt(0).toUpperCase() + key.slice(1)}</td>
                        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${value}</td>
                    </tr>
                `).join('')}
            </table>
        `;

        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: 'ihabeebulhaque@gmail.com',
            subject: `New ${service} Inquiry from Website`,
            html: htmlContent,
        });

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Failed to send email:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
