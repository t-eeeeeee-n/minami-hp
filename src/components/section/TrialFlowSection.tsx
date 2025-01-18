"use client";

import React from "react";
import SectionTitle from "@/components/section/SectionTitle";

const TrialFlowSection = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <SectionTitle label="Trial flow">体験のお申込み</SectionTitle>
            <div className="bg-white py-10 rounded-lg text-center">

                {/* Steps */}
                <div className="max-w-md w-full md:px-0 mx-auto">
                    <div className="text-left text-sm md:text-base space-y-4">
                        <p>
                            ①
                            <a
                                href="https://line.me/R/ti/p/@243otxyn"
                                className="text-green-500 font-bold"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Line"
                            >
                                [公式LINE]
                            </a>
                            で予約
                        </p>
                        <p>② 友達追加後にINOUTからメッセージが送られます。</p>
                        <p>③ メッセージに希望日を入力して送信してください。</p>
                        <p>
                            ④ スタッフから直接LINEにて返信がございます。
                            <br/>
                            ※混雑時は返信が遅れます。
                        </p>
                        <p>⑤ 予約完了！</p>
                        <p>次回からLINEで直接予約が取れる簡単なシステムです。</p>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <a
                    href="/reserve"
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-accent text-on-accent rounded-3xl shadow hover:bg-secondary-dark transition inline-block"
                >
                    ご予約はこちら
                </a>
            </div>
        </div>

    );
};

export default TrialFlowSection;
