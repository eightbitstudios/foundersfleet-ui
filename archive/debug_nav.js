// Debug script for navigation auto-collapse
console.log('=== Navigation Debug Info ===');
console.log('Current window width:', window.innerWidth);
console.log('Threshold: 1000px');
console.log('Should collapse:', window.innerWidth < 1000);

// Check nav element
const nav = document.getElementById('main-nav');
if (nav) {
    console.log('Nav element found');
    console.log('Current nav classes:', nav.className);
    console.log('Has w-56:', nav.classList.contains('w-56'));
    console.log('Has w-20:', nav.classList.contains('w-20'));
} else {
    console.log('ERROR: Nav element not found!');
}

// Check localStorage
console.log('navCollapsed in localStorage:', localStorage.getItem('navCollapsed'));

// Force test the collapse
function forceTestCollapse() {
    console.log('\n=== Force Testing Collapse ===');
    const nav = document.getElementById('main-nav');
    const navToggleIcon = document.getElementById('nav-toggle-icon');
    const navText = document.getElementById('nav-text');
    const navLabels = document.querySelectorAll('.nav-label');
    
    if (nav) {
        console.log('Before:', nav.className);
        
        // Force collapse
        nav.classList.remove('w-56');
        nav.classList.add('w-20');
        if (navToggleIcon) {
            navToggleIcon.classList.remove('fa-chevron-left');
            navToggleIcon.classList.add('fa-chevron-right');
        }
        if (navText) navText.classList.add('hidden');
        navLabels.forEach(label => label.classList.add('hidden'));
        
        console.log('After:', nav.className);
        console.log('Collapse test completed');
    }
}

// Add to window for manual testing
window.forceTestCollapse = forceTestCollapse;
window.debugNav = function() {
    console.log('\n=== Manual Debug Check ===');
    console.log('Window width:', window.innerWidth);
    const nav = document.getElementById('main-nav');
    console.log('Nav classes:', nav ? nav.className : 'Nav not found');
    console.log('Should be collapsed?', window.innerWidth < 1000);
};

console.log('\nTo manually test, run: debugNav() or forceTestCollapse()');