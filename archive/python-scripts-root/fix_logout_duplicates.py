#!/usr/bin/env python3
"""
Fix duplicate logout buttons in navigation files.
Removes logout from inside nav sections and ensures only one logout section
exists between </nav> and <!-- Nav Toggle -->
"""

import re
import os

# List of files to fix
files_to_fix = [
    'autopilot.html',
    'flightplan.html',
    'squad-detail.html',
    'squads.html',
    'founders.html',
    'profile.html',
    'dashboard.html',
    'usecase-detail.html',
    'fleetlog.html',
    'founder-profile.html'
]

def fix_logout_duplicates(file_path):
    """Fix duplicate logout buttons in a single file."""
    
    if not os.path.exists(file_path):
        print(f"Warning: {file_path} does not exist, skipping...")
        return False
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Step 1: Remove any logout links that are inside the nav section (before </nav>)
    # This pattern finds logout links that appear before the closing nav tag
    nav_logout_pattern = r'(<nav[^>]*>.*?)(<a[^>]*href="index\.html"[^>]*>(?:(?!</a>).)*?(?:sign-out-alt|Logout)(?:(?!</a>).)*?</a>)(.*?</nav>)'
    
    # Remove all logout links inside nav sections
    while True:
        match = re.search(nav_logout_pattern, content, re.DOTALL | re.IGNORECASE)
        if not match:
            break
        # Remove the logout link from inside the nav
        content = match.group(1) + match.group(3)
    
    # Step 2: Find the area between </nav> and <!-- Nav Toggle -->
    nav_toggle_pattern = r'(</nav>\s*)(.*?)(<!-- Nav Toggle -->)'
    match = re.search(nav_toggle_pattern, content, re.DOTALL)
    
    if match:
        before_nav_close = match.group(1)
        between_content = match.group(2)
        nav_toggle_comment = match.group(3)
        
        # Remove all existing logout sections in this area
        between_content = re.sub(
            r'<!-- Logout -->.*?</div>\s*',
            '',
            between_content,
            flags=re.DOTALL
        )
        
        # Also remove any standalone logout divs without comments
        between_content = re.sub(
            r'<div[^>]*>\s*<a[^>]*href="index\.html"[^>]*>(?:(?!</a>).)*?(?:sign-out-alt|Logout)(?:(?!</a>).)*?</a>\s*</div>\s*',
            '',
            between_content,
            flags=re.DOTALL
        )
        
        # Add exactly one logout section
        logout_section = """
        <!-- Logout -->
        <div class="px-4 py-2">
            <a href="index.html" class="flex items-center gap-3 px-4 py-3 text-white/50 rounded-lg hover:bg-white/10 hover:text-white/70 transition-all group">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center">
                    <i class="fas fa-sign-out-alt"></i>
                </div>
                <span class="nav-label font-medium">Logout</span>
            </a>
        </div>
        """
        
        # Reconstruct the content with proper spacing
        content = content[:match.start()] + before_nav_close + logout_section + '\n        ' + nav_toggle_comment + content[match.end():]
    
    # Only write if content changed
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Fixed {file_path}")
        return True
    else:
        print(f"  No changes needed for {file_path}")
        return False

def main():
    """Process all files."""
    print("Fixing duplicate logout buttons in navigation files...")
    print("=" * 50)
    
    fixed_count = 0
    
    for file_name in files_to_fix:
        if fix_logout_duplicates(file_name):
            fixed_count += 1
    
    print("=" * 50)
    print(f"Fixed {fixed_count} files")

if __name__ == "__main__":
    main()