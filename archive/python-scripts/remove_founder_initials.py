#!/usr/bin/env python3
import os
import re

# Remove the initials div from founder cards in founders.html
file = 'founders.html'

if os.path.exists(file):
    with open(file, 'r') as f:
        content = f.read()
    
    # Pattern to match and remove the initials div (e.g., <div class="text-xs text-gray-500 font-medium mb-1">BC</div>)
    pattern = r'<div class="text-xs text-gray-500 font-medium mb-1">[A-Z]{2}</div>\s*'
    content = re.sub(pattern, '', content)
    
    # Save the updated file
    with open(file, 'w') as f:
        f.write(content)
    
    print(f"Removed initials from {file}")

# Also check profile.html for similar initials in the profile card
file = 'profile.html'

if os.path.exists(file):
    with open(file, 'r') as f:
        content = f.read()
    
    # Pattern to match DB in the profile card
    # Looking for: <div class="absolute top-0 right-0 text-2xl font-bold" style="color: #000000;">DB</div>
    pattern = r'<div class="absolute top-0 right-0 text-2xl font-bold" style="color: #000000;">DB</div>\s*'
    content = re.sub(pattern, '', content)
    
    # Add signature icon if not already present for Don Bora
    if 'Don Bora' in content and 'fa-signature' not in content:
        # Find the h1 with Don Bora and add the signature icon after it
        pattern = r'(<h1 class="text-3xl font-bold mb-2" style="color: #000000;">Don Bora</h1>)'
        replacement = r'\1\n                            <i class="fa-solid fa-signature text-gray-600 text-sm mt-1" title="Verified Founder"></i>'
        content = re.sub(pattern, replacement, content)
    
    # Save the updated file
    with open(file, 'w') as f:
        f.write(content)
    
    print(f"Updated profile card in {file}")

print("Done removing initials and ensuring signature icons")