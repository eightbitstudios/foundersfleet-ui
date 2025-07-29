#!/usr/bin/env python3
import re
import os

def update_file(filepath, replacements):
    """Update a file with multiple replacements"""
    try:
        with open(filepath, 'r') as f:
            content = f.read()
        
        for old, new in replacements:
            content = content.replace(old, new)
        
        with open(filepath, 'w') as f:
            f.write(content)
        
        print(f"✓ Updated {filepath}")
        return True
    except Exception as e:
        print(f"✗ Error updating {filepath}: {str(e)}")
        return False

def update_all_sidebars():
    """Update all HTML files to have consistent sidebar widths and collapsible main nav"""
    files = [
        'index.html', 'profile.html', 'founders.html', 'squads.html', 
        'flightplan.html', 'tools.html', 'founder-profile.html', 'usecase-detail.html'
    ]
    
    # Common replacements for all files
    sidebar_replacements = [
        # Change main nav width from w-64 to w-56
        ('class="w-64 bg-black flex flex-col h-screen sticky top-0"', 
         'id="main-nav" class="w-56 bg-black flex flex-col h-screen sticky top-0 transition-all duration-300"'),
        
        # Update logo size
        ('class="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black text-lg font-bold logo-notched"',
         'class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black text-base font-bold logo-notched"'),
        
        # Update logo text size
        ('class="text-white text-xl font-semibold">FoundersFleet',
         'class="text-white text-lg font-semibold">FoundersFleet'),
        
        # Change AutoPilot sidebar width from w-64 to w-56
        ('class="w-64 bg-black flex flex-col h-screen sticky top-0 border-l border-white/10 transition-all duration-300"',
         'class="w-56 bg-black flex flex-col h-screen sticky top-0 border-l border-white/10 transition-all duration-300"'),
        
        # Update AutoPilot toggle logic to use w-56
        ("sidebar.classList.contains('w-64')",
         "sidebar.classList.contains('w-56')"),
        
        ("sidebar.classList.add('w-64')",
         "sidebar.classList.add('w-56')"),
        
        ("sidebar.classList.remove('w-64')",
         "sidebar.classList.remove('w-56')"),
        
        ("mainContent.classList.remove('mr-64')",
         "mainContent.classList.remove('mr-56')"),
        
        ("mainContent.classList.add('mr-64')",
         "mainContent.classList.add('mr-56')"),
    ]
    
    # Add collapse button to main nav header
    nav_header_old = '''        <div class="px-8 h-[76px] flex items-center border-b border-white/10">
            <a href="index.html" class="flex items-center gap-3 no-underline">
                <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black text-base font-bold logo-notched">
                    FF
                </div>
                <span class="text-white text-lg font-semibold">FoundersFleet</span>
            </a>
        </div>'''
    
    nav_header_new = '''        <div class="px-6 h-[76px] flex items-center justify-between border-b border-white/10">
            <a href="index.html" class="flex items-center gap-2 no-underline">
                <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black text-base font-bold logo-notched">
                    FF
                </div>
                <span id="nav-text" class="text-white text-lg font-semibold transition-opacity duration-300">FoundersFleet</span>
            </a>
            <button onclick="toggleMainNav()" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <i id="nav-toggle-icon" class="fas fa-chevron-left text-white text-sm"></i>
            </button>
        </div>'''
    
    # Add collapsed nav button and toggle script
    collapsed_nav_button = '''
    <!-- Collapsed Main Nav Button -->
    <button id="nav-collapsed" onclick="toggleMainNav()" class="fixed left-4 top-4 w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all hidden z-50">
        <i class="fas fa-bars text-white"></i>
    </button>'''
    
    toggle_script = '''
    <script>
        // Main Navigation toggle functionality
        function toggleMainNav() {
            const nav = document.getElementById('main-nav');
            const collapsedBtn = document.getElementById('nav-collapsed');
            const toggleIcon = document.getElementById('nav-toggle-icon');
            const navText = document.getElementById('nav-text');
            const navLabels = nav.querySelectorAll('nav span.font-medium');
            
            if (nav.classList.contains('w-56')) {
                // Collapse
                nav.classList.remove('w-56');
                nav.classList.add('w-16');
                collapsedBtn.classList.remove('hidden');
                toggleIcon.classList.remove('fa-chevron-left');
                toggleIcon.classList.add('fa-chevron-right');
                navText.style.opacity = '0';
                navLabels.forEach(label => label.classList.add('hidden'));
                
                // Update padding
                nav.querySelectorAll('.px-6').forEach(el => {
                    el.classList.remove('px-6');
                    el.classList.add('px-4');
                });
            } else {
                // Expand
                nav.classList.remove('w-16');
                nav.classList.add('w-56');
                collapsedBtn.classList.add('hidden');
                toggleIcon.classList.remove('fa-chevron-right');
                toggleIcon.classList.add('fa-chevron-left');
                navText.style.opacity = '1';
                navLabels.forEach(label => label.classList.remove('hidden'));
                
                // Update padding
                nav.querySelectorAll('.px-4').forEach(el => {
                    if (!el.classList.contains('py-3')) { // Don't change nav links
                        el.classList.remove('px-4');
                        el.classList.add('px-6');
                    }
                });
            }
        }
    </script>'''
    
    for filename in files:
        if os.path.exists(filename):
            replacements = sidebar_replacements.copy()
            
            # Add nav header replacement
            replacements.append((nav_header_old, nav_header_new))
            
            # Read file to check where to insert collapsed button and script
            with open(filename, 'r') as f:
                content = f.read()
            
            # Insert collapsed nav button before the first script tag
            if '<script>' in content and collapsed_nav_button not in content:
                first_script_pos = content.find('<script>')
                if first_script_pos > -1:
                    content = content[:first_script_pos] + collapsed_nav_button + '\n\n    ' + content[first_script_pos:]
            
            # Insert toggle script before closing body tag
            if 'toggleMainNav' not in content:
                body_close_pos = content.rfind('</body>')
                if body_close_pos > -1:
                    content = content[:body_close_pos] + toggle_script + '\n\n' + content[body_close_pos:]
            
            # Write updated content
            with open(filename, 'w') as f:
                f.write(content)
            
            # Apply other replacements
            update_file(filename, replacements)

def remove_squads_hero_text():
    """Remove the text below hero header on squads page"""
    replacements = [
        # Remove the paragraph below hero section
        ('                    <p class="text-lg text-white/80 mb-8 text-center">Your trusted circle of founders flying in formation with you - join or form accountability groups for weekly check-ins, shared progress, and peer support.</p>\n', '')
    ]
    
    update_file('squads.html', replacements)

def update_notch_styles():
    """Update notch styles to be visible on frosted backgrounds"""
    css_updates = '''
/* Updated notch styles for frosted backgrounds */
.boarding-pass-divider::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
}

.boarding-pass-notch {
    position: absolute;
    width: 24px;
    height: 24px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
}

/* Alternative notch style for boarding passes on frosted backgrounds */
.frosted-container .boarding-pass-divider::after {
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.2);
}

.frosted-container .boarding-pass-notch {
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.2);
}

/* Logo notches update */
.logo-notched::before,
.logo-notched::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
}

.logo-notched::before {
    left: -4px;
}

.logo-notched::after {
    right: -4px;
}

/* Notches in boarding pass sections */
.boarding-pass-body.p-0 > a:not(:last-child)::after,
.boarding-pass-body.p-0 > button:not(:last-child)::after {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.boarding-pass-body.p-0 > a:not(:last-child)::before,
.boarding-pass-body.p-0 > button:not(:last-child)::before {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
'''
    
    # Read current CSS
    with open('boarding-pass-styles.css', 'r') as f:
        content = f.read()
    
    # Find where to insert the updates (after the existing notch styles)
    insert_pos = content.find('/* Frosted Container Style')
    if insert_pos > -1:
        content = content[:insert_pos] + css_updates + '\n' + content[insert_pos:]
    else:
        content += '\n' + css_updates
    
    # Write updated CSS
    with open('boarding-pass-styles.css', 'w') as f:
        f.write(content)
    
    print("✓ Updated boarding-pass-styles.css with new notch styles")

def main():
    print("Fixing multiple UI issues...")
    
    # 1. Update all sidebars
    print("\n1. Updating sidebar widths and adding main nav collapse...")
    update_all_sidebars()
    
    # 2. Remove squads hero text
    print("\n2. Removing squads hero text...")
    remove_squads_hero_text()
    
    # 3. Update notch styles
    print("\n3. Updating notch styles for frosted backgrounds...")
    update_notch_styles()
    
    print("\nAll updates completed!")

if __name__ == "__main__":
    main()