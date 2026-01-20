import React from "react";

interface SectionHeaderProps {
    label: string;
    children: React.ReactNode;
    subtitle?: string;
}

const SectionTitle: React.FC<SectionHeaderProps> = ({ label, children, subtitle }) => {
    return (
        <div className="flex flex-col items-center mb-16 md:mb-20">
            <span className="text-stone-400 font-bold tracking-widest text-xs uppercase mb-3">
                {label}
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-stone-800 text-center">
                {children}
            </h2>
            {subtitle && (
                <p className="text-stone-400 mt-4 text-sm font-light">{subtitle}</p>
            )}
        </div>
    );
};

export default SectionTitle;
