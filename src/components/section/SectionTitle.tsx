import React from "react";

interface SectionHeaderProps {
    label: string;
    children: React.ReactNode;
}

const SectionTitle: React.FC<SectionHeaderProps> = ({ label, children }) => {
    return (
        <div className={"text-center mb-12"}>
            <p className="noto-sans text-as-primary text-sm font-bold uppercase">{label}</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {children}
            </h2>
        </div>
    );
};

export default SectionTitle;
