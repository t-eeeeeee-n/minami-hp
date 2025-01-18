type FormData = {
    name: string;
    furigana: string;
    age: string;
    phone: string;
    email: string;
    store: string;
    requests: string;
    dates: { date: string; time: string }[];
    goals: string[];
};

export const sendEmail = async (formData: FormData): Promise<{ success: boolean; error?: string }> => {
    try {
        const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const responseData = await response.json();

        // 成功・失敗を返す
        if (!response.ok || !responseData.success) {
            throw new Error(responseData.error || "送信に失敗しました。");
        }

        return { success: true };
    } catch (error) {
        console.error("送信エラー:", error);
        return { success: false, error: error instanceof Error ? error.message : "エラーが発生しました。" };
    }
};