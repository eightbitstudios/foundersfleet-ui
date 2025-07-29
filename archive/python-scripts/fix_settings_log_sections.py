#!/usr/bin/env python3
"""
Script to fix Settings and Log sections in profile.html
"""

import re

def fix_settings_log_sections(filepath):
    """Fix the Settings and Log sections structure"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find where the profile section ends
        profile_end_pattern = r'(</div>\s*\n\s*</div>\s*\n\s*\n\s*</div>)\s*\n\s*$'
        
        # Remove any existing broken Settings and Log sections
        content = re.sub(r'<!-- Settings Section.*?<!-- Log Section.*?</main>', '</main>', content, flags=re.DOTALL)
        
        # Proper Settings section
        settings_section = '''
        <!-- Settings Section (Hidden by default) -->
        <div id="settings-section" class="max-w-[1000px] mx-auto px-8 py-8 hidden">
            <div class="frosted-container">
                <!-- Hero Section -->
                <div class="frosted-container-hero">
                    <div class="flex items-center justify-center gap-6 mb-4">
                        <div class="text-center">
                            <div class="text-2xl font-bold text-white">SETTINGS</div>
                            <div class="text-xs text-white/70 uppercase tracking-wider mt-1">Configure</div>
                        </div>
                        
                        <div class="flex items-center gap-3 px-6">
                            <div class="h-[2px] w-16 bg-white/40"></div>
                            <i class="fas fa-plane text-lg text-white"></i>
                            <div class="h-[2px] w-16 bg-white/40"></div>
                        </div>
                        
                        <div class="text-center">
                            <div class="text-2xl font-bold text-white">PREFERENCES</div>
                            <div class="text-xs text-white/70 uppercase tracking-wider mt-1">Your Control</div>
                        </div>
                    </div>
                    
                    <p class="text-sm text-white/60 leading-relaxed max-w-2xl mx-auto text-center">Customize your FoundersFleet experience. Manage your account settings, notifications, and privacy preferences.</p>
                </div>
                
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
        
        # Proper Log section
        log_section = '''
        <!-- Log Section (Hidden by default) -->
        <div id="log-section" class="max-w-[1000px] mx-auto px-8 py-8 hidden">
            <div class="frosted-container">
                <!-- Hero Section -->
                <div class="frosted-container-hero">
                    <div class="flex items-center justify-center gap-6 mb-4">
                        <div class="text-center">
                            <div class="text-2xl font-bold text-white">PROGRESS</div>
                            <div class="text-xs text-white/70 uppercase tracking-wider mt-1">Your Activity</div>
                        </div>
                        
                        <div class="flex items-center gap-3 px-6">
                            <div class="h-[2px] w-16 bg-white/40"></div>
                            <i class="fas fa-plane text-lg text-white"></i>
                            <div class="h-[2px] w-16 bg-white/40"></div>
                        </div>
                        
                        <div class="text-center">
                            <div class="text-2xl font-bold text-white">INSIGHTS</div>
                            <div class="text-xs text-white/70 uppercase tracking-wider mt-1">AI Analysis</div>
                        </div>
                    </div>
                    
                    <p class="text-sm text-white/60 leading-relaxed max-w-2xl mx-auto text-center">Track Your Journey - Monitor your progress with FleetLog—a comprehensive timeline of achievements, milestones, and insights that powers your AI recommendations.</p>
                </div>
                
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
        
        # Find where to insert the sections (before </main>)
        main_pattern = r'(</main>)'
        replacement = settings_section + '\n' + log_section + '\n        \\1'
        
        content = re.sub(main_pattern, replacement, content, count=1)
        
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Fixed Settings and Log sections in {filepath}")
        return True
        
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    fix_settings_log_sections('profile.html')
    print("\nDone! Settings and Log sections fixed.")

if __name__ == "__main__":
    main()