#!/usr/bin/env python3
"""
Update AutoPilot injector to dark theme across all HTML files
"""

import os
import re

def update_autopilot_injector(file_path):
    """Update the AutoPilot injector to use dark theme."""
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Check if file has the injector
    if 'autopilot-injector' not in content:
        return False
    
    # Pattern to find the injector
    injector_pattern = r'<!-- AutoPilot Message Injector -->\s*<div id="autopilot-injector"[^>]*>.*?</div>\s*</div>\s*</div>'
    
    # New dark-themed injector
    new_injector = """<!-- AutoPilot Message Injector -->
    <div id="autopilot-injector" class="fixed bottom-6 right-6 hidden z-50">
        <div class="bg-gray-900 rounded-lg shadow-2xl p-4 max-w-sm border border-white/20">
            <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-[#00B8D9] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fa-solid fa-paper-plane text-white"></i>
                </div>
                <div class="flex-1">
                    <h4 class="font-semibold mb-1 text-white">AutoPilot Tip</h4>
                    <p id="autopilot-message" class="text-sm text-[#00B8D9]"></p>
                    <div class="flex gap-2 mt-3">
                        <button onclick="dismissAutoPilotMessage()" class="text-xs text-white/50 hover:text-white/70">Dismiss</button>
                        <button onclick="openAutoPilot()" class="text-xs text-[#00B8D9] font-semibold hover:underline">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>"""
    
    # Replace the injector
    content = re.sub(injector_pattern, new_injector, content, flags=re.DOTALL)
    
    # Write back
    with open(file_path, 'w') as f:
        f.write(content)
    
    return True

# Process all HTML files
html_files = [f for f in os.listdir('.') if f.endswith('.html')]

updated_files = []
for file in html_files:
    if update_autopilot_injector(file):
        updated_files.append(file)
        print(f"✓ Updated {file}")

print(f"\nUpdated {len(updated_files)} files with dark AutoPilot injector")