#!/usr/bin/env python3
"""
Script to completely rebuild profile.html with correct structure
"""

def rebuild_profile():
    """Rebuild profile.html from scratch with correct structure"""
    
    # Read the original to get the profile section content
    with open('profile.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # New complete HTML
    new_html = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile - FoundersFleet</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="boarding-pass-styles.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'primary': '#000000',
                        'primary-hover': '#333333',
                        'background': '#F8F9FA',
                        'card-bg': '#FFFFFF',
                        'text-primary': '#000000',
                        'text-secondary': '#666666',
                        'text-muted': '#999999',
                        'border': '#E5E5E5',
                        'section-bg': '#FAFAFA',
                        'success': '#000000'
                    },
                    borderRadius: {
                        'xl': '32px'
                    },
                    fontFamily: {
                        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
                    }
                }
            }
        }
    </script>
    <style>
        .hidden { display: none !important; }
    </style>
</head>
<body class="bg-black min-h-screen font-inter flex">
        <!-- Left Sidebar Navigation -->
    <div class="w-64 bg-black flex flex-col h-screen sticky top-0">
        <!-- Logo -->
        <div class="px-8 h-[76px] flex items-center border-b border-white/10">
            <a href="index.html" class="flex items-center gap-3 no-underline">
                <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-black text-lg font-bold logo-notched">
                    FF
                </div>
                <span class="text-white text-xl font-semibold">FoundersFleet</span>
            </a>
        </div>
        
        <!-- Navigation -->
        <nav class="flex-1 px-4 py-6">
            <div class="space-y-2">
                <a href="profile.html" class="flex items-center gap-3 px-4 py-3 text-white bg-white/10 rounded-lg  transition-all">
                    <i class="fas fa-user w-5 text-center"></i>
                    <span class="font-medium">Account</span>
                </a>
                <a href="founders.html" class="flex items-center gap-3 px-4 py-3 text-white/70 rounded-lg hover:bg-white/10 hover:text-white transition-all">
                    <i class="fas fa-users w-5 text-center"></i>
                    <span class="font-medium">Founders</span>
                </a>
                <a href="squads.html" class="flex items-center gap-3 px-4 py-3 text-white/70 rounded-lg hover:bg-white/10 hover:text-white transition-all">
                    <i class="fas fa-user-group w-5 text-center"></i>
                    <span class="font-medium">Squads</span>
                </a>
                <a href="flightplan.html" class="flex items-center gap-3 px-4 py-3 text-white/70 rounded-lg hover:bg-white/10 hover:text-white transition-all">
                    <i class="fas fa-route w-5 text-center"></i>
                    <span class="font-medium">Flightplan</span>
                </a>
                <a href="tools.html" class="flex items-center gap-3 px-4 py-3 text-white/70 rounded-lg hover:bg-white/10 hover:text-white transition-all">
                    <i class="fas fa-wrench w-5 text-center"></i>
                    <span class="font-medium">Tools</span>
                </a>
                </div>
        </nav>
    </div>

    <!-- Main Content Area -->
    <div class="flex-1 bg-black overflow-hidden">
        <main class="h-full overflow-auto">
        <!-- Page Action Bar -->
        <div class="bg-black border-b border-white/10 sticky top-0 z-40">
            <div class="max-w-[1000px] mx-auto px-8 h-[76px] flex items-center justify-between gap-8">
                
                        <!-- Account Tabs -->
                        <div class="flex gap-4">
                            <button class="text-base font-medium text-white h-full flex items-center border-b-2 border-white transition-all" data-tab="profile" onclick="switchAccountTab('profile')">Profile</button>
                            <button class="text-base font-medium text-white/70 h-full flex items-center border-b-2 border-transparent hover:text-white transition-all" data-tab="settings" onclick="switchAccountTab('settings')">Settings</button>
                            <button class="text-base font-medium text-white/70 h-full flex items-center border-b-2 border-transparent hover:text-white transition-all" data-tab="log" onclick="switchAccountTab('log')">Log</button>
                        </div>
                        
                <div class="flex items-center gap-4">
                        <!-- Action Buttons -->
                        <button class="flex items-center gap-2 px-6 py-2 bg-white text-black border border-white rounded text-sm font-medium transition-all hover:bg-white/90" onclick="editProfile()">
                            <i class="fas fa-edit"></i>Edit Profile
                        </button>
                        <button class="flex items-center gap-2 px-4 py-2 bg-transparent text-white border border-white/20 rounded text-sm font-medium transition-all hover:bg-white/10 hover:border-white/40" onclick="shareProfile()">
                            <i class="fas fa-share"></i>Share
                        </button>
                    </div>
                </div>
            </div>
        
                <!-- Profile Section -->
        <div id="profile-section" class="max-w-[1000px] mx-auto px-8 py-8">
            <div class="frosted-container">
                <!-- Stats Section -->
                <div class="grid grid-cols-4 gap-4 mb-8">
                    <div class="hero-frosted rounded-[16px] p-4 text-center">
                        <div class="text-2xl font-bold text-white">47</div>
                        <div class="text-xs text-white/60 mt-1">Total Activities</div>
                    </div>
                    <div class="hero-frosted rounded-[16px] p-4 text-center">
                        <div class="text-2xl font-bold text-white">12</div>
                        <div class="text-xs text-white/60 mt-1">Missions Completed</div>
                    </div>
                    <div class="hero-frosted rounded-[16px] p-4 text-center">
                        <div class="text-2xl font-bold text-white">7</div>
                        <div class="text-xs text-white/60 mt-1">Day Streak</div>
                    </div>
                    <div class="hero-frosted rounded-[16px] p-4 text-center">
                        <div class="text-2xl font-bold text-white">3</div>
                        <div class="text-xs text-white/60 mt-1">Milestones Reached</div>
                    </div>
                </div>
                
                <!-- Content Section -->
                <div class="frosted-container-content">
            <!-- One Continuous Profile Card -->
            <div class="boarding-pass" style="background: #FFFFFF;">
                <!-- Header Section -->
                <div class="boarding-pass-header">
                    <div class="relative">
                        <!-- DB Letters in upper right corner -->
                        <div class="absolute top-0 right-0 text-2xl font-bold" style="color: #000000;">DB</div>
                        
                        <!-- Profile Info -->
                        <div>
                            <h1 class="text-3xl font-bold mb-2" style="color: #000000;">Don Bora</h1>
                            <p class="text-lg" style="color: #666666;">Co-Founder at Eight Bit Studios</p>
                            <p class="flex items-center gap-2 mt-2" style="color: #999999;">
                                <i class="fas fa-map-marker-alt"></i> Chicago, Illinois, United States
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- First Divider -->
                <div class="boarding-pass-divider">
                    <span class="boarding-pass-notch"></span>
                </div>
                
                <!-- About Section -->
                <div class="boarding-pass-body">
                    <h2 class="text-xl font-semibold mb-4" style="color: #000000;">About</h2>
                    <p class="leading-relaxed" style="color: #666666;">
                        I am open to fractional CTO opportunities. I have co-founded, or helped start multiple companies. 
                        My work has been recognized with multiple Inc. 5000 listings for fastest growing private U.S. companies (2016, 2018, 2019). 
                        I'm passionate about mentoring and giving back to the tech community through organizations like Code Platoon, Chicago Tech Academy, MATTER, 1871, and gener8tor.
                    </p>
                </div>
                
                <!-- Second Divider -->
                <div class="boarding-pass-divider">
                    <span class="boarding-pass-notch"></span>
                </div>
                
                <!-- Stats Section -->
                <div class="boarding-pass-body">
                    <div class="grid grid-cols-3 gap-6 text-center">
                        <div>
                            <div class="text-xs font-medium uppercase tracking-wider" style="color: #999999;">Connections</div>
                            <div class="boarding-pass-value-large" style="color: #000000;">500+</div>
                        </div>
                        <div>
                            <div class="text-xs font-medium uppercase tracking-wider" style="color: #999999;">Mentees</div>
                            <div class="boarding-pass-value-large" style="color: #000000;">150+</div>
                        </div>
                        <div>
                            <div class="text-xs font-medium uppercase tracking-wider" style="color: #999999;">Inc. 5000</div>
                            <div class="boarding-pass-value-large" style="color: #000000;">3x</div>
                        </div>
                    </div>
                </div>
                
                <!-- Third Divider -->
                <div class="boarding-pass-divider">
                    <span class="boarding-pass-notch"></span>
                </div>
                
                <!-- Current Focus -->
                <div class="boarding-pass-body">
                    <h2 class="text-xl font-semibold mb-4" style="color: #000000;">Current Focus</h2>
                    <div class="space-y-3">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                                <i class="fas fa-laptop-code text-black"></i>
                            </div>
                            <span style="color: #666666;">Fractional CTO Opportunities</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                                <i class="fas fa-building text-black"></i>
                            </div>
                            <span style="color: #666666;">Eight Bit Studios - Digital Product Agency</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                                <i class="fas fa-hands-helping text-black"></i>
                            </div>
                            <span style="color: #666666;">Executive Board Member at Code Platoon</span>
                        </div>
                    </div>
                </div>
                
                <!-- Fourth Divider -->
                <div class="boarding-pass-divider">
                    <span class="boarding-pass-notch"></span>
                </div>
                
                <!-- Skills & Recognition -->
                <div class="boarding-pass-body">
                    <h2 class="text-xl font-semibold mb-4" style="color: #000000;">Skills & Recognition</h2>
                    <div class="mb-4">
                        <h3 class="text-sm font-medium uppercase tracking-wider mb-2" style="color: #999999;">Languages</h3>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">English (Native)</span>
                            <span class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">German (Professional)</span>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-sm font-medium uppercase tracking-wider mb-2" style="color: #999999;">Awards</h3>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">TechWeek100 Top Influencers 2014</span>
                            <span class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">Digital Agency of the Year</span>
                            <span class="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm">Mentor of the Year</span>
                        </div>
                    </div>
                </div>
                
                <!-- Fifth Divider -->
                <div class="boarding-pass-divider">
                    <span class="boarding-pass-notch"></span>
                </div>
                
                <!-- Volunteer & Mentorship -->
                <div class="boarding-pass-body">
                    <h2 class="text-xl font-semibold mb-4" style="color: #000000;">Volunteer & Mentorship</h2>
                    <div class="space-y-4">
                        <div class="flex gap-4">
                            <div class="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                <i class="fas fa-graduation-cap text-black text-sm"></i>
                            </div>
                            <div class="flex-1">
                                <p class="font-medium" style="color: #000000;">Code Platoon</p>
                                <p class="text-sm" style="color: #999999;">Executive Board Member - Veteran coding bootcamp</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                <i class="fas fa-school text-black text-sm"></i>
                            </div>
                            <div class="flex-1">
                                <p class="font-medium" style="color: #000000;">Chicago Tech Academy</p>
                                <p class="text-sm" style="color: #999999;">Mentor - High school tech education</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                <i class="fas fa-rocket text-black text-sm"></i>
                            </div>
                            <div class="flex-1">
                                <p class="font-medium" style="color: #000000;">1871, MATTER, gener8tor</p>
                                <p class="text-sm" style="color: #999999;">Startup mentor and advisor</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Sixth Divider -->
                <div class="boarding-pass-divider">
                    <span class="boarding-pass-notch"></span>
                </div>
                
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
        
    </div>
        </div>
        
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
        </div>
        
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
        </div>
        </main>
    </div>

    <script src="app.js"></script>
    
    <script>
        // Account tab switching functionality
        function switchAccountTab(tab) {
            // Hide all sections
            document.getElementById('profile-section').classList.add('hidden');
            document.getElementById('settings-section').classList.add('hidden');
            document.getElementById('log-section').classList.add('hidden');
            
            // Show the selected section
            if (tab === 'profile') {
                document.getElementById('profile-section').classList.remove('hidden');
            } else if (tab === 'settings') {
                document.getElementById('settings-section').classList.remove('hidden');
            } else if (tab === 'log') {
                document.getElementById('log-section').classList.remove('hidden');
            }
            
            // Update tab styles
            document.querySelectorAll('[data-tab]').forEach(btn => {
                if (btn.dataset.tab === tab) {
                    btn.classList.add('text-white', 'border-white');
                    btn.classList.remove('text-white/70', 'border-transparent');
                } else {
                    btn.classList.remove('text-white', 'border-white');
                    btn.classList.add('text-white/70', 'border-transparent');
                }
            });
        }

        // Profile page specific functions
        function editProfile() {
            console.log('Edit profile clicked');
        }

        function shareProfile() {
            console.log('Share profile clicked');
        }
    </script>

    <!-- Right Sidebar - AutoPilot -->
    <div id="autopilot-sidebar" class="w-64 bg-black flex flex-col h-screen sticky top-0 border-l border-white/10 transition-all duration-300">
        <!-- AutoPilot Header -->
        <div class="px-6 h-[76px] flex items-center justify-between border-b border-white/10">
            <div class="flex items-center gap-3">
                <i class="fas fa-paper-plane text-white text-xl"></i>
                <span class="text-white text-lg font-semibold">AutoPilot</span>
            </div>
            <button onclick="toggleAutoPilot()" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <i id="autopilot-toggle-icon" class="fas fa-times text-white text-sm"></i>
            </button>
        </div>
        
        <!-- AutoPilot Content -->
        <div class="flex-1 p-4 overflow-y-auto">
            <!-- Search/Ask Input -->
            <div class="mb-4">
                <div class="relative">
                    <input type="text" 
                           id="autopilot-input" 
                           placeholder="Search or ask me anything about your founder journey" 
                           class="w-full p-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 text-sm focus:outline-none focus:ring-1 focus:ring-white/50 focus:border-white/50"
                           onkeypress="handleAutoPilotInput(event)">
                    <button onclick="processAutoPilotCommand()" class="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/20 rounded-md flex items-center justify-center hover:bg-white/30 transition-all">
                        <i class="fas fa-paper-plane text-white text-xs"></i>
                    </button>
                </div>
            </div>
            
            <!-- Suggestions -->
            <div class="space-y-3">
                <h4 class="text-white/70 text-xs font-medium uppercase tracking-wider">Suggestions</h4>
                <button onclick="setAutoPilotInput('Find me Founders to connect with')" class="w-full text-left p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                    <div class="text-white text-sm font-medium mb-1">Find Founders</div>
                    <div class="text-white/50 text-xs">Discover founders in your industry</div>
                </button>
                <button onclick="setAutoPilotInput('What should I work on next?')" class="w-full text-left p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                    <div class="text-white text-sm font-medium mb-1">Next Steps</div>
                    <div class="text-white/50 text-xs">Get personalized recommendations</div>
                </button>
                <button onclick="setAutoPilotInput('Show me my progress this week')" class="w-full text-left p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                    <div class="text-white text-sm font-medium mb-1">Weekly Progress</div>
                    <div class="text-white/50 text-xs">Review your achievements</div>
                </button>
            </div>
            
            <!-- Results/Responses Area -->
            <div id="autopilot-results" class="mt-6 space-y-3 hidden">
                <h4 class="text-white/70 text-xs font-medium uppercase tracking-wider">Results</h4>
                <div id="autopilot-results-content" class="space-y-3">
                    <!-- AI responses will appear here -->
                </div>
            </div>
        </div>
    </div>
    
    <!-- Collapsed AutoPilot Button -->
    <button id="autopilot-collapsed" onclick="toggleAutoPilot()" class="fixed right-4 top-4 w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-all hidden z-50">
        <i class="fas fa-paper-plane text-white"></i>
    </button>

    <script>
        // AutoPilot functionality
        function toggleAutoPilot() {
            const sidebar = document.getElementById('autopilot-sidebar');
            const collapsedBtn = document.getElementById('autopilot-collapsed');
            const toggleIcon = document.getElementById('autopilot-toggle-icon');
            const mainContent = document.querySelector('.flex-1.bg-black.overflow-hidden');
            
            if (sidebar.classList.contains('w-64')) {
                // Collapse
                sidebar.classList.add('w-0', 'overflow-hidden');
                sidebar.classList.remove('w-64');
                sidebar.style.borderLeft = 'none';
                collapsedBtn.classList.remove('hidden');
                mainContent.classList.remove('mr-64');
            } else {
                // Expand
                sidebar.classList.remove('w-0', 'overflow-hidden');
                sidebar.classList.add('w-64');
                sidebar.style.borderLeft = '';
                collapsedBtn.classList.add('hidden');
                mainContent.classList.add('mr-64');
                toggleIcon.classList.remove('fa-bars');
                toggleIcon.classList.add('fa-times');
            }
        }
        
        function processAutoPilotCommand() {
            const input = document.getElementById('autopilot-input');
            const command = input.value.trim();
            if (command) {
                console.log('Processing command:', command);
                // Show results area
                const resultsArea = document.getElementById('autopilot-results');
                const resultsContent = document.getElementById('autopilot-results-content');
                resultsArea.classList.remove('hidden');
                
                // Add a sample response
                const response = document.createElement('div');
                response.className = 'p-3 bg-white/5 rounded-lg border border-white/10';
                response.innerHTML = `
                    <div class="text-white text-sm mb-1">Processing: "${command}"</div>
                    <div class="text-white/70 text-xs">AI response will appear here...</div>
                `;
                resultsContent.appendChild(response);
                
                // Clear input
                input.value = '';
            }
        }
        
        function handleAutoPilotInput(event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                processAutoPilotCommand();
            }
        }
        
        function setAutoPilotInput(text) {
            const input = document.getElementById('autopilot-input');
            input.value = text;
            input.focus();
        }
    </script>

</body>
</html>'''
    
    # Write the new HTML
    with open('profile.html', 'w', encoding='utf-8') as f:
        f.write(new_html)
    
    print("Profile.html has been completely rebuilt with correct structure")

def main():
    rebuild_profile()

if __name__ == "__main__":
    main()