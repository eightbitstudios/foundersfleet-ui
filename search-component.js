// Search component for FoundersFleet
let searchOpen = false;

function toggleSearch() {
    searchOpen = !searchOpen;
    
    if (searchOpen) {
        showSearchModal();
    } else {
        hideSearchModal();
    }
}

function showSearchModal() {
    // Check if modal already exists
    let modal = document.getElementById('search-modal');
    if (modal) {
        modal.remove();
    }
    
    // Create modal
    modal = document.createElement('div');
    modal.id = 'search-modal';
    modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-start justify-center pt-20';
    modal.innerHTML = `
        <div class="w-full max-w-2xl bg-white rounded-lg shadow-xl border border-border">
            <div class="p-6">
                <div class="relative mb-6">
                    <input 
                        type="text" 
                        id="global-search-input" 
                        placeholder="Search objectives, missions, squads, or founders..." 
                        class="w-full px-4 py-3 pl-12 bg-gray-50 border border-border rounded-lg focus:outline-none focus:border-primary focus:bg-white transition-all text-lg"
                        autofocus
                    >
                    <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    <button onclick="hideSearchModal()" class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <!-- Quick Links -->
                <div class="mb-4">
                    <p class="text-xs text-text-secondary uppercase tracking-wider mb-3">Quick Links</p>
                    <div class="grid grid-cols-2 gap-2">
                        <button onclick="searchFor('MVP')" class="text-left px-3 py-2 bg-gray-50 rounded hover:bg-gray-100 transition-all text-sm">
                            <i class="fas fa-code mr-2 text-primary"></i>MVP Development
                        </button>
                        <button onclick="searchFor('fundraising')" class="text-left px-3 py-2 bg-gray-50 rounded hover:bg-gray-100 transition-all text-sm">
                            <i class="fas fa-hand-holding-usd mr-2 text-primary"></i>Fundraising
                        </button>
                        <button onclick="searchFor('customer')" class="text-left px-3 py-2 bg-gray-50 rounded hover:bg-gray-100 transition-all text-sm">
                            <i class="fas fa-users mr-2 text-primary"></i>Customer Discovery
                        </button>
                        <button onclick="searchFor('squad')" class="text-left px-3 py-2 bg-gray-50 rounded hover:bg-gray-100 transition-all text-sm">
                            <i class="fas fa-people-group mr-2 text-primary"></i>Find Squads
                        </button>
                    </div>
                </div>
                
                <!-- Recent Searches -->
                <div id="recent-searches" class="hidden">
                    <p class="text-xs text-text-secondary uppercase tracking-wider mb-3">Recent Searches</p>
                    <div class="space-y-1">
                        <button onclick="searchFor('product launch')" class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded transition-all text-sm text-text-secondary">
                            <i class="fas fa-clock mr-2"></i>product launch
                        </button>
                        <button onclick="searchFor('B2B SaaS')" class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded transition-all text-sm text-text-secondary">
                            <i class="fas fa-clock mr-2"></i>B2B SaaS
                        </button>
                    </div>
                </div>
                
                <!-- Search Results Preview -->
                <div id="search-preview" class="hidden">
                    <p class="text-xs text-text-secondary uppercase tracking-wider mb-3">Results</p>
                    <div class="space-y-2">
                        <!-- Results will be populated here -->
                    </div>
                    <a href="#" id="view-all-results" class="block text-center text-sm text-primary hover:text-primary-hover mt-4">
                        View all results
                    </a>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Focus on search input
    document.getElementById('global-search-input').focus();
    
    // Add event listeners
    document.getElementById('global-search-input').addEventListener('input', handleSearchInput);
    document.getElementById('global-search-input').addEventListener('keypress', handleSearchKeypress);
    
    // Add click outside handler
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideSearchModal();
        }
    });
    
    // Add escape key handler
    document.addEventListener('keydown', handleEscapeKey);
}

function hideSearchModal() {
    const modal = document.getElementById('search-modal');
    if (modal) {
        modal.remove();
    }
    searchOpen = false;
    document.removeEventListener('keydown', handleEscapeKey);
}

function handleEscapeKey(e) {
    if (e.key === 'Escape') {
        hideSearchModal();
    }
}

function handleSearchInput(e) {
    const query = e.target.value.trim();
    const previewDiv = document.getElementById('search-preview');
    const recentDiv = document.getElementById('recent-searches');
    
    if (query.length >= 2) {
        // Show preview results
        previewDiv.classList.remove('hidden');
        recentDiv.classList.add('hidden');
        
        // Simulate search results (in real app, this would be an API call)
        const results = getSearchPreview(query);
        displayPreviewResults(results);
        
        // Update view all link
        document.getElementById('view-all-results').href = `search-results.html?q=${encodeURIComponent(query)}`;
    } else {
        // Show recent searches
        previewDiv.classList.add('hidden');
        recentDiv.classList.remove('hidden');
    }
}

function handleSearchKeypress(e) {
    if (e.key === 'Enter') {
        const query = e.target.value.trim();
        if (query) {
            searchFor(query);
        }
    }
}

function searchFor(query) {
    window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
}

function getSearchPreview(query) {
    // Simulated search results
    const allResults = [
        {
            type: 'objective',
            title: 'MVP Development',
            description: 'Build and launch your minimum viable product',
            url: 'objective-detail.html?objective=mvp-development',
            icon: 'fa-code'
        },
        {
            type: 'mission',
            title: 'Build Your MVP',
            description: 'Code and launch your minimum viable product',
            url: 'mission-detail.html?mission=build-mvp',
            icon: 'fa-flag'
        },
        {
            type: 'squad',
            title: 'Squad Alpha',
            description: 'B2B SaaS founders working on MVP launch',
            url: 'squad-detail.html?squad=alpha',
            icon: 'fa-rocket'
        },
        {
            type: 'founder',
            title: 'Sarah Chen',
            description: 'Building DataSync - real-time collaboration',
            url: 'founder-profile.html?founder=sarah-chen',
            initials: 'SC'
        },
        {
            type: 'message',
            title: 'B2B SaaS Squad',
            description: 'Sarah: Just launched our beta! 🚀',
            url: 'comms.html?type=message&id=squad-1',
            icon: 'fa-comment'
        },
        {
            type: 'notification',
            title: 'Squad Alpha meeting',
            description: 'Meeting starts in 30 minutes',
            url: 'comms.html?type=notification',
            icon: 'fa-bell'
        }
    ];
    
    // Simple filter based on query
    const lowerQuery = query.toLowerCase();
    return allResults.filter(result => 
        result.title.toLowerCase().includes(lowerQuery) || 
        result.description.toLowerCase().includes(lowerQuery)
    ).slice(0, 4);
}

function displayPreviewResults(results) {
    const container = document.querySelector('#search-preview .space-y-2');
    
    if (results.length === 0) {
        container.innerHTML = `
            <div class="text-center py-4 text-text-secondary">
                No results found
            </div>
        `;
        return;
    }
    
    container.innerHTML = results.map(result => `
        <a href="${result.url}" class="block p-3 hover:bg-gray-50 rounded transition-all">
            <div class="flex items-start gap-3">
                ${result.type === 'founder' ? `
                    <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span class="text-white text-xs font-semibold">${result.initials}</span>
                    </div>
                ` : `
                    <div class="w-8 h-8 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                        <i class="fas ${result.icon} text-primary text-sm"></i>
                    </div>
                `}
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2">
                        <span class="text-xs text-text-muted uppercase">${result.type}</span>
                    </div>
                    <h4 class="text-sm font-semibold text-text-primary truncate">${result.title}</h4>
                    <p class="text-xs text-text-secondary truncate">${result.description}</p>
                </div>
            </div>
        </a>
    `).join('');
}

// Add keyboard shortcut for search (Cmd/Ctrl + K)
document.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        window.location.href = 'search-results.html';
    }
});

// Add search icon to navigation
function addSearchToNav() {
    // This will be called by the navigation component
    const navElement = document.getElementById('main-nav');
    if (!navElement) return;
    
    // Find the bottom section
    const bottomSection = navElement.querySelector('.pb-6');
    if (!bottomSection) return;
    
    // Add search button before notifications
    const searchButton = document.createElement('div');
    searchButton.className = 'flex justify-center mb-4';
    searchButton.innerHTML = `
        <button onclick="toggleSearch()" class="w-10 h-10 flex items-center justify-center text-white/70 rounded-lg hover:bg-white/10 hover:text-white transition-all relative" title="Search (⌘K)">
            <i class="fa-solid fa-search"></i>
        </button>
    `;
    
    // Insert before the first child of bottom section
    bottomSection.insertBefore(searchButton, bottomSection.firstChild);
}

// Initialize search when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addSearchToNav);
} else {
    addSearchToNav();
}