#!/usr/bin/env python3
"""
Fix multiple issues across pages:
1. Fix AutoPilot positioning on Squads page
2. Remove tagline from home page
3. Remove icons from Board The Fleet sections
4. Fix notches to only appear before numbers
5. Put numbers in circles
"""

import re

def fix_squads_autopilot(filepath):
    """Ensure AutoPilot is properly positioned in squads.html"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if AutoPilot is after the main closing div
        # It should be a sibling to the main content div, not inside or after body
        
        # Pattern to find where main content ends and AutoPilot begins
        pattern = r'(</main>\s*</div>)\s*(</body>)'
        
        # Check if AutoPilot exists but is misplaced
        if 'autopilot-sidebar' in content and re.search(pattern, content):
            # Extract AutoPilot section
            autopilot_pattern = r'(<!-- Right Sidebar - AutoPilot -->.*?</script>)'
            autopilot_match = re.search(autopilot_pattern, content, re.DOTALL)
            
            if autopilot_match:
                autopilot_section = autopilot_match.group(1)
                # Remove AutoPilot from current position
                content = re.sub(autopilot_pattern, '', content, flags=re.DOTALL)
                
                # Insert AutoPilot after main content div
                replacement = r'\1\n\n' + autopilot_section + r'\n\n\2'
                content = re.sub(pattern, replacement, content, count=1)
                
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                print(f"Fixed AutoPilot position in {filepath}")
        
    except Exception as e:
        print(f"Error fixing squads AutoPilot: {e}")

def fix_home_page(filepath):
    """Fix multiple issues on home page"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 1. Remove "Where Founders Flock and Take Flight" from action bar
        content = re.sub(
            r'<h1 class="text-xl font-semibold text-white">Where Founders Flock and Take Flight</h1>',
            '',
            content
        )
        
        # 2. Remove icons from Board The Fleet sections and put numbers in circles
        # Pattern to match each section
        section_pattern = r'<a href="([^"]+)" class="block px-8 py-4[^>]*>.*?<div class="flex items-center gap-4">.*?<i class="fas fa-[^"]+[^>]*></i>.*?<div class="text-2xl font-bold text-text-muted">(\d+)</div>(.*?)</div>\s*</a>'
        
        def replace_section(match):
            href = match.group(1)
            number = match.group(2)
            rest = match.group(3)
            
            # Get hover class
            if 'bg-gray-50' in match.group(0):
                hover_class = "bg-gray-50 hover:bg-gray-100"
            else:
                hover_class = "hover:bg-gray-50"
            
            return f'''<a href="{href}" class="block px-8 py-4 {hover_class} transition-colors group">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 rounded-full border-2 border-text-muted flex items-center justify-center">
                                    <span class="text-lg font-bold text-text-muted">{number}</span>
                                </div>{rest}</div>
                        </a>'''
        
        content = re.sub(section_pattern, replace_section, content, flags=re.DOTALL)
        
        # Also fix the AutoPilot section (07) which doesn't have href
        autopilot_pattern = r'<div class="block px-8 py-4 bg-gray-50">.*?<div class="flex items-center gap-4">.*?<i class="fas fa-paper-plane[^>]*></i>.*?<div class="text-2xl font-bold text-text-muted">07</div>(.*?)</div>\s*</div>'
        
        def replace_autopilot(match):
            rest = match.group(1)
            return f'''<div class="block px-8 py-4 bg-gray-50">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 rounded-full border-2 border-text-muted flex items-center justify-center">
                                    <span class="text-lg font-bold text-text-muted">07</span>
                                </div>{rest}</div>
                        </div>'''
        
        content = re.sub(autopilot_pattern, replace_autopilot, content, flags=re.DOTALL)
        
        # 3. Fix notches - remove individual notches from sections and keep only the main divider
        # Remove all boarding-pass-divider except the first one
        divider_count = 0
        def remove_extra_dividers(match):
            nonlocal divider_count
            divider_count += 1
            if divider_count == 1:
                return match.group(0)  # Keep the first one
            return ''  # Remove the rest
        
        # First, let's make sure we only have one divider after the header
        content_parts = content.split('<!-- Content Section -->')
        if len(content_parts) > 1:
            before_content = content_parts[0]
            after_content = '<!-- Content Section -->' + content_parts[1]
            
            # In the content section, remove all dividers between items
            after_content = re.sub(
                r'\s*<!-- Divider with notches -->\s*<div class="boarding-pass-divider">\s*<span class="boarding-pass-notch"></span>\s*</div>\s*',
                '',
                after_content
            )
            
            content = before_content + after_content
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed home page issues in {filepath}")
        
    except Exception as e:
        print(f"Error fixing home page: {e}")

def main():
    # Fix Squads AutoPilot
    fix_squads_autopilot('squads.html')
    
    # Fix Home page issues
    fix_home_page('index.html')
    
    print("\nAll fixes completed!")

if __name__ == "__main__":
    main()