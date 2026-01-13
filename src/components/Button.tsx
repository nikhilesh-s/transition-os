import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  onClick,
  className = '',
  size = 'md'
}: ButtonProps) {
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantStyles = {
    primary: 'gradient-primary text-white shadow-lg hover:shadow-xl',
    secondary: 'gradient-secondary text-white shadow-lg hover:shadow-xl',
    outline: 'glass border-2 border-[#9D5060] text-[#9D5060] hover:bg-white/50',
    glass: 'glass-strong text-gray-700 hover:bg-white/70',
  };

  const combinedStyles = `inline-flex items-center justify-center rounded-full font-semibold transition-all ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const MotionComponent = motion.div;

  if (to) {
    return (
      <MotionComponent whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={to} className={combinedStyles}>
          {children}
        </Link>
      </MotionComponent>
    );
  }

  if (href) {
    return (
      <MotionComponent whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedStyles}>
          {children}
        </a>
      </MotionComponent>
    );
  }

  return (
    <MotionComponent whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <button onClick={onClick} className={combinedStyles}>
        {children}
      </button>
    </MotionComponent>
  );
}
