#!/usr/bin/env python3
"""
Script to fix the placement of Settings and Log sections in profile.html
"""

import re

def fix_sections_placement(filepath):
    """Move Settings and Log sections inside the main tag"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract the Settings section
        settings_pattern = r'(<!-- Settings Section \(Hidden by default\) -->.*?</div>\s*</div>\s*</div>)'
        settings_match = re.search(settings_pattern, content, re.DOTALL)
        
        if not settings_match:
            print("Could not find Settings section")
            return False
            
        settings_section = settings_match.group(1)
        
        # Extract the Log section  
        log_pattern = r'(<!-- Log Section \(Hidden by default\) -->.*?</div>\s*</div>\s*</div>)'
        log_match = re.search(log_pattern, content, re.DOTALL)
        
        if not log_match:
            print("Could not find Log section")
            return False
            
        log_section = log_match.group(1)
        
        # Remove both sections from their current position
        content = re.sub(settings_pattern, '', content, flags=re.DOTALL)
        content = re.sub(log_pattern, '', content, flags=re.DOTALL)
        
        # Find the closing main tag and insert sections before it
        main_pattern = r'(</main>)'
        replacement = '\n        ' + settings_section + '\n        \n        ' + log_section + '\n        \\1'
        
        content = re.sub(main_pattern, replacement, content, count=1)
        
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed sections placement in {filepath}")
        return True
        
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    fix_sections_placement('profile.html')
    print("\nDone! Sections placement fixed.")

if __name__ == "__main__":
    main()