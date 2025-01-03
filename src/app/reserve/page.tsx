"use client";

import React from "react";

const Page = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div
                className="relative text-white py-32 px-6 text-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://minami-hp.s3.ap-northeast-1.amazonaws.com/11062b_2a3d1943e1cc479991aca5edc5e3cb00.avif')",
                }}
            >
                {/* Overlay */}
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

            {/* Reservation Form */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <form className="space-y-8">
                    {/* Name Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                            <label className="block text-sm font-medium">
                                お名前
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                placeholder="例: 山田 太郎"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium ">
                                フリガナ
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                placeholder="例: ヤマダ タロウ"
                            />
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium ">
                                電話番号
                            </label>
                            <input
                                type="tel"
                                className="mt-1 block w-full rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                placeholder="例: 080-1234-5678"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium ">
                                メールアドレス
                            </label>
                            <input
                                type="email"
                                className="mt-1 block w-full rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                placeholder="例: example@example.com"
                            />
                        </div>
                    </div>

                    {/* Preferred Date Section */}
                    {[1, 2, 3].map((index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium ">
                                    希望日時 {index}
                                </label>
                                <input
                                    type="date"
                                    className="mt-1 block w-full rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium ">
                                    希望時間
                                </label>
                                <select
                                    className="mt-1 block w-full rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                >
                                    <option value="">時間を選択</option>
                                    <option value="10:00">10:00</option>
                                    <option value="10:30">10:30</option>
                                    <option value="11:00">11:00</option>
                                    <option value="11:30">11:30</option>
                                    <option value="12:00">12:00</option>
                                    <option value="12:30">12:30</option>
                                    <option value="12:00">13:00</option>
                                    <option value="12:30">13:30</option>
                                    <option value="12:00">14:00</option>
                                    <option value="12:30">14:30</option>
                                    <option value="12:00">15:00</option>
                                    <option value="12:30">15:30</option>
                                    <option value="12:00">16:00</option>
                                    <option value="12:30">16:30</option>
                                    <option value="12:00">17:00</option>
                                    <option value="12:30">17:30</option>
                                    <option value="12:00">18:00</option>
                                    <option value="12:30">18:30</option>
                                    <option value="12:00">19:00</option>
                                    <option value="12:30">19:30</option>
                                    <option value="12:00">20:00</option>
                                    <option value="12:30">20:30</option>
                                    <option value="21:00">21:00</option>
                                    <option value="21:30">21:30</option>
                                </select>
                            </div>
                        </div>
                    ))}

                    {/* Additional Notes Section */}
                    <div>
                        <label className="block text-sm font-medium ">
                            ご要望
                        </label>
                        <textarea
                            rows={4}
                            className="mt-1 block w-full rounded-md shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                            placeholder="例: ご要望を入力してください"
                        ></textarea>
                    </div>

                    {/* Goals Section */}
                    <div>
                        <label className="block text-sm font-medium ">
                            今回の目的
                        </label>
                        <div className="mt-2 space-y-2">
                            {["ダイエット目的", "筋肉をつけたい", "運動不足解消", "機能改善（肩こり、腰痛など）"].map(
                                (goal, index) => (
                                    <div key={index} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`goal-${index}`}
                                            className="h-4 w-4 rounded text-primary focus:ring-primary"
                                        />
                                        <label
                                            htmlFor={`goal-${index}`}
                                            className="ml-3 block text-sm "
                                        >
                                            {goal}
                                        </label>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-primary text-on-primary rounded-3xl shadow hover:bg-secondary-dark transition">
                            送信
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
