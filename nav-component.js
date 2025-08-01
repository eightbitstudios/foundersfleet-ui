// Navigation component for FoundersFleet
function renderNavigation(currentPage) {
  // Define navigation items in order
  const navItems = [
    { href: 'flightplan.html', icon: 'fa-solid fa-route', page: 'flightplan' },
    { href: 'squads.html', icon: 'fa-solid fa-people-group', page: 'squads' },
    { href: 'contacts.html', icon: 'fa-solid fa-address-book', page: 'contacts' },
    { href: 'tools.html', icon: 'fas fa-wrench', page: 'tools' },
    { href: 'apps.html', icon: 'fa-solid fa-shapes', page: 'apps' }
  ];

  // Build navigation items HTML
  const navItemsHTML = navItems.map(item => {
    const isActive = currentPage === item.page;
    const activeClasses = isActive 
      ? 'text-black bg-[#C8F902] rounded-lg hover:bg-[#C8F902]/90' 
      : 'text-white/70 rounded-lg hover:bg-white/10 hover:text-white';
    
    return `<a href="${item.href}" class="w-10 h-10 flex items-center justify-center ${activeClasses} transition-all">
                    <i class="${item.icon}"></i>
                </a>`;
  }).join('\n                ');

  // Determine account/settings button state
  const accountActiveClasses = currentPage === 'account' 
    ? 'text-black bg-[#C8F902] rounded-lg hover:bg-[#C8F902]/90' 
    : 'text-white/70 rounded-lg hover:bg-white/10 hover:text-white';

  // Build complete navigation HTML
  const navHTML = `
    <style>
      #main-nav .fa-solid, #main-nav .fas {
        animation: fadeInNav 0.3s ease-in;
      }
      @keyframes fadeInNav {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    </style>
    <!-- Left Sidebar Navigation -->
    <div id="main-nav" class="w-20 bg-black flex flex-col h-screen sticky top-0">
        <!-- Logo -->
        <div class="h-[76px] flex items-center justify-center border-b border-white/10">
            <a href="index.html" class="flex items-center justify-center w-10 h-10 bg-white rounded-lg no-underline">
                <span class="text-black font-bold">FF</span>
            </a>
        </div>
        
        <!-- Navigation -->
        <nav class="flex-1 py-6">
            <div class="flex flex-col items-center space-y-4">
                ${navItemsHTML}
            </div>
        </nav>
        
        <!-- Bottom Icons -->
        <div class="pb-6 space-y-4">
            <!-- Search -->
            <div class="flex justify-center">
                <a href="search-results.html" class="w-10 h-10 flex items-center justify-center text-white/70 rounded-lg hover:bg-white/10 hover:text-white transition-all" title="Search">
                    <i class="fa-solid fa-search"></i>
                </a>
            </div>
            
            <!-- Inbox -->
            <div class="flex justify-center">
                <a href="comms.html" class="w-10 h-10 flex items-center justify-center ${currentPage === 'comms' ? 'text-black bg-[#C8F902] rounded-lg hover:bg-[#C8F902]/90' : 'text-white/70 rounded-lg hover:bg-white/10 hover:text-white'} transition-all relative">
                    <i class="fa-solid fa-inbox"></i>
                    <span id="comms-badge" class="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-black"></span>
                </a>
            </div>
            
            <!-- Settings -->
            <div class="flex justify-center">
                <a href="account.html" class="w-10 h-10 flex items-center justify-center ${accountActiveClasses} transition-all">
                    <i class="fa-solid fa-user"></i>
                </a>
            </div>
        </div>
    </div>`;

  return navHTML;
}

// Function to initialize navigation on page load
function initializeNavigation(currentPage) {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      insertNavigation(currentPage);
    });
  } else {
    insertNavigation(currentPage);
  }
}

// Function to insert navigation into the page
function insertNavigation(currentPage) {
  // Find the nav placeholder
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    navPlaceholder.outerHTML = renderNavigation(currentPage);
  } else {
    console.error('Navigation placeholder not found. Make sure to add <div id="nav-placeholder"></div> to your HTML.');
  }
}