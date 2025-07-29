#!/usr/bin/env python3
"""
Fix duplicate class attribute syntax errors in back buttons
"""

import re

def fix_back_button_syntax(file_path):
    """Fix the duplicate class attribute in the back button"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find and fix the duplicate class attribute in the back button
    # Pattern: <button class="ml-8" onclick="..." class="...">
    pattern = r'(<button class="ml-8")(.*?)(onclick="[^"]+")(\s+class="[^"]+">)'
    
    def replace_func(match):
        # Combine the two class attributes into one
        return f'{match.group(1)} {match.group(3)} class="ml-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors">'
    
    content = re.sub(pattern, replace_func, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Fixed back button syntax in {file_path}")

# Fix the files with syntax errors
files_to_fix = [
    'squad-detail.html',
    'usecase-detail.html'
]

for file in files_to_fix:
    fix_back_button_syntax(file)

print("\nBack button syntax errors fixed!")