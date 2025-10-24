import React from 'react';

interface SchoolSelectorProps {
    schools: string[];
    selectedSchool: string;
    onSelectSchool: (school: string) => void;
};

const SchoolSelector: React.FC<SchoolSelectorProps> = ({ schools, selectedSchool, onSelectSchool }) => {
    return (
        <div>
            <label htmlFor="school-select">Select your school:</label>
            <select
                id="school-select"
                value={selectedSchool}
                onChange={(e) => onSelectSchool(e.target.value)}
            >
                <option value="">--Choose a school--</option>
                {schools.map((school) => (
                    <option key={school} value={school}>
                        {school}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SchoolSelector;