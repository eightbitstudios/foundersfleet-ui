#!/usr/bin/env python3
import os
import re

# List of files that need the nav icon centering fix
files_to_fix = ['profile.html', 'founders.html', 'squads.html', 'tools.html', 'flightplan.html', 
                'founder-profile.html', 'squad-detail.html', 'usecase-detail.html', 'autopilot.html', 'fleetlog.html']

# Old CSS pattern to replace
old_css_pattern = r'''        /\* Center navigation items when nav is collapsed \*/
        #main-nav\.w-20 nav > div > a \{
            padding-left: 0;
            padding-right: 0;
            justify-content: center;
        \}
        
        #main-nav\.w-20 \.h-\\\[76px\\\] > a \{
            padding-left: 0;
            padding-right: 0;
            justify-content: center;
        \}'''

# New CSS for proper centering
new_css = '''        /* Center navigation items when nav is collapsed */
        #main-nav.w-20 nav {
            padding-left: 0;
            padding-right: 0;
        }
        
        #main-nav.w-20 nav > div > a {
            padding-left: 0;
            padding-right: 0;
            justify-content: center;
            margin-left: 0;
            margin-right: 0;
        }
        
        #main-nav.w-20 .h-\\[76px\\] {
            padding-left: 0;
            padding-right: 0;
        }
        
        #main-nav.w-20 .h-\\[76px\\] > a {
            padding-left: 0;
            padding-right: 0;
            justify-content: center;
            width: 100%;
        }'''

for file in files_to_fix:
    if not os.path.exists(file):
        continue
        
    with open(file, 'r') as f:
        content = f.read()
    
    # Replace the old CSS with the new CSS
    new_content = re.sub(old_css_pattern, new_css, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(file, 'w') as f:
            f.write(new_content)
        print(f"Fixed nav centering CSS in {file}")
    else:
        print(f"Could not find old CSS pattern in {file}")

print("Done fixing nav centering CSS")