#!/usr/bin/env python3
import os
import re

def remove_nav_toggle():
    """Remove the main nav toggle button and related functionality"""
    files = [
        'index.html', 'profile.html', 'founders.html', 'squads.html', 
        'flightplan.html', 'tools.html', 'founder-profile.html', 
        'usecase-detail.html', 'squad-detail.html'
    ]
    
    for filename in files:
        if os.path.exists(filename):
            try:
                with open(filename, 'r') as f:
                    content = f.read()
                
                # Remove the toggle button from the header
                content = re.sub(
                    r'<button onclick="toggleMainNav\(\)".*?</button>',
                    '',
                    content,
                    flags=re.DOTALL
                )
                
                # Update the header to remove justify-between since we no longer need it
                content = content.replace(
                    'class="px-4 h-full flex items-center justify-between"',
                    'class="px-4 h-full flex items-center"'
                )
                
                # Remove the collapsed nav button
                content = re.sub(
                    r'<!-- Collapsed Main Nav Button -->.*?</button>',
                    '',
                    content,
                    flags=re.DOTALL
                )
                
                # Remove the toggleMainNav function
                content = re.sub(
                    r'<script>\s*// Main Navigation toggle functionality.*?</script>',
                    '',
                    content,
                    flags=re.DOTALL
                )
                
                # Also remove any function toggleMainNav definitions
                content = re.sub(
                    r'function toggleMainNav\(\) \{.*?\}',
                    '',
                    content,
                    flags=re.DOTALL
                )
                
                # Remove the transition classes and id from main nav since it won't be collapsing
                content = content.replace(
                    'id="main-nav" class="w-56 bg-black flex flex-col h-screen sticky top-0 transition-all duration-300"',
                    'class="w-56 bg-black flex flex-col h-screen sticky top-0"'
                )
                
                # Remove id and transition from nav text
                content = content.replace(
                    'id="nav-text" class="text-white text-lg font-semibold transition-all duration-300 overflow-hidden whitespace-nowrap"',
                    'class="text-white text-lg font-semibold"'
                )
                
                # Clean up any empty script tags
                content = re.sub(
                    r'<script>\s*</script>',
                    '',
                    content,
                    flags=re.MULTILINE
                )
                
                with open(filename, 'w') as f:
                    f.write(content)
                
                print(f"✓ Updated {filename}")
            except Exception as e:
                print(f"✗ Error updating {filename}: {str(e)}")

if __name__ == "__main__":
    print("Removing nav toggle functionality...")
    remove_nav_toggle()
    print("Done!")