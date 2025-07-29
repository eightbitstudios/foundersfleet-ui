#!/usr/bin/env python3
import os

def fix_main_nav_toggle():
    """Fix main nav toggle button spacing and functionality"""
    files = [
        'index.html', 'profile.html', 'founders.html', 'squads.html', 
        'flightplan.html', 'tools.html', 'founder-profile.html', 
        'usecase-detail.html', 'squad-detail.html'
    ]
    
    # Update the nav header with better spacing
    old_header = '''        <div class="px-4 h-[76px] flex items-center justify-between border-b border-white/10">
            <a href="index.html" class="flex items-center gap-3 no-underline">
                <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black text-base font-bold logo-notched">
                    FF
                </div>
                <span id="nav-text" class="text-white text-lg font-semibold transition-opacity duration-300">FoundersFleet</span>
            </a>
            <button onclick="toggleMainNav()" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all ml-2">
                <i id="nav-toggle-icon" class="fas fa-chevron-left text-white text-sm"></i>
            </button>
        </div>'''
    
    new_header = '''        <div class="h-[76px] border-b border-white/10">
            <div class="px-4 h-full flex items-center justify-between">
                <a href="index.html" class="flex items-center gap-2 no-underline min-w-0">
                    <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black text-base font-bold logo-notched flex-shrink-0">
                        FF
                    </div>
                    <span id="nav-text" class="text-white text-lg font-semibold transition-all duration-300 overflow-hidden whitespace-nowrap">FoundersFleet</span>
                </a>
                <button onclick="toggleMainNav()" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all flex-shrink-0">
                    <i id="nav-toggle-icon" class="fas fa-chevron-left text-white text-sm"></i>
                </button>
            </div>
        </div>'''
    
    # Also need to fix the toggle script selector
    old_padding_selector = "nav.querySelectorAll('.px-6')"
    new_padding_selector = "nav.querySelector('.h-[76px]').querySelectorAll('.px-4')"
    
    for filename in files:
        if os.path.exists(filename):
            try:
                with open(filename, 'r') as f:
                    content = f.read()
                
                # Replace the header
                content = content.replace(old_header, new_header)
                
                # Fix the padding selector in the toggle script
                content = content.replace(old_padding_selector, new_padding_selector)
                
                # Also fix the reverse selector
                content = content.replace(
                    "nav.querySelectorAll('.px-4').forEach(el => {",
                    "Array.from(nav.querySelectorAll('.px-4')).forEach(el => {"
                )
                
                with open(filename, 'w') as f:
                    f.write(content)
                
                print(f"✓ Updated {filename}")
            except Exception as e:
                print(f"✗ Error updating {filename}: {str(e)}")

if __name__ == "__main__":
    print("Fixing main nav toggle button...")
    fix_main_nav_toggle()
    print("Done!")