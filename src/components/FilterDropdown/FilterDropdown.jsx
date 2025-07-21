import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './FilterDropdownStyles.module.css';

/**
 * Generic dropdown filter menu component
 * @param {Object} props
 * @param {Array} props.options - Array of strings for dropdown options
 * @param {string} props.value - Currently selected value
 * @param {Function} props.onChange - Function to handle value changes
 * @param {string} [props.placeholder] - Placeholder text when no option selected
 * @param {string} [props.label] - Optional label prefix (e.g., "Filter by:")
 * @param {string} [props.className] - Additional CSS classes
 */
const FilterDropdown = ({
                            options = [],
                            value,
                            onChange,
                            placeholder = "Select an option",
                            label = "",
                            className = ''
                        }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close dropdown on Escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [isOpen]);

    const handleOptionSelect = (option) => {
        onChange(option);
        setIsOpen(false);
    };

    const getDisplayValue = () => {
        if (!value) return placeholder;
        return value;
    };

    const getDisplayText = () => {
        const displayValue = getDisplayValue();
        return label ? `${label} ${displayValue}` : displayValue;
    };

    return (
        <div className={`${styles.filterDropdown} ${className}`} ref={dropdownRef}>
            <button
                className={`${styles.dropdownToggle} ${isOpen ? styles.open : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                type="button"
            >
                <span className={styles.dropdownText}>
                    {getDisplayText()}
                </span>
                <svg
                    className={`${styles.dropdownIcon} ${isOpen ? styles.rotated : ''}`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                >
                    <path d="M4 6l4 4 4-4"/>
                </svg>
            </button>

            {isOpen && options.length > 0 && (
                <ul className={styles.dropdownMenu} role="listbox">
                    {options.map((option, index) => (
                        <li key={index} role="option">
                            <button
                                className={`${styles.dropdownItem} ${
                                    option === value ? styles.active : ''
                                }`}
                                onClick={() => handleOptionSelect(option)}
                                type="button"
                            >
                                {option}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

FilterDropdown.propTypes = {
    options: PropTypes.array.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
};

export default FilterDropdown;
