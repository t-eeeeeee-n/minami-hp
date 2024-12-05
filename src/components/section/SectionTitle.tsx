import React from "react";

interface SectionHeaderProps {
    label: string;
    title: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title }) => {
    return (
        <div className={"text-center mb-12"}>
            <p className="noto-sans text-as-primary text-sm font-bold uppercase">{label}</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {title}
            </h2>
        </div>
    );
};

export default SectionHeader;
