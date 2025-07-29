#!/usr/bin/env python3
"""
Script to fix AutoPilot positioning on Account and Squads pages
"""

import re

def fix_autopilot_position(filepath):
    """Move AutoPilot to correct position in page structure"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find and extract the AutoPilot section
        autopilot_pattern = r'(<!-- Right Sidebar - AutoPilot -->.*?)(</body>)'
        autopilot_match = re.search(autopilot_pattern, content, re.DOTALL)
        
        if not autopilot_match:
            print(f"Could not find AutoPilot section in {filepath}")
            return False
            
        autopilot_section = autopilot_match.group(1)
        
        # Remove AutoPilot from its current position
        content = re.sub(autopilot_pattern, r'\2', content, flags=re.DOTALL)
        
        # Find the correct position - after the main content div and before closing body
        # Look for pattern where we have the main flex div closing
        pattern = r'(</main>\s*</div>)(.*?)(</body>)'
        
        def replacer(match):
            return match.group(1) + '\n\n' + autopilot_section + match.group(3)
        
        # Insert AutoPilot in the correct position
        content = re.sub(pattern, replacer, content, flags=re.DOTALL)
        
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed AutoPilot position in {filepath}")
        return True
        
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    pages = ['profile.html', 'squads.html']
    
    for page in pages:
        fix_autopilot_position(page)
    
    print("\nDone! AutoPilot positioning fixed.")

if __name__ == "__main__":
    main()