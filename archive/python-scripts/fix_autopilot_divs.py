#!/usr/bin/env python3
import os

# List of files that need the closing div fixed
files_to_fix = ['founders.html', 'flightplan.html', 'tools.html']

for file in files_to_fix:
    if not os.path.exists(file):
        continue
        
    with open(file, 'r') as f:
        content = f.read()
    
    # Fix the double closing div issue
    content = content.replace('</div></div>', '</div>')
    
    # Save the updated file
    with open(file, 'w') as f:
        f.write(content)
    
    print(f"Fixed closing divs in {file}")

print("Done fixing closing divs")