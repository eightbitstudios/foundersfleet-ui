#!/usr/bin/env python3
"""
Script to properly add AutoPilot as right sidebar on Account and Squads pages
"""

import re

# The AutoPilot HTML (without the Active indicator as requested)
AUTOPILOT_HTML = '''    <!-- Right Sidebar - AutoPilot -->
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
    </script>'''

def add_autopilot_correctly(filepath):
    """Add AutoPilot in the correct position - after main content div, before closing body"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if AutoPilot already exists
        if 'id="autopilot-sidebar"' in content:
            print(f"AutoPilot already exists in {filepath}")
            return False
        
        # Find the closing of the main content div
        # Pattern: </main> followed by </div> (which closes the main content area)
        pattern = r'(</main>\s*</div>)'
        
        # Insert AutoPilot after the main content div
        replacement = r'\1\n\n' + AUTOPILOT_HTML
        content = re.sub(pattern, replacement, content, count=1, flags=re.DOTALL)
        
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Added AutoPilot correctly to {filepath}")
        return True
        
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    pages = ['profile.html', 'squads.html']
    
    for page in pages:
        add_autopilot_correctly(page)
    
    print("\nDone! AutoPilot has been added in the correct position.")

if __name__ == "__main__":
    main()