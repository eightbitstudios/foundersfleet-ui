#!/usr/bin/env python3
"""
Script to fix the entire profile page structure
"""

import re

def fix_profile_structure(filepath):
    """Fix the profile page structure completely"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find the Profile section end (Settings Section within the boarding pass)
        # We need to close the profile section properly before starting Settings and Log sections
        
        # Pattern to find the incorrect settings section inside the boarding pass
        wrong_pattern = r'(<!-- Sixth Divider -->.*?</div>\s*</div>\s*)\s*\n\s*\n\s*<!-- Settings Section.*?</div>\s*</div>\s*</div>'
        
        # Replace with proper closing of the profile section
        proper_close = r'''\1
                
                <!-- Settings Section -->
                <div class="boarding-pass-body">
                    <h2 class="text-xl font-semibold mb-4" style="color: #000000;">Settings</h2>
                    <div class="space-y-3">
                        <a href="#" class="flex items-center justify-between py-3 hover:bg-gray-50 transition-colors" style="color: #000000;">
                            <span>Account Settings</span>
                            <i class="fas fa-chevron-right" style="color: #999999;"></i>
                        </a>
                        <a href="#" class="flex items-center justify-between py-3 hover:bg-gray-50 transition-colors" style="color: #000000;">
                            <span>Privacy & Security</span>
                            <i class="fas fa-chevron-right" style="color: #999999;"></i>
                        </a>
                        <a href="#" class="flex items-center justify-between py-3 hover:bg-gray-50 transition-colors" style="color: #000000;">
                            <span>Notifications</span>
                            <i class="fas fa-chevron-right" style="color: #999999;"></i>
                        </a>
                        <a href="#" class="flex items-center justify-between py-3 hover:bg-gray-50 transition-colors" style="color: #000000;">
                            <span>Billing & Subscription</span>
                            <i class="fas fa-chevron-right" style="color: #999999;"></i>
                        </a>
                        <div class="pt-3 mt-3 border-t border-gray-200">
                            <button class="text-gray-900 font-medium hover:text-gray-800 transition-colors">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>'''
        
        content = re.sub(wrong_pattern, proper_close, content, flags=re.DOTALL)
        
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed profile structure in {filepath}")
        return True
        
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    fix_profile_structure('profile.html')
    print("\nDone! Profile structure fixed.")

if __name__ == "__main__":
    main()