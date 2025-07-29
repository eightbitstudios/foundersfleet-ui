#!/usr/bin/env python3
import os
import re

# Fix the complete structure of founders.html
file = 'founders.html'

if os.path.exists(file):
    with open(file, 'r') as f:
        content = f.read()
    
    # First, let's fix the basic structure of each founder card
    # The correct structure should be:
    # <div class="boarding-pass">
    #     <div class="boarding-pass-header">
    #         <div class="flex items-center justify-between mb-4">
    #             <div class="flex-1">...</div>
    #             <div class="text-right">...</div>
    #         </div>
    #         <p class="description">...</p>
    #     </div>
    #     <div class="boarding-pass-divider">...</div>
    #     <div class="boarding-pass-body">...</div>
    # </div>
    
    # Fix the extra closing divs after the header section
    pattern1 = r'(<div class="text-right">\s*<div class="boarding-pass-tag">FF\d+</div>\s*</div>)\s*</div>\s*</div>\s*(<p class="text-sm line-clamp-2"[^>]*>.*?</p>)\s*</div>'
    replacement1 = r'\1\n                            </div>\n                            \2\n                        </div>'
    content = re.sub(pattern1, replacement1, content, flags=re.DOTALL)
    
    # Make sure the boarding pass body has proper closing tags
    pattern2 = r'(<div class="boarding-pass-body[^"]*">.*?</div>)\s*</div>\s*</div>'
    replacement2 = r'\1\n                        </div>\n                    </div>'
    content = re.sub(pattern2, replacement2, content, flags=re.DOTALL)
    
    # Fix any remaining structural issues with proper indentation
    # Make sure each boarding-pass has exactly one closing div
    lines = content.split('\n')
    fixed_lines = []
    in_boarding_pass = False
    div_count = 0
    
    for line in lines:
        if '<div class="boarding-pass' in line:
            in_boarding_pass = True
            div_count = 1
        elif in_boarding_pass and '<div' in line:
            div_count += line.count('<div') - line.count('</div>')
        elif in_boarding_pass and '</div>' in line:
            div_count -= line.count('</div>')
            if div_count == 0:
                in_boarding_pass = False
        
        fixed_lines.append(line)
    
    content = '\n'.join(fixed_lines)
    
    # Save the updated file
    with open(file, 'w') as f:
        f.write(content)
    
    print(f"Fixed complete structure in {file}")

print("Done fixing founders structure")