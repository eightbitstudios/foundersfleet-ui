#!/usr/bin/env python3
"""
Final fix for profile tabs - make Settings and Log sections siblings to profile section
"""

import re

def fix_profile_tabs_final(filepath):
    """Fix the profile tabs by making Settings and Log sections siblings"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # First, let's find where the profile section ends
        # The profile section div with id="profile-section" should close, and then Settings and Log should be siblings
        
        # Find the pattern where profile section ends (look for its closing divs)
        # Profile section structure: <div id="profile-section">...<div class="frosted-container">...</div></div>
        
        # Remove any existing Settings and Log sections that might be in the wrong place
        content = re.sub(r'<!-- Settings Section.*?</div>\s*</div>\s*</div>', '', content, flags=re.DOTALL)
        content = re.sub(r'<!-- Log Section.*?</div>\s*</div>\s*</div>', '', content, flags=re.DOTALL)
        
        # Find where the profile section ends - it should end with multiple closing divs
        # Look for the pattern where we have the Settings link section in the boarding pass
        settings_in_profile = r'(<!-- Settings Section -->\s*<div class="boarding-pass-body">.*?</div>\s*</div>\s*</div>\s*</div>\s*\n\s*</div>)'
        
        # Add proper Settings and Log sections after profile section
        settings_section = '''
        
        <!-- Settings Section (Hidden by default) -->
        <div id="settings-section" class="max-w-[1000px] mx-auto px-8 py-8 hidden">
            <div class="frosted-container">
                <!-- Content Section -->
                <div class="frosted-container-content">
            <!-- Settings Cards -->
            <div class="space-y-6">
                <!-- Account Settings -->
                <div class="boarding-pass" style="background: #FFFFFF;">
                    <div class="boarding-pass-header">
                        <h2 class="text-xl font-semibold text-text-primary mb-4">Account Settings</h2>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-text-secondary mb-1">Email</label>
                                <input type="email" value="don@foundersemail.com" class="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-text-secondary mb-1">Password</label>
                                <button class="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition-all">Change Password</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Notifications -->
                <div class="boarding-pass" style="background: #FFFFFF;">
                    <div class="boarding-pass-header">
                        <h2 class="text-xl font-semibold text-text-primary mb-4">Notifications</h2>
                    </div>
                    <div class="boarding-pass-divider">
                        <span class="boarding-pass-notch"></span>
                    </div>
                    <div class="boarding-pass-body">
                        <div class="space-y-4">
                            <label class="flex items-center justify-between cursor-pointer">
                                <span class="font-medium text-text-primary">Email notifications</span>
                                <input type="checkbox" checked class="w-5 h-5 rounded border-gray-300">
                            </label>
                            <label class="flex items-center justify-between cursor-pointer">
                                <span class="font-medium text-text-primary">Weekly Fleet updates</span>
                                <input type="checkbox" checked class="w-5 h-5 rounded border-gray-300">
                            </label>
                            <label class="flex items-center justify-between cursor-pointer">
                                <span class="font-medium text-text-primary">Squad activity alerts</span>
                                <input type="checkbox" class="w-5 h-5 rounded border-gray-300">
                            </label>
                        </div>
                    </div>
                </div>
                
                <!-- Privacy -->
                <div class="boarding-pass" style="background: #FFFFFF;">
                    <div class="boarding-pass-header">
                        <h2 class="text-xl font-semibold text-text-primary mb-4">Privacy</h2>
                    </div>
                    <div class="boarding-pass-divider">
                        <span class="boarding-pass-notch"></span>
                    </div>
                    <div class="boarding-pass-body">
                        <div class="space-y-4">
                            <label class="flex items-center justify-between cursor-pointer">
                                <span class="font-medium text-text-primary">Profile visible to all founders</span>
                                <input type="checkbox" checked class="w-5 h-5 rounded border-gray-300">
                            </label>
                            <label class="flex items-center justify-between cursor-pointer">
                                <span class="font-medium text-text-primary">Show in founder directory</span>
                                <input type="checkbox" checked class="w-5 h-5 rounded border-gray-300">
                            </label>
                            <label class="flex items-center justify-between cursor-pointer">
                                <span class="font-medium text-text-primary">Allow direct messages</span>
                                <input type="checkbox" checked class="w-5 h-5 rounded border-gray-300">
                            </label>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>'''
        
        log_section = '''
        
        <!-- Log Section (Hidden by default) -->
        <div id="log-section" class="max-w-[1000px] mx-auto px-8 py-8 hidden">
            <div class="frosted-container">
                <!-- Content Section -->
                <div class="frosted-container-content">
                    <!-- Activity Timeline -->
            <div class="boarding-pass">
                <h3 class="text-lg font-semibold text-text-primary mb-6">Recent Activity</h3>
                
                <div class="space-y-6">
                    <!-- Today -->
                    <div>
                        <h4 class="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wide">Today</h4>
                        
                        <!-- Activity Item -->
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white flex-shrink-0">
                                <i class="fas fa-check text-sm"></i>
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center justify-between mb-1">
                                    <h5 class="font-medium text-text-primary">Completed MVP Validation Mission</h5>
                                    <span class="text-xs text-text-muted">2:30 PM</span>
                                </div>
                                <p class="text-sm text-text-secondary mb-2">Finished customer interviews and collected validation data for product-market fit</p>
                                <div class="flex items-center gap-2">
                                    <span class="bg-black text-white px-2 py-1 rounded-full text-xs">Mission Complete</span>
                                    <span class="bg-black text-white px-2 py-1 rounded-full text-xs">+50 XP</span>
                                </div>
                            </div>
                        </div>

                        <!-- Activity Item -->
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white flex-shrink-0">
                                <i class="fas fa-handshake text-sm"></i>
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center justify-between mb-1">
                                    <h5 class="font-medium text-text-primary">Connected with Alex Rivera</h5>
                                    <span class="text-xs text-text-muted">11:15 AM</span>
                                </div>
                                <p class="text-sm text-text-secondary mb-2">Added to network after AutoPilot recommendation - B2B SaaS founder at FlexiTech</p>
                                <div class="flex items-center gap-2">
                                    <span class="bg-black text-white px-2 py-1 rounded-full text-xs">New Connection</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Yesterday -->
                    <div>
                        <h4 class="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wide">Yesterday</h4>
                        
                        <!-- Activity Item -->
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white flex-shrink-0">
                                <i class="fas fa-users text-sm"></i>
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center justify-between mb-1">
                                    <h5 class="font-medium text-text-primary">Squad Alpha Weekly Check-in</h5>
                                    <span class="text-xs text-text-muted">6:00 PM</span>
                                </div>
                                <p class="text-sm text-text-secondary mb-2">Participated in accountability session - shared progress on user acquisition</p>
                                <div class="flex items-center gap-2">
                                    <span class="bg-black text-white px-2 py-1 rounded-full text-xs">Squad Activity</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>'''
        
        # Replace the existing structure
        if settings_in_profile:
            replacement = r'\1' + settings_section + log_section
            content = re.sub(settings_in_profile, replacement, content, flags=re.DOTALL)
        else:
            # If pattern not found, try to insert after profile-section closing div
            # Find the profile section closing pattern
            profile_close = r'(</div>\s*</div>\s*\n\s*</div>\s*)\n\s*<!-- Settings Section'
            if re.search(profile_close, content):
                content = re.sub(profile_close, r'\1' + settings_section + log_section + '\n        <!-- Removed sections', content, count=1)
            else:
                # Last resort - find where profile-section ends
                pattern = r'(<div id="profile-section".*?</div>\s*</div>\s*\n\s*</div>)'
                if re.search(pattern, content, re.DOTALL):
                    content = re.sub(pattern, r'\1' + settings_section + log_section, content, count=1, flags=re.DOTALL)
        
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed profile tabs structure in {filepath}")
        return True
        
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    fix_profile_tabs_final('profile.html')
    print("\nDone! Profile tabs structure fixed.")

if __name__ == "__main__":
    main()