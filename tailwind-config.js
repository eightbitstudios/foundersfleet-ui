// Shared Tailwind configuration for FoundersFleet
// Custom breakpoint at 510px for mobile responsiveness
const tailwindConfig = {
    theme: {
        screens: {
            'sm': '510px',
            'md': '510px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px'
        },
        extend: {
            colors: {
                'primary': '#000000',
                'primary-hover': '#333333',
                'background': '#F8F9FA',
                'card-bg': '#FFFFFF',
                'text-primary': '#000000',
                'text-secondary': '#666666',
                'text-muted': '#999999',
                'border': '#E5E5E5',
                'section-bg': '#FAFAFA',
                'success': '#10B981',
                'warning': '#F59E0B',
                'danger': '#EF4444',
                'info': '#3B82F6',
                'accurate': '#22C55E',
                'inaccurate': '#DC2626'
            },
            borderRadius: {
                'xl': '32px'
            },
            fontFamily: {
                'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
            }
        }
    }
};