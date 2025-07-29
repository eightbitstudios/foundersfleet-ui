#!/usr/bin/env python3
import os
import re

# List of files that need fixing
files_to_fix = ['founders.html', 'flightplan.html', 'tools.html']

for file in files_to_fix:
    if not os.path.exists(file):
        continue
        
    with open(file, 'r') as f:
        content = f.read()
    
    # Find the autopilot-content div and fix its structure
    # Pattern to match from autopilot-content to the script tag
    pattern = r'(<!-- AutoPilot Content -->.*?<div class="autopilot-content[^"]*"[^>]*>.*?)(<!-- AutoPilot Status -->.*?</div>\s*</div>\s*</div>)(.*?</div>)(\s*<script)'
    
    # Replace with correct structure - AutoPilot Status should be inside autopilot-content
    def fix_structure(match):
        content_start = match.group(1)
        status_section = match.group(2)
        extra_divs = match.group(3)
        script_tag = match.group(4)
        
        # Clean up the status section
        status_clean = '''
            <!-- AutoPilot Status -->
            <div class="mt-auto pt-6">
                <div class="px-6 py-4 border-t border-white/10">
                    <div class="flex items-center gap-2">
                        <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span class="text-white/70 text-sm">AutoPilot Active</span>
                    </div>
                </div>
            </div>
        </div>'''
        
        # Return properly structured content
        return content_start + status_clean + '\n    </div>\n    \n' + script_tag
    
    content = re.sub(pattern, fix_structure, content, flags=re.DOTALL)
    
    # Save the updated file
    with open(file, 'w') as f:
        f.write(content)
    
    print(f"Fixed AutoPilot structure in {file}")

print("Done fixing AutoPilot structure")