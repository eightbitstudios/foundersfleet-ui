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
    
    # Remove the AutoPilot Status section that's outside the content div
    # This pattern matches the status section between the content div and the closing autopilot div
    pattern = r'</div>\s*<!-- AutoPilot Status -->\s*<div class="(?:mt-auto )?px-6 py-6 border-t border-white/10">\s*<div class="flex items-center gap-2">\s*<div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>\s*<span class="text-white/70 text-sm">AutoPilot Active</span>\s*</div>\s*</div>'
    
    # First, remove any existing AutoPilot Status sections
    content = re.sub(pattern, '</div>', content, flags=re.DOTALL)
    
    # Also check for the pattern without the HTML comment
    pattern2 = r'</div>\s*<div class="px-6 py-6 border-t border-white/10">\s*<div class="flex items-center gap-2">\s*<div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>\s*<span class="text-white/70 text-sm">AutoPilot Active</span>\s*</div>\s*</div>'
    content = re.sub(pattern2, '</div>', content, flags=re.DOTALL)
    
    # Now add the AutoPilot Status inside the autopilot-content div
    # Find the closing tag of autopilot-content div
    pattern3 = r'(<!-- Results/Responses Area -->.*?</div>\s*</div>)\s*(</div>)\s*(?=</div>)'
    
    replacement = r'''\1
            
            <!-- AutoPilot Status -->
            <div class="mt-auto pt-6">
                <div class="px-6 py-4 border-t border-white/10">
                    <div class="flex items-center gap-2">
                        <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span class="text-white/70 text-sm">AutoPilot Active</span>
                    </div>
                </div>
            </div>
        \2'''
    
    content = re.sub(pattern3, replacement, content, flags=re.DOTALL)
    
    # Save the updated file
    with open(file, 'w') as f:
        f.write(content)
    
    print(f"Fixed AutoPilot Status in {file}")

print("Done fixing AutoPilot Status placement")