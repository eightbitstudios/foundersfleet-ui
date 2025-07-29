#!/usr/bin/env python3
"""
Clean up action bar spacing after moving toggle button
"""

import os
import re

def clean_action_bar(content):
    """Clean up the action bar spacing."""
    # Remove the gap-6 and mr-5 from action bars since toggle is gone
    content = re.sub(
        r'<div class="flex items-center gap-6">\s*<!-- Back Button',
        r'<div class="flex items-center">\n                    <!-- Back Button',
        content
    )
    
    # Clean up AutoPilot page which has different structure
    content = re.sub(
        r'<!-- Nav Toggle -->\s*<div class="flex items-center gap-6">\s*<h1',
        r'<!-- Page Title -->\n                    <h1',
        content
    )
    
    # Fix tabs/navigation sections that might have extra gap
    content = re.sub(
        r'<div class="flex items-center gap-6">\s*<!-- Filter Tabs',
        r'<div class="flex items-center">\n                    <!-- Filter Tabs',
        content
    )
    
    # Fix the fleetlog page specific issue
    content = re.sub(
        r'<div class="flex items-center gap-6">\s*<!-- Tabs',
        r'<div class="flex items-center">\n                    <!-- Tabs',
        content
    )
    
    return content

def process_file(file_path):
    """Process a single HTML file."""
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Skip if not a main page
    if 'main-nav' not in content:
        return False
    
    original_content = content
    
    # Clean action bar
    content = clean_action_bar(content)
    
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
    if process_file(file):
        updated_files.append(file)
        print(f"✓ Cleaned {file}")

print(f"\nCleaned {len(updated_files)} files")