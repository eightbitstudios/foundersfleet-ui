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
    
    # Remove duplicate AutoPilot Status sections and fix the div structure
    # Pattern to find the duplicate AutoPilot Status sections
    pattern = r'(<!-- AutoPilot Status -->.*?</div>\s*</div>\s*){2,}'
    
    # Replace with single instance
    replacement = '''<!-- AutoPilot Status -->
            <div class="mt-auto pt-6">
                <div class="px-6 py-4 border-t border-white/10">
                    <div class="flex items-center gap-2">
                        <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span class="text-white/70 text-sm">AutoPilot Active</span>
                    </div>
                </div>
            </div>'''
    
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)
    
    # Fix the extra closing divs at the end
    # Replace multiple closing divs with the correct structure
    content = re.sub(r'</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*<script', '</div>\n    </div>\n    \n    <script', content)
    
    # Save the updated file
    with open(file, 'w') as f:
        f.write(content)
    
    print(f"Fixed duplicate AutoPilot Status in {file}")

print("Done fixing duplicate AutoPilot Status sections")