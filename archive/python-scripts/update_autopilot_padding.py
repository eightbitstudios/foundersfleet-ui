#!/usr/bin/env python3
import os

def update_autopilot_padding():
    """Update AutoPilot padding in all HTML files"""
    files = [
        'index.html', 'profile.html', 'founders.html', 'squads.html', 
        'flightplan.html', 'tools.html', 'founder-profile.html', 
        'usecase-detail.html', 'squad-detail.html'
    ]
    
    replacements = [
        # Update AutoPilot content padding from p-4 to p-6
        ('        <div class="flex-1 p-4 overflow-y-auto">', 
         '        <div class="flex-1 p-6 overflow-y-auto">'),
        
        # Update AutoPilot status padding
        ('        <div class="p-4 border-t border-white/10">',
         '        <div class="p-6 border-t border-white/10">'),
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
                
                print(f"✓ Updated {filename}")
            except Exception as e:
                print(f"✗ Error updating {filename}: {str(e)}")

if __name__ == "__main__":
    print("Updating AutoPilot padding...")
    update_autopilot_padding()
    print("Done!")