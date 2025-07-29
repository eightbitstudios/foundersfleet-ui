#!/usr/bin/env python3
import os
import re

# List of files that need the logo update
files_to_update = ['profile.html', 'founders.html', 'squads.html', 'tools.html', 'flightplan.html', 
                   'founder-profile.html', 'squad-detail.html', 'usecase-detail.html', 'autopilot.html', 'fleetlog.html']

# CSS to add for the boarding pass logo
logo_css = '''        
        /* Boarding pass style logo */
        .logo-boarding-pass {
            position: relative;
            background: white;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            overflow: visible;
        }
        
        .logo-boarding-pass::before,
        .logo-boarding-pass::after {
            content: '';
            position: absolute;
            width: 12px;
            height: 12px;
            background: black;
            border-radius: 50%;
            top: 50%;
            transform: translateY(-50%);
        }
        
        .logo-boarding-pass::before {
            left: -6px;
        }
        
        .logo-boarding-pass::after {
            right: -6px;
        }'''

for file in files_to_update:
    if not os.path.exists(file):
        continue
        
    with open(file, 'r') as f:
        content = f.read()
    
    # First, add the CSS if it doesn't exist
    if 'logo-boarding-pass' not in content:
        # Find the closing style tag and add CSS before it
        content = re.sub(r'(\s*)(</style>)', logo_css + r'\n\1\2', content)
    
    # Replace the home icon with F
    old_logo = r'<div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black">\s*<i class="fas fa-home text-sm"></i>\s*</div>'
    new_logo = '''<div class="logo-boarding-pass">
                    <span class="text-black font-bold text-lg">F</span>
                </div>'''
    
    content = re.sub(old_logo, new_logo, content)
    
    # Save the updated file
    with open(file, 'w') as f:
        f.write(content)
    
    print(f"Updated logo in {file}")

print("Done updating logos")