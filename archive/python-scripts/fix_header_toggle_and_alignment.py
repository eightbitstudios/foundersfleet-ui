#!/usr/bin/env python3
"""
Fix remaining header toggle buttons and tab alignment
"""

import os
import re

def remove_header_toggle(content):
    """Remove toggle button from header action bars."""
    # Pattern for index.html style toggle in header
    pattern1 = r'<div class="flex items-center h-full">\s*<button onclick="toggleMainNav\(\)"[^>]*>.*?</button>\s*</div>'
    content = re.sub(pattern1, '', content, flags=re.DOTALL)
    
    # Pattern for autopilot.html style toggle in header (with gap-6)
    pattern2 = r'<!-- Nav Toggle -->\s*<div class="flex items-center gap-6">\s*<button onclick="toggleMainNav\(\)"[^>]*>.*?</button>'
    replacement2 = r'<!-- Page Title -->\n                    <div class="flex items-center gap-6">'
    content = re.sub(pattern2, replacement2, content, flags=re.DOTALL)
    
    return content

def fix_tab_alignment(content):
    """Fix tab alignment by removing gap-6 from tab containers."""
    # Remove gap-6 from tab containers in action bars
    pattern = r'<div class="flex items-center gap-6">\s*<!-- (Account Tabs|Founders Tabs|Profile Tabs)'
    replacement = r'<div class="flex items-center">\n                    <!-- \1'
    content = re.sub(pattern, replacement, content)
    
    return content

def process_file(file_path):
    """Process a single HTML file."""
    with open(file_path, 'r') as f:
        content = f.read()
    
    original_content = content
    
    # Apply fixes
    content = remove_header_toggle(content)
    content = fix_tab_alignment(content)
    
    # Only write if changes were made
    if content != original_content:
        with open(file_path, 'w') as f:
            f.write(content)
        return True
    
    return False

# Files to fix
files_to_fix = ['index.html', 'autopilot.html', 'profile.html', 'founders.html']

updated_files = []
for file in files_to_fix:
    if os.path.exists(file):
        if process_file(file):
            updated_files.append(file)
            print(f"✓ Fixed {file}")
        else:
            print(f"  No changes needed for {file}")
    else:
        print(f"✗ File not found: {file}")

print(f"\nFixed {len(updated_files)} files")