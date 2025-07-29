#!/usr/bin/env python3
import os

def final_nav_cleanup():
    """Final cleanup of navigation headers"""
    files = [
        'index.html', 'profile.html', 'founders.html', 'squads.html', 
        'flightplan.html', 'tools.html', 'founder-profile.html', 
        'usecase-detail.html', 'squad-detail.html'
    ]
    
    replacements = [
        # Remove justify-between from nav headers
        ('class="px-6 h-[76px] flex items-center justify-between border-b border-white/10"',
         'class="px-6 h-[76px] flex items-center border-b border-white/10"'),
        
        # Remove id and transition classes from nav text
        ('id="nav-text" class="text-white text-lg font-semibold transition-opacity duration-300"',
         'class="text-white text-lg font-semibold"'),
        
        # Update gap spacing in logo area
        ('class="flex items-center gap-2 no-underline"',
         'class="flex items-center gap-3 no-underline"'),
    ]
    
    for filename in files:
        if os.path.exists(filename):
            try:
                with open(filename, 'r') as f:
                    content = f.read()
                
                for old, new in replacements:
                    content = content.replace(old, new)
                
                with open(filename, 'w') as f:
                    f.write(content)
                
                print(f"✓ Cleaned up {filename}")
            except Exception as e:
                print(f"✗ Error updating {filename}: {str(e)}")

if __name__ == "__main__":
    print("Final navigation cleanup...")
    final_nav_cleanup()
    print("Done!")