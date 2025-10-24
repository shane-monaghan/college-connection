import { useState } from "react";
import SchoolSelector from "../components/SchoolSelector";

const SelectSchoolPage: React.FC = () => {
    const [selectedSchool, setSelectedSchool] = useState('');

    const schools = ["Bucknell University", "Lehigh University", "Penn State University", "University of Pennsylvania"];

    return (
        <div>
            <h1>Welcome to ClassLink</h1>
            <SchoolSelector
                schools={schools}
                selectedSchool={selectedSchool}
                onSelectSchool={setSelectedSchool}
            />
            {selectedSchool && <p>You attend(ed): {selectedSchool}</p>}
        </div>
    );
};

export default SelectSchoolPage;
