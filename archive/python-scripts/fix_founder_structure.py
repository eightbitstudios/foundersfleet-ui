#!/usr/bin/env python3
import os
import re

# Fix the structure issues in founders.html
file = 'founders.html'

if os.path.exists(file):
    with open(file, 'r') as f:
        content = f.read()
    
    # Fix the extra closing div and move boarding-pass-tag to the correct position
    # Pattern to fix: </div>\n                                </div>\n                                <div class="boarding-pass-tag">
    pattern = r'</div>\s*</div>\s*<div class="boarding-pass-tag">'
    replacement = '</div>\n                                <div class="text-right">\n                                    <div class="boarding-pass-tag">'
    content = re.sub(pattern, replacement, content)
    
    # Also fix the Alex Rivera card structure
    pattern2 = r'<div class="flex items-center gap-4 mb-4">\s*<div class="flex-1">'
    replacement2 = '<div class="flex items-center justify-between mb-4">\n                        <div class="flex-1">'
    content = re.sub(pattern2, replacement2, content)
    
    # Fix the missing closing div for boarding-pass-tag containers
    pattern3 = r'(<div class="boarding-pass-tag">FF\d+</div>)'
    replacement3 = r'\1\n                                </div>'
    content = re.sub(pattern3, replacement3, content)
    
    # Save the updated file
    with open(file, 'w') as f:
        f.write(content)
    
    print(f"Fixed founder card structure in {file}")

print("Done fixing founder structure")