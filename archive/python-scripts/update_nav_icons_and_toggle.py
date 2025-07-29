#!/usr/bin/env python3
"""
Update navigation icons and move toggle button to lower left
"""

import os
import re

def update_nav_icons(content):
    """Update the navigation icons."""
    # Account icon: fa-user -> fa-solid fa-gear
    content = re.sub(
        r'<i class="fas fa-user"></i>(\s*</div>\s*<span[^>]*>Account</span>)',
        r'<i class="fa-solid fa-gear"></i>\1',
        content
    )
    
    # Founders icon: fas fa-users -> fa-solid fa-address-book
    content = re.sub(
        r'<i class="fas fa-users"></i>(\s*</div>\s*<span[^>]*>Founders</span>)',
        r'<i class="fa-solid fa-address-book"></i>\1',
        content
    )
    
    # Squads icon: fas fa-user-group -> fa-solid fa-people-group
    content = re.sub(
        r'<i class="fas fa-user-group"></i>(\s*</div>\s*<span[^>]*>Squads</span>)',
        r'<i class="fa-solid fa-people-group"></i>\1',
        content
    )
    
    return content

def move_nav_toggle(content):
    """Move the nav toggle from action bar to nav sidebar."""
    # Remove toggle from action bar
    toggle_pattern = r'<!-- Nav Toggle -->\s*<button onclick="toggleMainNav\(\)"[^>]*>.*?</button>'
    content = re.sub(toggle_pattern, '', content, flags=re.DOTALL)
    
    # Add toggle to bottom of nav (before closing divs of main-nav)
    nav_pattern = r'(</nav>\s*)(<!-- Removed AutoPilot[^>]*-->)?\s*(</div>)'
    replacement = r'''\1
        
        <!-- Nav Toggle -->
        <div class="px-4 py-4">
            <button onclick="toggleMainNav()" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <i id="nav-toggle-icon" class="fas fa-chevron-left text-white text-sm"></i>
            </button>
        </div>\3'''
    
    content = re.sub(nav_pattern, replacement, content)
    
    return content

def process_file(file_path):
    """Process a single HTML file."""
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Skip if not a main page with navigation
    if 'main-nav' not in content:
        return False
    
    original_content = content
    
    # Update icons
    content = update_nav_icons(content)
    
    # Move toggle
    content = move_nav_toggle(content)
    
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

print(f"\nUpdated {len(updated_files)} files with new nav icons and toggle position")