#!/usr/bin/env python3
"""
Fix nav icon centering and action bar tab alignment
"""

import os
import re

def update_collapsed_nav_css(content):
    """Update CSS to properly center nav icons when collapsed."""
    # Find and replace the collapsed nav CSS section
    css_pattern = r'(#main-nav\.w-20 nav > div > a > div:first-child \{[^}]*\})'
    
    # Replace with better centering that accounts for the icon container
    new_css = """#main-nav.w-20 nav > div > a > div:first-child {
            margin-left: 0;
            margin-right: 0;
        }
        
        #main-nav.w-20 nav > div > a {
            padding-left: 0;
            padding-right: 0;
            justify-content: center;
            margin-left: 0;
            margin-right: 0;
            width: 100%;
        }
        
        #main-nav.w-20 nav > div {
            padding-left: 0;
            padding-right: 0;
        }"""
    
    content = re.sub(css_pattern, new_css, content)
    
    return content

def align_action_bar_tabs(content):
    """Align action bar tabs with frosted container."""
    # Add padding to the left of tabs to align with main content
    patterns = [
        # Profile page tabs
        (
            r'<div class="flex items-center">\s*<!-- Account Tabs -->',
            r'<div class="flex items-center">\n                    <!-- Account Tabs -->'
        ),
        # Add left padding to tab containers to align with content
        (
            r'(<div class="max-w-\[1000px\] mx-auto h-\[76px\] flex items-center justify-between">)',
            r'\1'
        ),
        # Update tab containers to have proper padding
        (
            r'<!-- (Account Tabs|Community Tabs|Squad Tabs|Filter Tabs|Tools Filter Tabs|Tabs) -->\s*<div class="flex gap-4">',
            r'<!-- \1 -->\n                    <div class="flex gap-4 pl-8">'
        ),
        # Flightplan specific
        (
            r'<!-- Stage Tabs -->\s*<div class="flex gap-6">',
            r'<!-- Stage Tabs -->\n                    <div class="flex gap-6 pl-8">'
        ),
        # Fix back button alignment
        (
            r'<!-- Back Button -->\s*<button onclick="window.location.href',
            r'<!-- Back Button -->\n                    <button class="ml-8" onclick="window.location.href'
        )
    ]
    
    for pattern, replacement in patterns:
        content = re.sub(pattern, replacement, content, flags=re.MULTILINE)
    
    return content

def process_file(file_path):
    """Process a single HTML file."""
    with open(file_path, 'r') as f:
        content = f.read()
    
    original_content = content
    
    # Apply fixes
    content = update_collapsed_nav_css(content)
    content = align_action_bar_tabs(content)
    
    # Only write if changes were made
    if content != original_content:
        with open(file_path, 'w') as f:
            f.write(content)
        return True
    
    return False

# Process all HTML files
html_files = [f for f in os.listdir('.') if f.endswith('.html')]

updated_files = []
for file in html_files:
    if os.path.exists(file):
        if process_file(file):
            updated_files.append(file)
            print(f"✓ Updated {file}")

print(f"\nUpdated {len(updated_files)} files")