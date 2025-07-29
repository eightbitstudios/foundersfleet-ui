#!/usr/bin/env python3
"""
Fix nav icon centering when collapsed and reorder action buttons
"""

import os
import re

def update_collapsed_nav_css(content):
    """Update CSS to properly center nav icons when collapsed."""
    # Find and update the collapsed nav CSS
    css_pattern = r'(#main-nav\.w-20 nav > div > a \{[^}]*justify-content: center;[^}]*\})'
    
    # Add new CSS rule for the icon wrapper
    new_css = """        /* Center navigation items when nav is collapsed */
        #main-nav.w-20 nav {
            padding-left: 0;
            padding-right: 0;
        }
        
        #main-nav.w-20 nav > div > a {
            padding-left: 0;
            padding-right: 0;
            justify-content: center;
            margin-left: 0;
            margin-right: 0;
        }
        
        #main-nav.w-20 nav > div > a > div:first-child {
            margin-left: auto;
            margin-right: auto;
        }
        
        #main-nav.w-20 .h-\\[76px\\] {
            padding-left: 0;
            padding-right: 0;
        }
        
        #main-nav.w-20 .h-\\[76px\\] > a {
            padding-left: 0;
            padding-right: 0;
            justify-content: center;
            width: 100%;
        }"""
    
    # Replace the entire collapsed nav CSS block
    pattern = r'        /\* Center navigation items when nav is collapsed \*/\s*#main-nav\.w-20[^}]*\}[^}]*\}[^}]*\}[^}]*\}[^}]*\}'
    content = re.sub(pattern, new_css, content, flags=re.DOTALL)
    
    return content

def reorder_action_buttons(content):
    """Reorder action buttons to put primary (white) buttons last."""
    # Pattern for action button groups
    patterns = [
        # Profile page - Edit Profile and Share buttons
        (
            r'(<button class="flex items-center gap-2 px-6 py-2 bg-white[^>]*onclick="editProfile\(\)"[^>]*>.*?</button>)\s*(<button class="flex items-center gap-2 px-4 py-2 bg-transparent[^>]*onclick="shareProfile\(\)"[^>]*>.*?</button>)',
            r'\2\n                        \1'
        ),
        # Founder profile page - Connect and Share buttons
        (
            r'(<button class="flex items-center gap-2 px-6 py-2 bg-white[^>]*onclick="connectWithFounder\(\)"[^>]*>.*?</button>)\s*(<button class="flex items-center gap-2 px-4 py-2 bg-transparent[^>]*onclick="shareProfile\(\)"[^>]*>.*?</button>)',
            r'\2\n                    \1'
        ),
        # Squad detail page - Join/Leave buttons
        (
            r'(<button id="joinButton"[^>]*class="flex items-center gap-2 px-6 py-2 bg-white[^>]*>.*?</button>)\s*(<button id="leaveButton"[^>]*class="[^"]*bg-transparent[^>]*>.*?</button>)',
            r'\2\n                    \1'
        ),
        # Squads page - Create Squad button (already last, but ensure spacing)
        (
            r'(<button class="flex items-center gap-2 px-4 py-2[^>]*onclick="showSquadFilterModal[^>]*>.*?</button>)\s*(<div id="activeEventFilters"[^>]*>.*?</div>)\s*<!-- Action Button -->\s*(<button class="flex items-center gap-2 px-6 py-2 bg-white[^>]*onclick="createSquad[^>]*>.*?</button>)',
            r'\1\n                    \2\n                    \n                    <!-- Action Button -->\n                    \3'
        )
    ]
    
    for pattern, replacement in patterns:
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    return content

def process_file(file_path):
    """Process a single HTML file."""
    with open(file_path, 'r') as f:
        content = f.read()
    
    original_content = content
    
    # Apply fixes
    content = update_collapsed_nav_css(content)
    content = reorder_action_buttons(content)
    
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