#!/usr/bin/env python3
"""
Fix the HTML structure for squads.html
"""

import re

def fix_squads_structure():
    """Fix the squads.html structure to properly position AutoPilot"""
    
    # Read the file
    with open('squads.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove all existing AutoPilot sections
    autopilot_pattern = r'<!-- Right Sidebar - AutoPilot -->.*?<!-- Collapsed AutoPilot Button -->.*?</button>\s*'
    content = re.sub(autopilot_pattern, '', content, flags=re.DOTALL)
    
    # Fix the structure - find where main ends (should be around line 510)
    # Look for the pattern of multiple closing divs
    pattern = r'(</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*</main>\s*</div>)'
    
    # Replace with correct structure
    replacement = '''                </div>
            </div>
        </div>
        </main>
    </div>
    
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
    </button>'''
    
    content = re.sub(pattern, replacement, content, count=1)
    
    # Write the fixed content
    with open('squads.html', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Fixed squads.html structure")

if __name__ == "__main__":
    fix_squads_structure()