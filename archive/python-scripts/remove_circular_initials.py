#!/usr/bin/env python3
import os
import re

# Remove the circular initials from founder cards
file = 'founders.html'

if os.path.exists(file):
    with open(file, 'r') as f:
        content = f.read()
    
    # Pattern to remove the circular initial divs
    # Example: <div class="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-semibold">TX</div>
    pattern = r'<div class="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-semibold">[A-Z]{2}</div>\s*'
    content = re.sub(pattern, '', content)
    
    # After removing the circular initials, we need to adjust the structure
    # Change from "flex items-center gap-4" to just "flex-1" for consistency
    pattern2 = r'<div class="flex items-center gap-4">\s*<div class="flex-1">'
    replacement2 = '<div class="flex-1">'
    content = re.sub(pattern2, replacement2, content)
    
    # Save the updated file
    with open(file, 'w') as f:
        f.write(content)
    
    print(f"Removed circular initials from {file}")

print("Done removing circular initials")