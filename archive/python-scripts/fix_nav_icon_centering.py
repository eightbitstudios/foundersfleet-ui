#!/usr/bin/env python3
import os
import re

# List of files that need the nav icon centering fix
files_to_fix = ['profile.html', 'founders.html', 'squads.html', 'tools.html', 'flightplan.html', 
                'founder-profile.html', 'squad-detail.html', 'usecase-detail.html', 'autopilot.html', 'fleetlog.html']

# CSS to add for centering nav icons when collapsed
nav_centering_css = '''        /* Center navigation items when nav is collapsed */
        #main-nav.w-20 nav > div > a {
            padding-left: 0;
            padding-right: 0;
            justify-content: center;
        }
        
        #main-nav.w-20 .h-\\[76px\\] > a {
            padding-left: 0;
            padding-right: 0;
            justify-content: center;
        }
        '''

for file in files_to_fix:
    if not os.path.exists(file):
        continue
        
    with open(file, 'r') as f:
        content = f.read()
    
    # Check if the CSS already exists
    if '#main-nav.w-20 nav > div > a' in content:
        print(f"Skipping {file} - CSS already exists")
        continue
    
    # Find the style tag and add the CSS after .hidden rule
    pattern = r'(\s*\.hidden\s*{\s*display:\s*none\s*!important;\s*}\s*)'
    replacement = r'\1\n' + nav_centering_css
    
    new_content = re.sub(pattern, replacement, content)
    
    # If no change was made, try a different pattern
    if new_content == content:
        # Try to find the opening of the style tag
        pattern2 = r'(<style>\s*\/\*[^*]*\*\/\s*)'
        replacement2 = r'\1' + nav_centering_css + '\n        '
        new_content = re.sub(pattern2, replacement2, content)
    
    if new_content != content:
        with open(file, 'w') as f:
            f.write(new_content)
        print(f"Fixed nav icon centering in {file}")
    else:
        print(f"Could not find insertion point in {file}")

print("Done fixing nav icon centering")