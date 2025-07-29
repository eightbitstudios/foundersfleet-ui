#!/usr/bin/env python3
import os
import re

# List of HTML files to update
html_files = [
    'index.html',
    'profile.html',
    'founders.html',
    'squads.html',
    'flightplan.html',
    'tools.html',
    'fleetlog.html',
    'founder-profile.html',
    'squad-detail.html',
    'usecase-detail.html'
]

# Updated AutoPilot navigation item with paper plane icon
autopilot_nav_update = '''                <a href="autopilot.html" class="flex items-center gap-3 px-4 py-3 text-white/70 rounded-lg hover:bg-white/10 hover:text-white transition-all">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center">
                        <i class="fa-solid fa-paper-plane"></i>
                    </div>
                    <span class="nav-label font-medium">AutoPilot</span>
                </a>'''

# Updated AutoPilot message injector
autopilot_injector_update = '''    <!-- AutoPilot Message Injector -->
    <div id="autopilot-injector" class="fixed bottom-6 right-6 hidden z-50">
        <div class="bg-white rounded-lg shadow-2xl p-4 max-w-sm border border-gray-200">
            <div class="flex items-start gap-3">
                <div class="w-10 h-10 bg-[#00B8D9] rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fa-solid fa-paper-plane text-white"></i>
                </div>
                <div class="flex-1">
                    <h4 class="font-semibold mb-1 text-gray-900">AutoPilot Tip</h4>
                    <p id="autopilot-message" class="text-sm text-[#00B8D9]"></p>
                    <div class="flex gap-2 mt-3">
                        <button onclick="dismissAutoPilotMessage()" class="text-xs text-gray-500 hover:text-gray-700">Dismiss</button>
                        <button onclick="openAutoPilot()" class="text-xs text-[#00B8D9] font-semibold hover:underline">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>'''

for file in html_files:
    if os.path.exists(file):
        with open(file, 'r') as f:
            content = f.read()
        
        original_content = content
        
        # Update AutoPilot nav icon to paper plane
        autopilot_nav_pattern = r'<a href="autopilot\.html"[^>]*>.*?</a>'
        match = re.search(autopilot_nav_pattern, content, re.DOTALL)
        if match:
            content = content.replace(match.group(0), autopilot_nav_update)
        
        # Update AutoPilot message injector
        injector_pattern = r'<!-- AutoPilot Message Injector -->.*?</div>\s*</div>\s*</div>'
        match = re.search(injector_pattern, content, re.DOTALL)
        if match:
            content = content.replace(match.group(0), autopilot_injector_update)
        
        # Write the updated content if changes were made
        if content != original_content:
            with open(file, 'w') as f:
                f.write(content)
            print(f"Updated {file}")
        else:
            print(f"No changes needed for {file}")
    else:
        print(f"File {file} not found")

print("Done updating AutoPilot styling")