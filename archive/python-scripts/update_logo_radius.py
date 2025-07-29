#!/usr/bin/env python3
import os
import re

# List of files that need the logo radius update
files_to_update = ['profile.html', 'founders.html', 'squads.html', 'tools.html', 'flightplan.html', 
                   'founder-profile.html', 'squad-detail.html', 'usecase-detail.html', 'autopilot.html', 'fleetlog.html']

for file in files_to_update:
    if not os.path.exists(file):
        continue
        
    with open(file, 'r') as f:
        content = f.read()
    
    # Update border-radius from 8px to 4px
    content = re.sub(r'(\.logo-boarding-pass\s*{[^}]*border-radius:\s*)8px', r'\g<1>4px', content)
    
    # Save the updated file
    with open(file, 'w') as f:
        f.write(content)
    
    print(f"Updated logo radius in {file}")

print("Done updating logo radius")