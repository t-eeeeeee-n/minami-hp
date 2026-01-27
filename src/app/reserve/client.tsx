"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import { sendEmail } from "@/utils/sendEmail";
import Spinner from "@/components/Spinner";
import FadeIn from "@/components/FadeIn";

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

const Client: React.FC = () => {
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
    ];

    const goalsSelect = ["ダイエット目的", "筋肉をつけたい", "運動不足解消", "機能改善（肩こり、腰痛など）"];

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

        const requiredFields: (keyof FormData)[] = [
            "name",
            "furigana",
            "phone",
            "email",
        ];

        requiredFields.forEach((field) => {
            if (!formData[field]) {
                newErrors[field] = "入力してください";
            }
        });

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

    const inputBaseClass = "mt-2 block w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-transparent transition-all duration-200";
    const inputErrorClass = "mt-2 block w-full px-4 py-3 bg-red-50 border border-red-300 rounded-xl text-stone-700 text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all duration-200";

    return (
        <div className="font-sans text-stone-700 bg-stone-50 antialiased min-h-screen">
            {/* Hero Section */}
            <section className="py-24 md:py-32 bg-white px-6 lg:px-12">
                <FadeIn>
                    <div className="max-w-6xl mx-auto text-center">
                        <span className="text-stone-400 font-bold tracking-widest text-xs uppercase mb-4 block">
                            RESERVE
                        </span>
                        <h1 className="text-2xl md:text-3xl font-semibold text-stone-800 mb-4">
                            体験予約
                        </h1>
                        <p className="text-stone-400 text-sm font-light max-w-xl mx-auto">
                            LINEをご利用の方は
                            <a
                                href="https://line.me/R/ti/p/@243otxyn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-600 hover:text-emerald-700 font-medium mx-1 transition-colors"
                            >
                                公式LINE
                            </a>
                            からもお問い合わせいただけます
                        </p>
                    </div>
                </FadeIn>
            </section>

            {/* Form Section */}
            <section className="py-24 md:py-32 bg-stone-50 px-6 lg:px-12">
                <FadeIn>
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-[2rem] shadow-xl shadow-stone-200/40 p-8 md:p-12">
                            <form className="space-y-8" onSubmit={handleSubmit}>
                                {/* Personal Info Section */}
                                <div>
                                    <h3 className="text-sm font-semibold text-stone-800 mb-6 flex items-center gap-2">
                                        <span className="w-6 h-6 bg-stone-100 rounded-full flex items-center justify-center text-xs text-stone-500">1</span>
                                        お客様情報
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-stone-600">
                                                お名前
                                                <span className="text-rose-500 text-xs ml-1">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                    handleChange("name", e.target.value)
                                                }
                                                className={errors.name ? inputErrorClass : inputBaseClass}
                                                placeholder="山田 太郎"
                                            />
                                            {errors.name && <p className="mt-2 text-rose-500 text-xs">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-stone-600">
                                                フリガナ
                                                <span className="text-rose-500 text-xs ml-1">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.furigana}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                    handleChange("furigana", e.target.value)
                                                }
                                                className={errors.furigana ? inputErrorClass : inputBaseClass}
                                                placeholder="ヤマダ タロウ"
                                            />
                                            {errors.furigana && <p className="mt-2 text-rose-500 text-xs">{errors.furigana}</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Section */}
                                <div>
                                    <h3 className="text-sm font-semibold text-stone-800 mb-6 flex items-center gap-2">
                                        <span className="w-6 h-6 bg-stone-100 rounded-full flex items-center justify-center text-xs text-stone-500">2</span>
                                        ご連絡先
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-stone-600">
                                                電話番号
                                                <span className="text-rose-500 text-xs ml-1">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                    handleChange("phone", e.target.value)
                                                }
                                                className={errors.phone ? inputErrorClass : inputBaseClass}
                                                placeholder="080-1234-5678"
                                            />
                                            {errors.phone && <p className="mt-2 text-rose-500 text-xs">{errors.phone}</p>}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-stone-600">
                                                メールアドレス
                                                <span className="text-rose-500 text-xs ml-1">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                                    handleChange("email", e.target.value)
                                                }
                                                className={errors.email ? inputErrorClass : inputBaseClass}
                                                placeholder="example@email.com"
                                            />
                                            {errors.email && <p className="mt-2 text-rose-500 text-xs">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                        <div>
                                            <label className="block text-sm font-medium text-stone-600">
                                                年齢
                                            </label>
                                            <select
                                                value={formData.age}
                                                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                                    handleChange("age", e.target.value)
                                                }
                                                className={inputBaseClass}
                                            >
                                                <option value="">選択してください</option>
                                                {Array.from({ length: 83 }, (_, i) => i + 18).map((age) => (
                                                    <option key={age} value={age}>
                                                        {age}歳
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-stone-600">
                                                希望店舗
                                            </label>
                                            <select
                                                value={formData.store}
                                                onChange={(e) => handleChange("store", e.target.value)}
                                                className={inputBaseClass}
                                            >
                                                <option value="">選択してください</option>
                                                <option value="新富店">新富店</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Date/Time Section */}
                                <div>
                                    <h3 className="text-sm font-semibold text-stone-800 mb-6 flex items-center gap-2">
                                        <span className="w-6 h-6 bg-stone-100 rounded-full flex items-center justify-center text-xs text-stone-500">3</span>
                                        ご希望日時
                                    </h3>
                                    <div className="space-y-4">
                                        {formData.dates.map((_, index) => (
                                            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-stone-50 rounded-xl">
                                                <div>
                                                    <label className="block text-xs font-medium text-stone-500 mb-1">
                                                        第{index + 1}希望日
                                                    </label>
                                                    <input
                                                        type="date"
                                                        value={formData.dates[index].date}
                                                        onChange={(e) => handleDateChange(index, "date", e.target.value)}
                                                        className="block w-full px-4 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-700 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-transparent transition-all duration-200"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-stone-500 mb-1">
                                                        希望時間
                                                    </label>
                                                    <select
                                                        value={formData.dates[index].time}
                                                        onChange={(e) => handleDateChange(index, "time", e.target.value)}
                                                        className="block w-full px-4 py-2.5 bg-white border border-stone-200 rounded-lg text-stone-700 text-sm focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-transparent transition-all duration-200"
                                                    >
                                                        <option value="">時間を選択</option>
                                                        {timeSelect.map((time) => (
                                                            <option key={time} value={time}>
                                                                {time}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Goals Section */}
                                <div>
                                    <h3 className="text-sm font-semibold text-stone-800 mb-6 flex items-center gap-2">
                                        <span className="w-6 h-6 bg-stone-100 rounded-full flex items-center justify-center text-xs text-stone-500">4</span>
                                        今回の目的
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {goalsSelect.map((goal, index) => (
                                            <label
                                                key={index}
                                                className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                                                    formData.goals.includes(goal)
                                                        ? 'bg-stone-100 border-2 border-stone-300'
                                                        : 'bg-stone-50 border-2 border-transparent hover:bg-stone-100'
                                                }`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={formData.goals.includes(goal)}
                                                    onChange={() => handleCheckboxChange(goal)}
                                                    className="w-4 h-4 rounded border-stone-300 text-stone-600 focus:ring-stone-300"
                                                />
                                                <span className="text-sm text-stone-600">{goal}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Requests Section */}
                                <div>
                                    <h3 className="text-sm font-semibold text-stone-800 mb-6 flex items-center gap-2">
                                        <span className="w-6 h-6 bg-stone-100 rounded-full flex items-center justify-center text-xs text-stone-500">5</span>
                                        ご要望
                                    </h3>
                                    <textarea
                                        rows={4}
                                        value={formData.requests}
                                        onChange={(e) => handleChange("requests", e.target.value)}
                                        className={inputBaseClass + " resize-none"}
                                        placeholder="ご質問やご要望があればお書きください"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-stone-800 text-white rounded-xl font-medium hover:bg-stone-700 transition-all duration-300 shadow-lg shadow-stone-300/30 hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <Spinner />
                                        ) : (
                                            <>
                                                <span>送信する</span>
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
};

export default Client;
