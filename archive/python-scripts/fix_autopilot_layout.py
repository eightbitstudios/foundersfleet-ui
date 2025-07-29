#!/usr/bin/env python3
"""
Script to fix AutoPilot layout positioning on Account and Squads pages
"""

import re

def fix_autopilot_layout(filepath):
    """Fix AutoPilot to be properly positioned as right sidebar"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find and extract the AutoPilot section
        autopilot_pattern = r'(<!-- Right Sidebar - AutoPilot -->.*?</script>)'
        autopilot_match = re.search(autopilot_pattern, content, re.DOTALL)
        
        if not autopilot_match:
            print(f"Could not find AutoPilot section in {filepath}")
            return False
            
        autopilot_section = autopilot_match.group(1)
        
        # Remove AutoPilot from its current position
        content = re.sub(autopilot_pattern, '', content, flags=re.DOTALL)
        
        # Find the main content closing div and insert AutoPilot before it
        # The pattern is: </main> followed by </div> (closing the main content area)
        # We want to insert AutoPilot after this but before </body>
        pattern = r'(</main>\s*</div>)'
        
        # Insert AutoPilot after the main content div
        replacement = r'\1\n\n' + autopilot_section
        content = re.sub(pattern, replacement, content, count=1, flags=re.DOTALL)
        
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed AutoPilot layout in {filepath}")
        return True
        
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    pages = ['profile.html', 'squads.html']
    
    for page in pages:
        fix_autopilot_layout(page)
    
    print("\nDone! AutoPilot layout positioning fixed.")

if __name__ == "__main__":
    main()