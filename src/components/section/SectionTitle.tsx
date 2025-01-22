import React from "react";

interface SectionHeaderProps {
    label: string;
    children: React.ReactNode;
}

const SectionTitle: React.FC<SectionHeaderProps> = ({ label, children }) => {
    return (
        <div className={"text-center mb-12"}>
            <p className="noto-sans text-as-primary text-sm font-bold uppercase">{label}</p>
            <h1 className="text-2xl md:text-3xl font-bold">
                {children}
            </h1>
        </div>
    );
};

export default SectionTitle;
