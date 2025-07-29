#!/usr/bin/env python3
"""
Update Font Awesome to latest version to support all icons
"""

import os
import re

def update_fontawesome(content):
    """Update Font Awesome CDN link to latest version."""
    # Update from 6.0.0 to 6.5.1 (latest stable)
    content = re.sub(
        r'https://cdnjs\.cloudflare\.com/ajax/libs/font-awesome/6\.0\.0/css/all\.min\.css',
        r'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        content
    )
    
    return content

def process_file(file_path):
    """Process a single HTML file."""
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Skip if no font-awesome link
    if 'font-awesome' not in content:
        return False
    
    original_content = content
    
    # Update Font Awesome
    content = update_fontawesome(content)
    
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
        print(f"✓ Updated {file}")

print(f"\nUpdated {len(updated_files)} files with Font Awesome 6.5.1")