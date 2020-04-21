import { useState } from 'react';

// React Hook
function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    
    function displayModal() {
        setIsOpen(!isOpen);
    }

    return {isOpen, displayModal}
};

export default useModal;