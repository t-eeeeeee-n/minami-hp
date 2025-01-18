"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import {sendEmail} from "@/utils/sendEmail";
import Spinner from "@/components/Spinner";

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

type FormErrors = Partial<Record<keyof FormData | `date-${number}` | `time-${number}`, string>>;

const Page: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        furigana: "",
        age: "",
        phone: "",
        email: "",
        store: "",
        requests: "",
        dates: [{ date: "", time: "" }, { date: "", time: "" }, { date: "", time: "" }],
        goals: [],
    });

    const [isLoading, setIsLoading] = useState(false);

    const timeSelect = [
        "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
        "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
    ]

    const goalsSelect = ["ダイエット目的", "筋肉をつけたい", "運動不足解消", "機能改善（肩こり、腰痛など）"]

    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleDateChange = (index: number, field: "date" | "time", value: string) => {
        const updatedDates = [...formData.dates];
        updatedDates[index][field] = value;
        setFormData((prev) => ({ ...prev, dates: updatedDates }));
    };

    const handleCheckboxChange = (goal: string) => {
        setFormData((prev) => ({
            ...prev,
            goals: prev.goals.includes(goal)
                ? prev.goals.filter((g) => g !== goal)
                : [...prev.goals, goal],
        }));
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // 必須項目リスト
        const requiredFields: (keyof FormData)[] = [
            "name",
            "furigana",
            "phone",
            "email",
            // "age",
            // "store",
        ];

        // 必須項目のチェック
        requiredFields.forEach((field) => {
            if (!formData[field]) {
                newErrors[field] = "入力してください";
            }
        });

        // 希望日時のチェック
        // formData.dates.forEach((date, index) => {
        //     ["date", "time"].forEach((key) => {
        //         if (!date[key as "date" | "time"]) {
        //             newErrors[`${key}-${index}`] = "全部入力してください";
        //         }
        //     });
        // });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) {
            toast.error("入力内容を確認してください");
            return;
        }

        setIsLoading(true);
        const result = await sendEmail(formData);
        setIsLoading(false);

        if (result.success) {
            toast.success("送信に成功しました！");
            setFormData({
                name: "",
                furigana: "",
                age: "",
                phone: "",
                email: "",
                store: "",
                requests: "",
                dates: [{ date: "", time: "" }, { date: "", time: "" }, { date: "", time: "" }],
                goals: [],
            });
        } else {
            toast.error("送信に失敗しました。");
        }
    };

    return (
        <div className="bg-white">
            <div
                className="relative text-white py-32 px-6 text-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://minami-hp.s3.ap-northeast-1.amazonaws.com/11062b_2a3d1943e1cc479991aca5edc5e3cb00.avif')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative">
                    <h1 className="text-3xl md:text-4xl font-bold">体験予約はこちら</h1>
                    <p className="mt-4 text-sm md:text-base">
                        LINEをご利用の方は、
                        <a
                            href="https://line.me/R/ti/p/@243otxyn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-green-500"
                        >
                            [公式LINE]
                        </a>
                        からもスムーズにお問い合わせ・ご予約いただけます。
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-16">
                <form className="space-y-8" onSubmit={handleSubmit}>
                    {/* Name Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">
                                お名前<span className="text-red-500 text-xs ml-1">必須</span>
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    handleChange("name", e.target.value)
                                }
                                className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                                    errors.name ? "border-red-500" : "focus:border-primary"
                                }`}
                                placeholder="例: 山田 太郎"
                            />
                            {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">
                                フリガナ<span className="text-red-500 text-xs ml-1">必須</span>
                            </label>
                            <input
                                type="text"
                                value={formData.furigana}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    handleChange("furigana", e.target.value)
                                }
                                className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                                    errors.furigana ? "border-red-500" : "focus:border-primary"
                                }`}
                                placeholder="例: ヤマダ タロウ"
                            />
                            {errors.furigana && <p className="mt-1 text-red-500 text-sm">{errors.furigana}</p>}
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">
                                電話番号<span className="text-red-500 text-xs ml-1">必須</span>
                            </label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    handleChange("phone", e.target.value)
                                }
                                className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                                    errors.phone ? "border-red-500" : "focus:border-primary"
                                }`}
                                placeholder="例: 080-1234-5678"
                            />
                            {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium ">
                                メールアドレス<span className="text-red-500 text-xs ml-1">必須</span>
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("email", e.target.value)}
                                className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                                    errors.email ? "border-red-500" : "focus:border-primary"
                                }`}
                                placeholder="例: example@example.com"
                            />
                            {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                        </div>
                    </div>

                    {/* Age Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">年齢</label>
                            <select
                                value={formData.age}
                                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                    handleChange("age", e.target.value)
                                }
                                className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                                    errors.age ? "border-red-500" : "focus:border-primary"
                                }`}
                            >
                                <option value="">選択してください</option>
                                {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                                    <option key={age} value={age}>
                                        {age}歳
                                    </option>
                                ))}
                            </select>
                            {errors.age && <p className="mt-1 text-red-500 text-sm">{errors.age}</p>}
                        </div>
                    </div>

                    {/* Store Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium">希望店舗</label>
                            <select
                                value={formData.store}
                                onChange={(e) => handleChange("store", e.target.value)}
                                className={`mt-1 block w-full rounded-md shadow-sm ${
                                    errors.store ? "border-red-500" : "focus:border-primary"
                                }`}
                            >
                                <option value="">選択してください</option>
                                <option value="新富店">新富店</option>
                                <option value="目黒店">目黒店</option>
                            </select>
                            {errors.store && <p className="mt-1 text-red-500 text-sm">{errors.store}</p>}
                        </div>
                    </div>


                    {/* Preferred Date Section */}
                    {formData.dates.map((_, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">
                                    希望日時 {index + 1}
                                </label>
                                <input
                                    type="date"
                                    value={formData.dates[index].date}
                                    onChange={(e) => handleDateChange(index, "date", e.target.value)}
                                    className={`mt-1 block w-full rounded-md shadow-sm ${
                                        errors[`date-${index}`] ? "border-red-500" : "focus:border-primary"
                                    }`}
                                />
                                {errors[`date-${index}`] && <p className="mt-1 text-red-500 text-sm">{errors[`date-${index}`]}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium">希望時間</label>
                                <select
                                    value={formData.dates[index].time}
                                    onChange={(e) => handleDateChange(index, "time", e.target.value)}
                                    className={`mt-1 block w-full rounded-md shadow-sm ${
                                        errors[`time-${index}`] ? "border-red-500" : "focus:border-primary"
                                    }`}
                                >
                                    <option value="">時間を選択</option>
                                    {timeSelect.map((time) => (
                                        <option key={time} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                                {errors[`time-${index}`] && <p className="mt-1 text-red-500 text-sm">{errors[`time-${index}`]}</p>}
                            </div>
                        </div>
                    ))}

                    {/* Additional Notes Section */}
                    <div>
                        <label className="block text-sm font-medium">
                            ご要望
                        </label>
                        <textarea
                            rows={4}
                            value={formData.requests}
                            onChange={(e) => handleChange("requests", e.target.value)}
                            className="mt-1 block w-full rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                            placeholder="例: ご要望を入力してください"
                        ></textarea>
                    </div>

                    {/* Goals Section */}

                    <div>
                        <label className="block text-sm font-medium">
                            今回の目的
                        </label>
                        <div className="mt-2 space-y-2">
                            {goalsSelect.map(
                                (goal, index) => (
                                    <div key={index} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`goal-${index}`}
                                            checked={formData.goals.includes(goal)}
                                            onChange={() => handleCheckboxChange(goal)}
                                            className="h-4 w-4 rounded text-primary focus:ring-primary"
                                        />
                                        <label
                                            htmlFor={`goal-${index}`}
                                            className="ml-3 block text-sm"
                                        >
                                            {goal}
                                        </label>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-center w-full">
                        <button
                            type="submit"
                            className="h-[40px] w-24 bg-primary text-on-primary rounded-3xl shadow hover:bg-secondary-dark transition flex items-center justify-center"
                            disabled={isLoading} // ローディング中はボタンを無効化
                        >
                            {isLoading ? <Spinner /> : "送信"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
