#!/usr/bin/env python3
import os

def update_autopilot_collapsed_button():
    """Update collapsed AutoPilot button to white background with black icon"""
    files = [
        'index.html', 'profile.html', 'founders.html', 'squads.html', 
        'flightplan.html', 'tools.html', 'founder-profile.html', 
        'usecase-detail.html', 'squad-detail.html'
    ]
    
    # Update the collapsed button style
    old_button = '''<button id="autopilot-collapsed" onclick="toggleAutoPilot()" class="fixed right-4 top-4 w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all hidden z-50">
        <i class="fas fa-paper-plane text-white"></i>
    </button>'''
    
    new_button = '''<button id="autopilot-collapsed" onclick="toggleAutoPilot()" class="fixed right-4 top-4 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all hidden z-50 shadow-lg">
        <i class="fas fa-paper-plane text-black"></i>
    </button>'''
    
    for filename in files:
        if os.path.exists(filename):
            try:
                with open(filename, 'r') as f:
                    content = f.read()
                
                # Replace the button
                content = content.replace(old_button, new_button)
                
                with open(filename, 'w') as f:
                    f.write(content)
                
                print(f"✓ Updated {filename}")
            except Exception as e:
                print(f"✗ Error updating {filename}: {str(e)}")

if __name__ == "__main__":
    print("Updating collapsed AutoPilot button styling...")
    update_autopilot_collapsed_button()
    print("Done!")