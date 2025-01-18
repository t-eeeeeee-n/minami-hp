import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        console.log("EMAIL_USER:", process.env.EMAIL_USER);
        console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Defined" : "Not Defined");

        const formData = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"INOUT Gym Manage" <${process.env.EMAIL_FROM}>`,
            to: `<${process.env.EMAIL_TO}>`,
            subject: "体験予約のお問い合わせ",
            html: `
                <h1>体験予約のお問い合わせ</h1>
                <p><strong>名前:</strong> ${formData.name}</p>
                <p><strong>フリガナ:</strong> ${formData.furigana}</p>
                <p><strong>電話番号:</strong> ${formData.phone}</p>
                <p><strong>メールアドレス:</strong> ${formData.email}</p>
                <p><strong>希望店舗:</strong> ${formData.store}</p>
                <p><strong>ご要望:</strong> ${formData.requests || "なし"}</p>
                <p><strong>希望日時:</strong></p>
                <ul>
                    ${formData.dates
                .map(
                    (d: { date: string; time: string }, i: number) =>
                        `<li>希望日時 ${i + 1}: ${d.date || "未指定"} - ${
                            d.time || "未指定"
                        }</li>`
                )
                .join("")}
                </ul>
                <p><strong>目的:</strong> ${formData.goals.join(", ") || "なし"}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("メール送信エラー:", error);

        // エラーを適切なHTTPステータスで返す
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 } // Internal Server Error
        );
    }
}
