#!/usr/bin/env python3
"""
Add responsive navigation CSS to all HTML files
"""

import os
import re

def add_responsive_nav_css(file_path):
    """Add responsive navigation CSS media query to HTML file"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already has the responsive nav CSS
    if '@media (max-width: 999px)' in content:
        print(f"Skipping {file_path} - already has responsive nav CSS")
        return
    
    # CSS to add
    responsive_css = '''    /* Responsive Navigation - Force collapse at 1000px */
    @media (max-width: 999px) {
        /* Force nav to collapsed state */
        #main-nav {
            width: 5rem !important; /* w-20 equivalent */
        }
        
        /* Hide nav text and labels */
        #nav-text,
        .nav-label {
            display: none !important;
        }
        
        /* Center nav items when collapsed */
        #main-nav nav > div > a {
            padding-left: 0 !important;
            padding-right: 0 !important;
            justify-content: center !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            width: 100% !important;
        }
        
        /* Ensure toggle icon changes */
        #main-nav.w-56 #nav-toggle-icon::before {
            content: "\\f054" !important; /* fa-chevron-right */
        }
    }
    '''
    
    # Find the closing style tag and insert before it
    pattern = r'(</style>)'
    
    if re.search(pattern, content):
        content = re.sub(pattern, responsive_css + '\n    \\1', content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Updated {file_path}")
    else:
        print(f"Warning: No </style> tag found in {file_path}")

# Process all HTML files
html_files = [
    'index.html',
    'autopilot.html',
    'flightplan.html',
    'fleetlog.html', 
    'founder-profile.html',
    'founders.html',
    'profile.html',
    'squad-detail.html',
    'squads.html',
    'tools.html',
    'usecase-detail.html'
]

for file in html_files:
    if os.path.exists(file):
        add_responsive_nav_css(file)

print("\nResponsive navigation CSS added to all HTML files!")