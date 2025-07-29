#!/usr/bin/env python3
"""
Final fix for squads.html structure
"""

import re

def final_fix_squads():
    """Final fix for the squads.html structure"""
    
    # Read the file
    with open('squads.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix the messy div structure before AutoPilot
    # Replace the problematic section with clean structure
    pattern = r'(\s*</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*</main>\s*</div>)'
    replacement = '''                </div>
            </div>
        </div>
        </main>
    </div>'''
    
    content = re.sub(pattern, replacement, content)
    
    # Write the fixed content
    with open('squads.html', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Applied final fix to squads.html")

if __name__ == "__main__":
    final_fix_squads()