#!/usr/bin/env python3
import os
import re

def simplify_nav_toggle():
    """Simplify the nav toggle script by removing complex padding logic"""
    files = [
        'index.html', 'profile.html', 'founders.html', 'squads.html', 
        'flightplan.html', 'tools.html', 'founder-profile.html', 
        'usecase-detail.html'
    ]
    
    for filename in files:
        if os.path.exists(filename):
            try:
                with open(filename, 'r') as f:
                    content = f.read()
                
                # Pattern to find and replace the padding update sections
                # For collapse section
                content = re.sub(
                    r'// Update padding\s*\n\s*nav\.querySelector.*?\.forEach.*?\n.*?\n.*?\n.*?\}\);',
                    '// Text will be hidden by opacity transition',
                    content,
                    flags=re.MULTILINE | re.DOTALL
                )
                
                # For expand section
                content = re.sub(
                    r'// Update padding\s*\n\s*Array\.from.*?\.forEach.*?\n.*?\n.*?\n.*?\n.*?\}\);',
                    '// Text will be shown by opacity transition',
                    content,
                    flags=re.MULTILINE | re.DOTALL
                )
                
                # Also fix any remaining complex padding logic
                content = re.sub(
                    r'nav\.querySelectorAll\(.*?\)\.forEach.*?\n.*?\n.*?\n.*?\}\);',
                    '',
                    content,
                    flags=re.MULTILINE | re.DOTALL
                )
                
                with open(filename, 'w') as f:
                    f.write(content)
                
                print(f"✓ Simplified {filename}")
            except Exception as e:
                print(f"✗ Error updating {filename}: {str(e)}")

if __name__ == "__main__":
    print("Simplifying nav toggle scripts...")
    simplify_nav_toggle()
    print("Done!")