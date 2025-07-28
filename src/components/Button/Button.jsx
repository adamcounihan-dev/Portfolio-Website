import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ButtonStyles.module.css';

/**
 * Button component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {'primary' | 'secondary'} props.variant - Required button style
 * @param {'small' | 'medium' | 'large'} props.size - Required button size
 * @param {string} [props.href] - External link URL
 * @param {string} [props.to] - Internal route path
 * @param {string} [props.className] - Additional CSS classes
 */
const Button = ({
                    children,
                    variant,
                    size,
                    href,
                    to,
                    className = '',
                    ...props
                }) => {
    const Component = href ? 'a' : to ? Link : 'button';

    const variantClasses = {
        primary: styles.primaryButton,
        secondary: styles.secondaryButton
    };

    const sizeClasses = {
        small: styles.smallButton,
        medium: styles.mediumButton,
        large: styles.largeButton
    };

    if (!variant || !variantClasses[variant]) {
        throw new Error(`Button component requires a valid 'variant' prop. Received: '${variant}'`);
    }

    if (!size || !sizeClasses[size]) {
        throw new Error(`Button component requires a valid 'size' prop. Received: '${size}'`);
    }

    const buttonClass = `${variantClasses[variant]} ${sizeClasses[size]}`;

    return (
        <Component
            className={`${buttonClass} ${className}`}
            href={href}
            to={to}
            {...props}
        >
            {children}
        </Component>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
    href: PropTypes.string,
    to: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
