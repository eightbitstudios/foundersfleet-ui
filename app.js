// Sample founder data
const founders = [
    {
        id: 1,
        name: "Brian Chesky",
        title: "Co-founder & CEO",
        company: "Airbnb",
        category: "marketplace",
        bio: "Created a platform where anyone can belong anywhere. Transforming how people travel and experience the world.",
        tags: ["design-thinking", "marketplace", "community"],
        verified: true,
        type: "team"
    },
    {
        id: 2,
        name: "Patrick Collison",
        title: "Co-founder & CEO",
        company: "Stripe",
        category: "fintech",
        bio: "Building the economic infrastructure for the internet. Making online payments simple for businesses worldwide.",
        tags: ["Payments", "Developer Tools", "Infrastructure"],
        verified: false,
        type: "team"
    },
    {
        id: 3,
        name: "Melanie Perkins",
        title: "Co-founder & CEO",
        company: "Canva",
        category: "saas",
        bio: "Democratizing design for everyone. Making it simple for anyone to create beautiful designs.",
        tags: ["Design", "SaaS", "Creative Tools"],
        verified: false,
        type: "team"
    },
    {
        id: 4,
        name: "Daniel Ek",
        title: "Co-founder & CEO",
        company: "Spotify",
        category: "social",
        bio: "Revolutionizing how the world listens to music. Connecting millions of artists with billions of fans.",
        tags: ["Music", "Streaming", "Entertainment"],
        verified: false,
        type: "team"
    },
    {
        id: 5,
        name: "Whitney Wolfe Herd",
        title: "Founder & CEO",
        company: "Bumble",
        category: "social",
        bio: "Creating kind connections and empowering women to make the first move in dating, friendship, and business.",
        tags: ["Dating", "Social", "Women-First"],
        verified: true,
        type: "solo"
    },
    {
        id: 6,
        name: "Evan Spiegel",
        title: "Co-founder & CEO",
        company: "Snap Inc.",
        category: "social",
        bio: "Reimagining the camera to improve how people live and communicate. Making visual communication fun and expressive.",
        tags: ["AR", "Social Media", "Camera"],
        verified: false,
        type: "team"
    },
    {
        id: 7,
        name: "Dylan Field",
        title: "Co-founder & CEO",
        company: "Figma",
        category: "saas",
        bio: "Building the future of design collaboration. Making design accessible to everyone on the web.",
        tags: ["Design Tools", "Collaboration", "Web-Based"],
        verified: true,
        type: "team"
    },
    {
        id: 8,
        name: "Tony Xu",
        title: "Co-founder & CEO",
        company: "DoorDash",
        category: "marketplace",
        bio: "Empowering local economies by connecting communities with their favorite restaurants and stores.",
        tags: ["Delivery", "Logistics", "Local Commerce"],
        verified: false,
        type: "team"
    },
    {
        id: 9,
        name: "Tobi Lütke",
        title: "Founder & CEO",
        company: "Shopify",
        category: "ecommerce",
        bio: "Making commerce better for everyone. Helping entrepreneurs start, grow, and scale their businesses.",
        tags: ["E-commerce", "Platform", "SMB"],
        verified: true,
        type: "solo"
    },
    {
        id: 10,
        name: "Drew Houston",
        title: "Co-founder & CEO",
        company: "Dropbox",
        category: "saas",
        bio: "Simplifying how people work together. Making it easy to access your files anywhere.",
        tags: ["cloud-storage", "productivity", "collaboration"],
        verified: false,
        type: "team"
    }
];

let filteredFounders = [...founders];
let activeFilter = 'all';

// User preferences
let userFounderType = 'team'; // Don Bora's designation

// Search functions
function showSearchResults(query) {
    // Store the current section before showing search
    const currentSection = document.querySelector('.section.active')?.id;
    if (currentSection && currentSection !== 'search-results') {
        localStorage.setItem('previousSection', currentSection);
    }
    
    // Update search query display
    document.getElementById('searchQueryDisplay').textContent = query;
    
    // Show search results section
    showSection('search-results', false);
    
    // Reset filter to 'all'
    filterSearchResults('all');
}

function clearSearch() {
    // Clear search input
    document.getElementById('searchInput').value = '';
    
    // Go back to previous section
    const previousSection = localStorage.getItem('previousSection') || 'home';
    showSection(previousSection);
}

function filterSearchResults(filter) {
    // Update active tab
    document.querySelectorAll('.search-filter-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.filter === filter) {
            tab.classList.add('active');
        }
    });
    
    // Show/hide result groups
    document.querySelectorAll('.search-results-group').forEach(group => {
        group.style.display = group.dataset.group === filter ? 'block' : 'none';
    });
}

function filterTools(filter) {
    // Update active tab
    document.querySelectorAll('[data-filter]').forEach(tab => {
        tab.classList.remove('text-primary', 'border-primary');
        tab.classList.add('text-text-secondary', 'border-transparent');
        if (tab.dataset.filter === filter) {
            tab.classList.remove('text-text-secondary', 'border-transparent');
            tab.classList.add('text-primary', 'border-primary');
        }
    });
    
    // Hide all views first
    const views = ['tools-usecase-view', 'tools-apps-view', 'tools-missions-view', 'tools-resources-view'];
    views.forEach(viewId => {
        const view = document.getElementById(viewId);
        if (view) {
            view.classList.add('hidden');
            view.style.display = 'none';
        }
    });
    
    // Show selected view
    const selectedView = document.getElementById(`tools-${filter}-view`);
    if (selectedView) {
        selectedView.classList.remove('hidden');
        selectedView.style.display = 'block';
    }
}

// Navigation functions
function showSection(section, updateHash = true) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none';
    });
    
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    // Show selected section
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
        sectionElement.classList.add('active');
        sectionElement.style.display = 'block';
    }
    
    // Update header actions based on current section
    const boardButton = document.getElementById('boardButton');
    const loggedInActions = document.getElementById('loggedInActions');
    
    if (section === 'home') {
        // Show Board button only on home page
        boardButton.style.display = 'block';
        loggedInActions.style.display = 'none';
    } else {
        // Show logged in actions on all other pages
        boardButton.style.display = 'none';
        loggedInActions.style.display = 'flex';
    }
    
    // Scroll to top of page
    window.scrollTo(0, 0);
    
    // Update active nav
    const navItem = document.querySelector(`.nav-item[href="#${section}"]`);
    if (navItem) {
        navItem.classList.add('active');
    }
    
    // Show/hide sub nav and workspace bar
    if (section === 'flightplan') {
        // Hide sub-nav for flightplan view
        document.getElementById('launchSubNav').style.display = 'none';
        
        // Show the main flightplan view
        const flightplanContainer = document.querySelector('.flightplan-container');
        const essentialTools = document.querySelector('#flightplan > div:last-of-type');
        if (flightplanContainer) flightplanContainer.style.display = 'block';
        if (essentialTools) essentialTools.style.display = 'grid';
        
        // Hide all tool sections
        document.querySelectorAll('.tools-section').forEach(s => {
            s.style.display = 'none';
        });
    } else {
        document.getElementById('launchSubNav').style.display = 'none';
    }
    
    // Update URL hash
    if (updateHash && window.location.hash !== `#${section}`) {
        window.location.hash = section;
    }
    
    // Update icon buttons
    document.querySelectorAll('.icon-btn').forEach(btn => btn.classList.remove('active'));
    if (section === 'flightplan') {
        document.getElementById('flightplanBtn').classList.add('active');
    } else if (section === 'settings') {
        document.getElementById('settingsBtn').classList.add('active');
    } else if (section === 'messages') {
        document.getElementById('messagesBtn').classList.add('active');
    } else if (section === 'profile') {
        document.getElementById('profileBtn').classList.add('active');
    }
    
    // Render founders if founders section
    if (section === 'founders') {
        renderFounders();
    }
}

function showUseCaseDetail(usecase, updateHash = true) {
    const detailSection = document.getElementById(`${usecase}-detail`);
    
    if (detailSection) {
        // Hide tools section
        const toolsSection = document.getElementById('tools');
        if (toolsSection) {
            toolsSection.style.display = 'none';
        }
        
        // Show the use case detail
        detailSection.classList.remove('hidden');
        detailSection.style.display = 'block';
        
        // Only update hash if called directly (not from hash change handler)
        if (updateHash) {
            window.location.hash = `usecases/${usecase}`;
        }
    } else {
        console.error('Detail section not found for:', usecase);
    }
    
    // Scroll to top of page
    window.scrollTo(0, 0);
}

function showToolDetail(tool) {
    // Hide the tools section
    const toolsSection = document.getElementById('tools');
    if (toolsSection) {
        toolsSection.style.display = 'none';
    }
    
    // Show the tool detail
    const detailSection = document.getElementById(`${tool}-detail`);
    if (detailSection) {
        detailSection.classList.remove('hidden');
        detailSection.style.display = 'block';
        
        // Update URL
        window.location.hash = `tools/${tool}`;
    }
    
    // Scroll to top of page
    window.scrollTo(0, 0);
}

function closeUseCaseDetail() {
    // Hide all use case detail views
    const useCaseDetails = ['starting-out-detail', 'fundraising-detail', 'building-product-detail', 
                          'going-to-market-detail', 'growing-business-detail'];
    
    useCaseDetails.forEach(detailId => {
        const detail = document.getElementById(detailId);
        if (detail) {
            detail.classList.add('hidden');
            detail.style.display = 'none';
        }
    });
    
    // Go back to tools section
    window.location.hash = 'tools';
    
    // Show tools section
    const toolsSection = document.getElementById('tools');
    if (toolsSection) {
        toolsSection.style.display = 'block';
    }
}

function closeToolDetail() {
    // Hide the tool detail
    const economaestroDetail = document.getElementById('economaestro-detail');
    if (economaestroDetail) {
        economaestroDetail.classList.add('hidden');
        economaestroDetail.style.display = 'none';
    }
    
    // Show tools section
    const toolsSection = document.getElementById('tools');
    if (toolsSection) {
        toolsSection.style.display = 'block';
    }
    
    // Update URL
    window.location.hash = 'tools';
}

// Profile detail functions
function viewFounderProfile(founderId) {
    // Hide all sections and show the profile detail
    document.querySelectorAll('.section').forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none';
    });
    
    const profileSection = document.getElementById('founder-profile-detail');
    if (profileSection) {
        profileSection.style.display = 'block';
        profileSection.classList.add('active');
        
        // Update profile data based on founder ID
        updateProfileData(founderId);
        
        // Update URL
        window.location.hash = `founder/${founderId}`;
        
        // Update nav
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.querySelector('.nav-item[href="#community"]').classList.add('active');
    }
    
    // Scroll to top of page
    window.scrollTo(0, 0);
}

function updateProfileData(founderId) {
    // If it's a numeric ID, find from founders array
    let founder = null;
    if (typeof founderId === 'number' || !isNaN(parseInt(founderId))) {
        founder = founders.find(f => f.id === parseInt(founderId));
    }
    
    // If it's a string ID from search results
    const searchProfiles = {
        'founder-1': {
            name: 'Founder Name',
            title: 'Co-founder & CEO',
            company: 'Company Name',
            bio: 'Building the future of technology. Former engineer at TechCorp, passionate about AI/ML and helping founders scale their startups.',
            avatar: 'SC',
            avatarBg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        'alex-kumar': {
            name: 'Alex Kumar',
            title: 'Founder',
            company: 'TechStart',
            bio: 'Serial entrepreneur with 2 successful exits. Currently building the next generation of startup tools. Investor and advisor to 20+ startups.',
            avatar: 'AK',
            avatarBg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        }
    };
    
    const profile = founder || searchProfiles[founderId] || searchProfiles['founder-1'];
    
    // Generate avatar initials and background if not specified
    if (!profile.avatar) {
        const names = profile.name.split(' ');
        profile.avatar = names.map(n => n[0]).join('').toUpperCase();
    }
    
    if (!profile.avatarBg) {
        const colors = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
        ];
        profile.avatarBg = colors[parseInt(founderId) % colors.length] || colors[0];
    }
    
    // Update profile elements
    document.getElementById('profile-detail-name').textContent = profile.name;
    document.getElementById('profile-detail-full-name').textContent = profile.name;
    document.getElementById('profile-detail-title').textContent = `${profile.title} at ${profile.company}`;
    document.getElementById('profile-detail-bio').textContent = profile.bio;
    document.getElementById('profile-detail-avatar').textContent = profile.avatar;
    document.getElementById('profile-detail-avatar').style.background = profile.avatarBg;
}

function goBackFromProfile() {
    // Go back to previous page using browser history
    history.back();
}

function toggleProfileActions(event) {
    event.stopPropagation();
    const menu = document.querySelector('.profile-actions-menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

// Profile action functions
function connectWithFounder() {
    alert('Connection request sent!');
    document.querySelector('.profile-actions-menu').style.display = 'none';
}

function followFounder() {
    alert('Now following this founder!');
    document.querySelector('.profile-actions-menu').style.display = 'none';
}

function messageFounder() {
    alert('Message composer opened!');
    document.querySelector('.profile-actions-menu').style.display = 'none';
}

function shareProfile() {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this founder profile',
            url: window.location.href
        });
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(window.location.href);
        alert('Profile link copied to clipboard!');
    }
    document.querySelector('.profile-actions-menu').style.display = 'none';
}

function reportProfile() {
    alert('Report submitted. Thank you for helping keep our community safe.');
    document.querySelector('.profile-actions-menu').style.display = 'none';
}

function launchTool(tool) {
    // Navigate to flightplan section and show the tool
    showSection('flightplan');
    showToolsSection(tool);
}

function startMission(usecase) {
    // Placeholder function for starting a mission
    // This could navigate to a mission flow or show a modal
    alert(`Starting mission for: ${usecase}`);
}

function switchSquadTab(tab) {
    // Update active tab
    document.querySelectorAll('.squad-tab').forEach(t => {
        t.classList.remove('active');
    });
    document.querySelector(`.squad-tab[data-tab="${tab}"]`).classList.add('active');
    
    // Show/hide squad content based on tab
    document.querySelectorAll('.squad-content').forEach(content => {
        content.style.display = 'none';
    });
    
    // Show the selected tab content
    const contentId = tab + '-content';
    const content = document.getElementById(contentId);
    if (content) {
        content.style.display = 'block';
    }
}

function createSquad() {
    alert('Create Squad functionality coming soon!');
}

function joinSquadCheckin(squadId) {
    alert(`Joining check-in for Squad ${squadId}`);
}

function openSquadMessages(squadId) {
    alert(`Opening messages for Squad ${squadId}`);
}

function viewSquadDashboard(squadId) {
    alert(`Viewing dashboard for Squad ${squadId}`);
}

function reactivateSquad(squadId) {
    alert(`Reactivating Squad ${squadId}`);
}

function showSquadMatching() {
    switchSquadTab('all');
}

function requestSquadJoin(squadId) {
    alert(`Requesting to join Squad ${squadId}`);
}

function viewSquadDetails(squadId) {
    alert(`Viewing details for Squad ${squadId}`);
}

function joinSquadWaitlist(squadId) {
    alert(`Joining waitlist for Squad ${squadId}`);
}

function acceptSquadInvitation(squadId) {
    alert(`Accepting invitation to Squad ${squadId}`);
}

function declineSquadInvitation(squadId) {
    alert(`Declining invitation to Squad ${squadId}`);
}

function showSquadFilterModal() {
    alert('Squad filters modal coming soon!');
}

function viewSquadSchedule(squadId) {
    alert(`Viewing schedule for Squad ${squadId}`);
}

function addSquadDrop(squadId) {
    alert(`Adding drop for Squad ${squadId}`);
}

function showSquadDetail(squadId, updateHash = true) {
    console.log('showSquadDetail called with squadId:', squadId);
    
    // Get the elements
    const squadsSection = document.getElementById('squads');
    const squadDetailSection = document.getElementById('squad-detail');
    
    console.log('Squads section:', squadsSection);
    console.log('Squad detail section:', squadDetailSection);
    
    if (squadsSection && squadDetailSection) {
        // Hide squads section
        squadsSection.style.display = 'none';
        
        // Show squad detail section
        squadDetailSection.style.display = 'block';
        
        // Update title based on squad
        const squadNames = {
            'alpha': 'Squad Alpha',
            'beta': 'Squad Beta',
            'gamma': 'Squad Gamma',
            'delta': 'Squad Delta',
            'epsilon': 'Squad Epsilon'
        };
        
        const titleElement = document.getElementById('squad-detail-title');
        if (titleElement) {
            titleElement.textContent = squadNames[squadId] || 'Squad Detail';
        }
        
        // Update URL hash only if not called from hash change handler
        if (updateHash) {
            window.location.hash = `squad-detail-${squadId}`;
        }
    } else {
        console.error('Could not find required elements');
    }
}

function backToSquads() {
    // Go back to previous page using browser history
    history.back();
}

function toggleSquadActionDropdown() {
    const dropdown = document.getElementById('squad-action-dropdown');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}

function toggleSquadCardActionDropdown(squadId) {
    const dropdown = document.getElementById(`squad-card-action-dropdown-${squadId}`);
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}

function joinSquad() {
    document.getElementById('squad-action-dropdown').style.display = 'none';
    alert('Joining squad...');
}

function saveSquad() {
    document.getElementById('squad-action-dropdown').style.display = 'none';
    alert('Squad saved to your bookmarks!');
}

function shareSquad() {
    document.getElementById('squad-action-dropdown').style.display = 'none';
    alert('Squad link copied to clipboard!');
}

function reportSquad() {
    document.getElementById('squad-action-dropdown').style.display = 'none';
    alert('Squad reported. Thank you for helping keep the community safe.');
}

function leaveSquad(squadId) {
    // Close dropdown
    const dropdown = document.getElementById(`squad-card-action-dropdown-${squadId}`);
    if (dropdown) dropdown.style.display = 'none';
    
    // Confirm and leave squad
    if (confirm('Are you sure you want to leave this squad?')) {
        alert('You have left the squad.');
    }
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('#squad-action-dropdown') && !event.target.closest('button[onclick="toggleSquadActionDropdown()"]')) {
        const dropdown = document.getElementById('squad-action-dropdown');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    }
});

function showEventFilterModal() {
    // Placeholder function to show event filter modal
    alert('Event filter modal coming soon!');
}

function showDatePickerModal() {
    // Create date picker modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1002;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: var(--card-bg);
        border: 1px solid var(--border);
        border-radius: 8px;
        padding: 1.5rem;
        max-width: 300px;
        width: 90%;
        box-shadow: var(--shadow-lg);
    `;
    
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    modalContent.innerHTML = `
        <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; color: var(--text);">Select Date</h3>
        <div style="margin-bottom: 1rem;">
            <input type="date" id="dateInput" value="${today.toISOString().split('T')[0]}" 
                   style="width: 100%; padding: 0.5rem; border: 1px solid var(--border); border-radius: 6px; background: var(--background); color: var(--text);">
        </div>
        <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <button onclick="closeDatePickerModal()" style="background: none; border: 1px solid var(--border); color: var(--text); padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer;">Cancel</button>
            <button onclick="selectDate()" style="background: var(--primary); color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer;">Select</button>
        </div>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Store modal reference for cleanup
    window.currentDatePickerModal = modal;
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeDatePickerModal();
        }
    });
}

function closeDatePickerModal() {
    if (window.currentDatePickerModal) {
        document.body.removeChild(window.currentDatePickerModal);
        window.currentDatePickerModal = null;
    }
}

function selectDate() {
    const dateInput = document.getElementById('dateInput');
    const selectedDate = new Date(dateInput.value);
    const today = new Date();
    
    // Format the date for display
    let displayText;
    if (selectedDate.toDateString() === today.toDateString()) {
        displayText = 'Today';
    } else {
        displayText = selectedDate.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
        });
    }
    
    // Update the date picker button text
    document.getElementById('selectedDate').textContent = displayText;
    
    // Close modal
    closeDatePickerModal();
    
    // Filter events by selected date (placeholder)
    console.log('Filtering events by date:', selectedDate);
}

function showToolsFilterModal() {
    // Placeholder function to show tools filter modal
    alert('Tools filter modal coming soon!');
}

function continueMission() {
    // Continue with the current mission
    alert('Continue mission functionality coming soon!');
}

// Flightplan mission functions
function viewMissionDetails(missionId) {
    alert(`Viewing details for mission: ${missionId}`);
}

function editMission(missionId) {
    alert(`Editing mission: ${missionId}`);
}

function markMissionPending(missionId) {
    alert(`Marking mission as pending: ${missionId}`);
}

function continueMission(missionId) {
    alert(`Continuing mission: ${missionId}`);
}

function pauseMission(missionId) {
    alert(`Pausing mission: ${missionId}`);
}

function viewPitchDeck(missionId) {
    alert(`Viewing pitch deck for: ${missionId}`);
}

function trackInvestors(missionId) {
    alert(`Opening investor tracker for: ${missionId}`);
}

function findLegalHelp(missionId) {
    alert(`Finding legal help for: ${missionId}`);
}

function useTemplate(missionId) {
    alert(`Using template for: ${missionId}`);
}

function scheduleCall(missionId) {
    alert(`Scheduling call for: ${missionId}`);
}

function viewArchitecture(missionId) {
    alert(`Viewing architecture for: ${missionId}`);
}

function updateArchitecture(missionId) {
    alert(`Updating architecture for: ${missionId}`);
}

function continueDevelopment(missionId) {
    alert(`Continuing development for: ${missionId}`);
}

function viewProgress(missionId) {
    alert(`Viewing progress for: ${missionId}`);
}

function manageBacklog(missionId) {
    alert(`Managing backlog for: ${missionId}`);
}

function viewTeam(missionId) {
    alert(`Viewing team for: ${missionId}`);
}

function addTeamMember(missionId) {
    alert(`Adding team member for: ${missionId}`);
}

function viewTestSuite(missionId) {
    alert(`Viewing test suite for: ${missionId}`);
}

function runTests(missionId) {
    alert(`Running tests for: ${missionId}`);
}

function viewInfrastructure(missionId) {
    alert(`Viewing infrastructure for: ${missionId}`);
}

function managePipeline(missionId) {
    alert(`Managing CI/CD pipeline for: ${missionId}`);
}

function viewBetaFeedback(missionId) {
    alert(`Viewing beta feedback for: ${missionId}`);
}

function viewBetaMetrics(missionId) {
    alert(`Viewing beta metrics for: ${missionId}`);
}

function viewLaunchChecklist(missionId) {
    alert(`Viewing launch checklist for: ${missionId}`);
}

function viewAssets(missionId) {
    alert(`Viewing assets for: ${missionId}`);
}

function viewLaunchDashboard(missionId) {
    alert(`Viewing launch dashboard for: ${missionId}`);
}

function trackLaunchMetrics(missionId) {
    alert(`Tracking launch metrics for: ${missionId}`);
}

function manageLaunchChannels(missionId) {
    alert(`Managing launch channels for: ${missionId}`);
}

function viewOnboardingFlow(missionId) {
    alert(`Viewing onboarding flow for: ${missionId}`);
}

function viewGrowthExperiments(missionId) {
    alert(`Viewing growth experiments for: ${missionId}`);
}

function viewPMFMetrics(missionId) {
    alert(`Viewing product-market fit metrics for: ${missionId}`);
}

function viewCustomerSegments(missionId) {
    alert(`Viewing customer segments for: ${missionId}`);
}

function viewOperationsDashboard(missionId) {
    alert(`Viewing operations dashboard for: ${missionId}`);
}

function viewProcesses(missionId) {
    alert(`Viewing processes for: ${missionId}`);
}

function trackEfficiency(missionId) {
    alert(`Tracking efficiency metrics for: ${missionId}`);
}

function viewOrgChart(missionId) {
    alert(`Viewing organization chart for: ${missionId}`);
}

function viewTeamMetrics(missionId) {
    alert(`Viewing team metrics for: ${missionId}`);
}

function viewRevenueDashboard(missionId) {
    alert(`Viewing revenue dashboard for: ${missionId}`);
}

function viewGrowthLevers(missionId) {
    alert(`Viewing growth levers for: ${missionId}`);
}

function viewPricing(missionId) {
    alert(`Viewing pricing strategy for: ${missionId}`);
}

function prepareDataRoom(missionId) {
    alert(`Preparing data room for: ${missionId}`);
}

function viewInvestorPipeline(missionId) {
    alert(`Viewing investor pipeline for: ${missionId}`);
}

function viewMarketAnalysis(missionId) {
    alert(`Viewing market analysis for: ${missionId}`);
}

function suggestUseCase() {
    // Show a modal or form for suggesting a use case
    alert('Thank you for your interest! Use case suggestions feature coming soon.');
    // In a real implementation, this would open a modal with a form
    // to submit use case suggestions to the Founders Fleet team
}

function showToolsSection(tool, updateHash = true) {
    // Hide the main flightplan view
    const flightplanContainer = document.querySelector('.flightplan-container');
    const essentialTools = document.querySelector('#flightplan > div:last-of-type');
    if (flightplanContainer) flightplanContainer.style.display = 'none';
    if (essentialTools) essentialTools.style.display = 'none';
    
    // Hide all tools sections
    document.querySelectorAll('.tools-section').forEach(s => {
        s.style.display = 'none';
    });
    
    // Show selected section
    const toolSection = document.getElementById(tool);
    if (toolSection) {
        toolSection.style.display = 'block';
        
        // Show sub-nav when viewing a tool
        document.getElementById('launchSubNav').style.display = 'flex';
        
        // Update active pill
        document.querySelectorAll('.sub-nav-pill').forEach(p => {
            if (p.textContent.toLowerCase() === tool) {
                p.classList.add('active');
            } else {
                p.classList.remove('active');
            }
        });
    }
    
    // Update URL hash
    if (updateHash) {
        window.location.hash = `flightplan/${tool}`;
    }
}

function showCommunitySection(section) {
    // Update community cards
    document.querySelectorAll('.community-card').forEach(c => c.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    // Hide all community sections
    document.querySelectorAll('.community-section').forEach(s => s.classList.remove('active'));
    
    // Show selected section
    document.getElementById(section).classList.add('active');
}

function renderFounders() {
    const grid = document.getElementById('founderGrid');
    grid.innerHTML = '';
    
    // Add founders
    filteredFounders.forEach(founder => {
        const card = document.createElement('div');
        card.className = 'founder-card';
        card.style.cursor = 'pointer';
        card.onclick = function() {
            viewFounderProfile(founder.id);
        };
        card.innerHTML = `
            <div class="founder-header">
                <div class="founder-info">
                    <h3 style="display: flex; align-items: center; gap: 0.5rem; margin: 0 0 0.5rem 0;">
                        ${founder.name}
                        ${founder.verified ? '<i class="fa-solid fa-signature" style="color: var(--primary); font-size: 1rem;" title="Verified Founder"></i>' : ''}
                    </h3>
                    <div class="founder-title" style="font-weight: 600; color: var(--text);">${founder.title}</div>
                    <div class="founder-company" style="color: var(--text); margin-bottom: 1rem;">${founder.company}</div>
                </div>
            </div>
            <p class="founder-bio" style="margin-bottom: 1rem; line-height: 1.6;">${founder.bio}</p>
            <div class="founder-tags" style="margin-bottom: 1rem;">
                ${founder.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
            </div>
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                <button class="btn btn-secondary" style="font-size: 0.875rem; padding: 0.5rem 1rem;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                    Connect
                </button>
                <button class="btn btn-secondary" style="font-size: 0.875rem; padding: 0.5rem 1rem;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.5rem;">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    Message
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function showProfileDetail() {
    document.getElementById('founderGrid').style.display = 'none';
    document.querySelector('.filters').style.display = 'none';
    document.getElementById('messageBar').style.display = 'none';
    
    const detailView = document.getElementById('profile-detail-view');
    detailView.innerHTML = `
        <button class="btn btn-secondary" onclick="backToCommunity()" style="margin-bottom: 2rem;">
            <i class="fas fa-arrow-left"></i> Back to Community
        </button>
        
        <div class="two-column-layout">
            <div class="cards-column">
                <h3 style="margin-bottom: 1.5rem;">Recent Activity</h3>
                <div style="color: var(--text); font-size: 0.875rem;">
                    <p>No recent activity yet.</p>
                    <p style="margin-top: 1rem;">Complete your profile to start connecting with other founders.</p>
                </div>
            </div>
            
            <div class="profile-column">
                <h1 style="margin: 0 0 2rem 0;">My Profile</h1>
                
                <div style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem;">Profile Information</h3>
                    <p style="color: var(--text); margin-bottom: 1.5rem;">
                        Manage your public founder profile and connect with other entrepreneurs.
                    </p>
                    
                    <form style="margin-top: 1.5rem;">
                        <div style="margin-bottom: 1rem;">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Name</label>
                            <input type="text" placeholder="Your name" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border); border-radius: 8px;">
                        </div>
                        <div style="margin-bottom: 1rem;">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Title</label>
                            <input type="text" placeholder="e.g., Co-founder & CEO" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border); border-radius: 8px;">
                        </div>
                        <div style="margin-bottom: 1rem;">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Company</label>
                            <input type="text" placeholder="Your company" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border); border-radius: 8px;">
                        </div>
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Bio</label>
                            <textarea placeholder="Tell us about yourself..." style="width: 100%; padding: 0.75rem; border: 1px solid var(--border); border-radius: 8px; min-height: 100px; resize: vertical;"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Save Profile</button>
                    </form>
                </div>
            </div>
        </div>
    `;
    detailView.style.display = 'block';
}

function showFounderDetail(founderId) {
    const founder = founders.find(f => f.id === founderId);
    if (!founder) return;
    
    // Hide grid and show detail
    document.getElementById('founderGrid').style.display = 'none';
    document.querySelector('.filters').style.display = 'none';
    document.getElementById('messageBar').style.display = 'none';
    
    // Create detail view with two-column layout
    const detailView = document.getElementById('profile-detail-view');
    detailView.innerHTML = `
        <button class="btn btn-secondary" onclick="backToCommunity()" style="margin-bottom: 2rem;">
            <i class="fas fa-arrow-left"></i> Back to Community
        </button>
        
        <div class="two-column-layout">
            <div class="profile-column">
                <div class="founder-header" style="margin-bottom: 2rem;">
                    <h1 style="margin: 0; display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                        ${founder.name}
                        ${founder.verified ? '<i class="fas fa-check-circle verified-badge"></i>' : ''}
                    </h1>
                    <div class="founder-title" style="font-size: 1.125rem; color: var(--text); margin-top: 0.5rem;">${founder.title}</div>
                    <div class="founder-company" style="font-size: 1rem; margin-top: 0.25rem;">${founder.company}</div>
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <button class="btn btn-primary" style="margin-right: 1rem;">
                        <i class="fas fa-user-plus"></i> Follow
                    </button>
                    <button class="btn btn-secondary">
                        <i class="fas fa-envelope"></i> Message
                    </button>
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem;">About</h3>
                    <p style="font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem;">${founder.bio}</p>
                    <div class="founder-tags">
                        ${founder.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="cards-column">
                <h3 style="margin-bottom: 1.5rem;">More Founders</h3>
                ${renderSimilarFounders(founder.category, founderId)}
            </div>
        </div>
    `;
    detailView.style.display = 'block';
}

function backToCommunity() {
    // Go back to previous page using browser history
    history.back();
}

function renderSimilarFounders(category, excludeId) {
    const similarFounders = founders.filter(f => f.id !== excludeId).slice(0, 12);
    
    if (similarFounders.length === 0) {
        return '<p style="color: var(--text); font-size: 0.875rem;">No other founders to show yet.</p>';
    }
    
    return similarFounders.map(founder => `
        <div class="founder-card" style="margin-bottom: 1rem; cursor: pointer;" onclick="showFounderDetail(${founder.id})">
            <div class="founder-header">
                <div class="founder-info">
                    <h4 style="margin: 0 0 0.25rem 0; font-size: 1rem; display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                        ${founder.name}
                        ${founder.verified ? '<i class="fas fa-check-circle verified-badge"></i>' : ''}
                    </h4>
                    <div class="founder-title" style="font-size: 0.875rem;">${founder.title}</div>
                    <div class="founder-company" style="font-size: 0.875rem;">${founder.company}</div>
                </div>
            </div>
            <button class="btn btn-secondary" style="margin-top: 0.75rem; width: 100%; font-size: 0.875rem;" onclick="event.stopPropagation();">
                <i class="fas fa-plus"></i>
            </button>
        </div>
    `).join('');
}

function closeMessageBar() {
    document.getElementById('messageBar').style.display = 'none';
}

function claimFoundingMembership() {
    alert('Claiming founding membership functionality would be implemented here');
}

function claimFoundingSpot(spotNumber) {
    alert(`Claiming founding spot #${spotNumber} functionality would be implemented here`);
}

function showSignUpModal() {
    // This would typically open a signup modal
    alert('Sign up functionality would be implemented here');
}

function setFounderType(type) {
    // Update the user preference
    userFounderType = type;
    
    // Update button states
    const soloToggle = document.getElementById('soloToggle');
    const teamToggle = document.getElementById('teamToggle');
    
    if (type === 'solo') {
        soloToggle.className = 'btn btn-primary';
        teamToggle.className = 'btn btn-secondary';
    } else {
        soloToggle.className = 'btn btn-secondary';
        teamToggle.className = 'btn btn-primary';
    }
    
}


function initializeFounderTypeButtons() {
    // Set initial button states when page loads
    const soloToggle = document.getElementById('soloToggle');
    const teamToggle = document.getElementById('teamToggle');
    
    if (soloToggle && teamToggle) {
        if (userFounderType === 'solo') {
            soloToggle.className = 'btn btn-primary';
            teamToggle.className = 'btn btn-secondary';
        } else {
            soloToggle.className = 'btn btn-secondary';
            teamToggle.className = 'btn btn-primary';
        }
    }
}

// Old filter functionality - kept for compatibility
function filterFounders(filter) {
    // Convert old single filter to new multi-filter system
    if (filter === 'all') {
        selectedFilters = [];
    } else {
        selectedFilters = [filter];
    }
    updateActiveFilters();
    filterFoundersBySelection();
}

// Handle hash navigation
function handleHashChange() {
    const hash = window.location.hash.slice(1) || 'home';
    
    // Check if it's a tool section (launch/toolname)
    if (hash.startsWith('flightplan/')) {
        const tool = hash.split('/')[1];
        showSection('flightplan', false);
        if (tool) {
            showToolsSection(tool, false);
        }
    } else if (hash.startsWith('tools/')) {
        // Handle tool detail pages
        const tool = hash.split('/')[1];
        if (tool) {
            showToolDetail(tool);
        }
    } else if (hash.startsWith('usecases/')) {
        // Handle use case detail pages
        const usecase = hash.split('/')[1];
        if (usecase) {
            showUseCaseDetail(usecase, false);
        }
    } else if (hash.startsWith('founder/')) {
        // Handle founder profile detail pages
        const founderId = hash.split('/')[1];
        if (founderId) {
            viewFounderProfile(founderId);
        }
    } else if (hash.startsWith('squad-detail-')) {
        // Handle squad detail pages
        const squadId = hash.split('-')[2];
        if (squadId) {
            showSquadDetail(squadId, false);
        }
    } else {
        showSection(hash, false);
    }
}

// Profile functions
function addTag() {
    const tagContainer = event.target.parentElement;
    const newTag = document.createElement('span');
    newTag.contentEditable = true;
    newTag.className = 'editable-tag';
    newTag.style.cssText = "background: var(--secondary); padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.75rem; color: var(--text);";
    newTag.textContent = "New Tag";
    tagContainer.insertBefore(newTag, event.target);
    newTag.focus();
    // Select all text in the new tag
    const range = document.createRange();
    range.selectNodeContents(newTag);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}

function saveChanges() {
    // Simulate saving changes
    const btn = event.target;
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check" style="margin-right: 0.5rem;"></i>Saved!';
    btn.style.backgroundColor = 'var(--success)';
    btn.style.color = 'white';
    
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.backgroundColor = '';
        btn.style.color = '';
    }, 2000);
}

function addSocialLink() {
    // Placeholder for adding social links
    alert('Social link editor would open here');
}

function toggleMissionDropdown(missionId) {
    // Close all other dropdowns first
    document.querySelectorAll('.mission-dropdown').forEach(dropdown => {
        if (dropdown.id !== missionId + '-dropdown') {
            dropdown.style.display = 'none';
        }
    });
    
    // Toggle the current dropdown
    const dropdown = document.getElementById(missionId + '-dropdown');
    if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    }
}

function startMission(missionId) {
    // Close dropdown
    document.getElementById(missionId + '-dropdown').style.display = 'none';
    
    // Show confirmation or navigate to mission
    alert(`Starting mission: ${missionId}`);
    
    // Here you would typically update the mission status and redirect
    // For now, just showing an alert
}

function markMissionDone(missionId) {
    // Close dropdown
    document.getElementById(missionId + '-dropdown').style.display = 'none';
    
    // Show confirmation
    alert(`Mission marked as done: ${missionId}`);
    
    // Here you would typically update the mission status
    // For now, just showing an alert
}

function skipMission(missionId) {
    // Close dropdown
    document.getElementById(missionId + '-dropdown').style.display = 'none';
    
    // Show confirmation
    alert(`Mission skipped: ${missionId}`);
    
    // Here you would typically update the mission status
    // For now, just showing an alert
}

function showStage(stageId) {
    // Hide all stage content
    document.querySelectorAll('.stage-content').forEach(stage => {
        stage.classList.remove('block');
        stage.classList.add('hidden');
        stage.style.display = 'none';
    });
    
    // Show selected stage
    const selectedStage = document.getElementById(stageId + '-content');
    if (selectedStage) {
        selectedStage.classList.remove('hidden');
        selectedStage.classList.add('block');
        selectedStage.style.display = 'block';
    }
    
    // Update tab styles
    const stages = ['idea', 'seed', 'build', 'launch', 'grow'];
    stages.forEach(stage => {
        const tab = document.getElementById(stage + '-tab');
        if (tab) {
            if (stage === stageId) {
                // Active tab - white color with underline
                tab.className = 'text-base font-medium text-white py-3 border-b-2 border-white transition-all';
            } else {
                // Inactive tab
                tab.className = 'text-base font-medium text-white/70 py-3 border-b-2 border-transparent hover:text-white transition-all';
            }
        }
    });
    
    // Get the active stage number
    const activeStageItem = document.querySelector(`[onclick="showStage('${stageId}')"]`);
    const activeStageNumber = activeStageItem ? parseInt(activeStageItem.dataset.stage) : 1;
    
    // Update progress bar fill width based on current stage
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        // Calculate progress width (20% per stage)
        const progressWidth = (activeStageNumber / 5) * 100;
        progressFill.style.width = progressWidth + '%';
    }
    
    // Reset all stage text colors
    document.querySelectorAll('.stage-text').forEach(text => {
        text.style.color = '#666'; // Gray text for inactive stages
    });
    
    // Update text colors based on progress
    document.querySelectorAll('.stage-item').forEach(item => {
        const stageNumber = parseInt(item.dataset.stage);
        const stageText = item.querySelector('.stage-text');
        
        if (stageNumber <= activeStageNumber) {
            // White text for completed/active stages (on black fill)
            stageText.style.color = 'white';
        } else {
            // Gray text for future stages (on white background)
            stageText.style.color = '#666';
        }
    });
}

// Navigation persistence functions
function toggleMainNav() {
    const nav = document.getElementById('main-nav');
    const navToggleIcon = document.getElementById('nav-toggle-icon');
    const navText = document.getElementById('nav-text');
    const navTextCollapsed = document.getElementById('nav-text-collapsed');
    const navLabels = document.querySelectorAll('.nav-label');
    const windowWidth = window.innerWidth;
    
    if (nav.classList.contains('w-56')) {
        // Collapse
        nav.classList.remove('w-56');
        nav.classList.add('w-20');
        navToggleIcon.classList.remove('fa-chevron-left');
        navToggleIcon.classList.add('fa-chevron-right');
        if (navText) navText.classList.add('hidden');
        if (navTextCollapsed) navTextCollapsed.classList.remove('hidden');
        navLabels.forEach(label => label.classList.add('hidden'));
        // Only save state if we're above 1000px (manual toggle)
        if (windowWidth >= 1000) {
            localStorage.setItem('navCollapsed', 'true');
        }
    } else {
        // Expand
        nav.classList.remove('w-20');
        nav.classList.add('w-56');
        navToggleIcon.classList.remove('fa-chevron-right');
        navToggleIcon.classList.add('fa-chevron-left');
        if (navText) navText.classList.remove('hidden');
        if (navTextCollapsed) navTextCollapsed.classList.add('hidden');
        navLabels.forEach(label => label.classList.remove('hidden'));
        // Only save state if we're above 1000px (manual toggle)
        if (windowWidth >= 1000) {
            localStorage.setItem('navCollapsed', 'false');
        }
    }
}

function initializeNavState() {
    const savedState = localStorage.getItem('navCollapsed');
    const windowWidth = window.innerWidth;
    const nav = document.getElementById('main-nav');
    
    if (!nav) return;
    
    const navToggleIcon = document.getElementById('nav-toggle-icon');
    const navText = document.getElementById('nav-text');
    const navTextCollapsed = document.getElementById('nav-text-collapsed');
    const navLabels = document.querySelectorAll('.nav-label');
    
    // Temporarily disable transitions during initialization
    nav.style.transition = 'none';
    
    // Apply the appropriate state based on screen size and saved preference
    // Auto-collapse at 1000px width threshold
    if (windowWidth < 1000 || savedState === 'true') {
        // Collapse the nav
        nav.classList.remove('w-56');
        nav.classList.add('w-20');
        if (navToggleIcon) {
            navToggleIcon.classList.remove('fa-chevron-left');
            navToggleIcon.classList.add('fa-chevron-right');
        }
        if (navText) navText.classList.add('hidden');
        if (navTextCollapsed) navTextCollapsed.classList.remove('hidden');
        navLabels.forEach(label => label.classList.add('hidden'));
    } else {
        // Ensure nav is expanded if not saved as collapsed
        nav.classList.remove('w-20');
        nav.classList.add('w-56');
        if (navToggleIcon) {
            navToggleIcon.classList.remove('fa-chevron-right');
            navToggleIcon.classList.add('fa-chevron-left');
        }
        if (navText) navText.classList.remove('hidden');
        if (navTextCollapsed) navTextCollapsed.classList.add('hidden');
        navLabels.forEach(label => label.classList.remove('hidden'));
    }
    
    // Re-enable transitions after a brief delay
    setTimeout(() => {
        nav.style.transition = '';
    }, 100);
}

function toggleAutoPilot() {
    const sidebar = document.getElementById('autopilot-sidebar');
    const toggleIcon = sidebar.querySelector('.autopilot-toggle i');
    const title = sidebar.querySelector('.autopilot-title');
    const header = sidebar.querySelector('.autopilot-header');
    const content = sidebar.querySelector('.autopilot-content');
    const collapsedIcon = sidebar.querySelector('.autopilot-collapsed-icon');
    
    if (sidebar.classList.contains('w-80')) {
        // Collapse to narrow sidebar
        sidebar.classList.remove('w-80');
        sidebar.classList.add('w-20');
        toggleIcon.classList.remove('fa-chevron-right');
        toggleIcon.classList.add('fa-chevron-left');
        title.classList.add('hidden');
        header.classList.add('hidden');
        content.classList.add('hidden');
        collapsedIcon.classList.remove('hidden');
        localStorage.setItem('autopilotCollapsed', 'true');
    } else {
        // Expand to full width
        sidebar.classList.remove('w-20');
        sidebar.classList.add('w-80');
        toggleIcon.classList.remove('fa-chevron-left');
        toggleIcon.classList.add('fa-chevron-right');
        title.classList.remove('hidden');
        header.classList.remove('hidden');
        content.classList.remove('hidden');
        collapsedIcon.classList.add('hidden');
        localStorage.setItem('autopilotCollapsed', 'false');
    }
}

function initializeAutoPilotState() {
    const savedState = localStorage.getItem('autopilotCollapsed');
    const windowWidth = window.innerWidth;
    const sidebar = document.getElementById('autopilot-sidebar');
    
    if (!sidebar) return;
    
    const toggleIcon = sidebar.querySelector('.autopilot-toggle i');
    const title = sidebar.querySelector('.autopilot-title');
    const header = sidebar.querySelector('.autopilot-header');
    const content = sidebar.querySelector('.autopilot-content');
    const collapsedIcon = sidebar.querySelector('.autopilot-collapsed-icon');
    
    // Temporarily disable transitions during initialization
    sidebar.style.transition = 'none';
    
    if (windowWidth < 768) {
        // Hide completely on mobile
        sidebar.classList.add('hidden');
    } else if (savedState === 'true') {
        // Apply collapsed state
        sidebar.classList.remove('w-80');
        sidebar.classList.add('w-20');
        if (toggleIcon) {
            toggleIcon.classList.remove('fa-chevron-right');
            toggleIcon.classList.add('fa-chevron-left');
        }
        if (title) title.classList.add('hidden');
        if (header) header.classList.add('hidden');
        if (content) content.classList.add('hidden');
        if (collapsedIcon) collapsedIcon.classList.remove('hidden');
    }
    
    // Re-enable transitions after a brief delay
    setTimeout(() => {
        sidebar.style.transition = '';
    }, 100);
}

function handleResponsiveNav() {
    const windowWidth = window.innerWidth;
    const nav = document.getElementById('main-nav');
    const autopilotSidebar = document.getElementById('autopilot-sidebar');
    const autopilotCollapsed = document.getElementById('autopilot-collapsed');
    const navToggleIcon = document.getElementById('nav-toggle-icon');
    const navText = document.getElementById('nav-text');
    const navLabels = document.querySelectorAll('.nav-label');
    
    if (!nav) {
        console.warn('Navigation element not found');
        return;
    }
    
    // Auto-collapse at 1000px width threshold
    if (windowWidth < 1000) {
        // Always collapse when below 1000px, regardless of saved state
        nav.classList.remove('w-56');
        nav.classList.add('w-20');
        if (navToggleIcon) {
            navToggleIcon.classList.remove('fa-chevron-left');
            navToggleIcon.classList.add('fa-chevron-right');
        }
        if (navText) navText.classList.add('hidden');
        navLabels.forEach(label => label.classList.add('hidden'));
    } else {
        // Only expand if user hasn't manually collapsed it
        const savedState = localStorage.getItem('navCollapsed');
        if (savedState !== 'true') {
            nav.classList.remove('w-20');
            nav.classList.add('w-56');
            if (navToggleIcon) {
                navToggleIcon.classList.remove('fa-chevron-right');
                navToggleIcon.classList.add('fa-chevron-left');
            }
            if (navText) navText.classList.remove('hidden');
            navLabels.forEach(label => label.classList.remove('hidden'));
        }
    }
    
    // Handle AutoPilot responsive behavior
    if (autopilotSidebar) {
        if (windowWidth < 768) {
            // Hide on mobile
            autopilotSidebar.classList.add('hidden');
        } else {
            // Show on desktop
            autopilotSidebar.classList.remove('hidden');
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation states
    initializeNavState();
    initializeAutoPilotState();
    
    // Check authentication state
    checkAuthenticationState();
    
    // Initialize header actions - show Board button on home page by default
    const boardButton = document.getElementById('boardButton');
    const loggedInActions = document.getElementById('loggedInActions');
    boardButton.style.display = 'block';
    loggedInActions.style.display = 'none';
    
    // Initialize the progress bar to show the current stage (default to 'idea')
    showStage('idea');
    
    // Initialize founder type buttons
    initializeFounderTypeButtons();
    
    // Check if first time user
    if (!localStorage.getItem('ff_welcomed')) {
        // First time user - show welcome message when they visit flightplan
        if (window.location.hash === '#flightplan' || window.location.hash === '') {
            setTimeout(() => {
                const welcomeMsg = document.getElementById('welcomeMessage');
                if (welcomeMsg) {
                    welcomeMsg.style.display = 'block';
                    localStorage.setItem('ff_welcomed', 'true');
                    
                    // Auto-hide welcome message after 10 seconds
                    setTimeout(() => {
                        welcomeMsg.style.display = 'none';
                    }, 10000);
                }
            }, 500);
        }
    }
    
    // Handle initial hash or show home section by default
    handleHashChange();
    document.getElementById('launchSubNav').style.display = 'none';
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Debounce function for resize events
    let resizeTimeout;
    function debounceResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResponsiveNav, 150);
    }
    
    // Listen for window resize to handle responsive navigation
    window.addEventListener('resize', debounceResize);
    
    // Initialize responsive navigation on load
    handleResponsiveNav();
    
    // Close profile actions dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.profile-actions-dropdown')) {
            const menu = document.querySelector('.profile-actions-menu');
            if (menu) {
                menu.style.display = 'none';
            }
        }
        
        // Close mission dropdowns when clicking outside
        if (!event.target.closest('.mission-dropdown') && !event.target.closest('button[onclick*="toggleMissionDropdown"]')) {
            document.querySelectorAll('.mission-dropdown').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });
    
    // Add search input event listener
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.trim();
            if (query.length > 0) {
                showSearchResults(query);
            } else {
                // If search is empty, go back to previous section or home
                const previousSection = localStorage.getItem('previousSection') || 'home';
                showSection(previousSection);
            }
        });
        
        // Prevent form submission on enter
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        });
    }
    
    // Add event listeners for icon buttons
    document.querySelectorAll('.icon-btn[data-section]').forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.dataset.section;
            window.location.hash = section;
        });
    });
    
    // Add event listeners for section cards
    document.querySelectorAll('.section-card[data-section]').forEach(card => {
        card.addEventListener('click', function() {
            const section = this.dataset.section;
            window.location.hash = section;
        });
    });
    
    // Add event listeners for use case cards
    document.querySelectorAll('.use-case-card[data-usecase]').forEach(card => {
        card.addEventListener('click', function() {
            const usecase = this.dataset.usecase;
            showUseCaseDetail(usecase);
        });
    });
    
    // Add event listeners for filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter founders
            const filterValue = this.dataset.filter;
            filterFounders(filterValue);
        });
    });
});

// Authentication and Modal Functions
function showSignUpModal() {
    const modal = document.getElementById('signUpModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeSignUpModal() {
    document.getElementById('signUpModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function hideCalloutBar() {
    document.getElementById('calloutBar').style.display = 'none';
}

function closeHomeMessageBar() {
    document.getElementById('homeMessageBar').style.display = 'none';
}


function handlePhoneSubmit(event) {
    event.preventDefault();
    const phone = document.getElementById('phoneInput').value;
    
    // Simulate authentication (in real app, this would be an API call)
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userPhone', phone);
    
    // Close modal and show authenticated state
    closeSignUpModal();
    hideCalloutBar();
    checkAuthenticationState();
}

function authWithProvider(provider) {
    // Simulate social auth (in real app, this would use OAuth)
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('authProvider', provider);
    
    closeSignUpModal();
    hideCalloutBar();
    checkAuthenticationState();
}

function checkAuthenticationState() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const homeMessageBar = document.getElementById('homeMessageBar');
    
    if (isAuthenticated) {
        if (homeMessageBar) homeMessageBar.style.display = 'none';
        updateThirdCardForAuthenticated();
    } else {
        if (homeMessageBar) homeMessageBar.style.display = 'block';
        updateThirdCardForGuest();
    }
}

function updateThirdCardForAuthenticated() {
    const title = document.getElementById('thirdCardTitle');
    const description = document.getElementById('thirdCardDescription');
    const action = document.getElementById('thirdCardAction');
    
    if (title) title.textContent = 'Grow';
    if (description) description.textContent = 'Access powerful tools for ideation, planning, and progress tracking—plus expert support to move your startup forward.';
    if (action) action.textContent = 'Explore Tools';
}

function updateThirdCardForGuest() {
    const title = document.getElementById('thirdCardTitle');
    const description = document.getElementById('thirdCardDescription');
    const action = document.getElementById('thirdCardAction');
    
    if (title) title.textContent = 'Grow';
    if (description) description.textContent = 'Access powerful tools for ideation, planning, and progress tracking—plus expert support to move your startup forward.';
    if (action) action.textContent = 'Explore Tools';
}

function handleThirdCardClick() {
    showSection('tools');
}

function logout() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('authProvider');
    
    // Show all bars and go to home
    checkAuthenticationState();
    showSection('home');
}

// Filter Modal Functions
let selectedFilters = [];
let tempFilters = [];
let activeTab = 'founding-fifty';

function showFilterModal() {
    tempFilters = [...selectedFilters];
    const modal = document.getElementById('filterModal');
    modal.style.display = 'block';
    
    // Update checkboxes to match current filters
    const checkboxes = modal.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = tempFilters.includes(checkbox.value);
    });
}

function closeFilterModal() {
    document.getElementById('filterModal').style.display = 'none';
}

function toggleFilter(checkbox) {
    if (checkbox.checked) {
        if (!tempFilters.includes(checkbox.value)) {
            tempFilters.push(checkbox.value);
        }
    } else {
        tempFilters = tempFilters.filter(f => f !== checkbox.value);
    }
}

function clearAllFilters() {
    tempFilters = [];
    const checkboxes = document.querySelectorAll('#filterModal input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

function applyFilters() {
    selectedFilters = [...tempFilters];
    updateActiveFilters();
    filterFoundersBySelection();
    closeFilterModal();
}

function updateActiveFilters() {
    const container = document.getElementById('activeFilters');
    container.innerHTML = '';
    
    selectedFilters.forEach(filter => {
        const tag = document.createElement('div');
        tag.className = 'active-filter-tag';
        
        const filterLabels = {
            'saas': 'SaaS',
            'ecommerce': 'E-Commerce',
            'fintech': 'FinTech',
            'ai': 'AI/ML',
            'social': 'Social',
            'marketplace': 'Marketplace'
        };
        
        tag.innerHTML = `
            ${filterLabels[filter] || filter}
            <button onclick="removeFilter('${filter}')">&times;</button>
        `;
        
        container.appendChild(tag);
    });
}

function removeFilter(filter) {
    selectedFilters = selectedFilters.filter(f => f !== filter);
    updateActiveFilters();
    filterFoundersBySelection();
}

function filterFoundersBySelection() {
    // Start with tab filtering
    let tabFilteredFounders = [...founders];
    
    if (activeTab === 'connections') {
        // For demo purposes, show founders with verified status as "connections"
        tabFilteredFounders = founders.filter(f => f.verified);
    } else if (activeTab === 'recommended') {
        // For demo purposes, show SaaS and AI founders as "recommended"
        tabFilteredFounders = founders.filter(f => 
            f.category === 'saas' || f.category === 'ai'
        );
    }
    
    // Then apply category filters
    if (selectedFilters.length === 0) {
        filteredFounders = tabFilteredFounders;
    } else {
        filteredFounders = tabFilteredFounders.filter(founder => 
            selectedFilters.includes(founder.category)
        );
    }
    renderFounders();
}

function switchCommunityTab(tab) {
    activeTab = tab;
    
    // Update tab styles - only target buttons with onclick containing switchCommunityTab
    document.querySelectorAll('button[onclick*="switchCommunityTab"]').forEach(t => {
        t.classList.remove('text-white', 'border-white');
        t.classList.add('text-white/70', 'border-transparent');
    });
    
    // Find and update the active tab
    const activeTabElement = document.querySelector(`button[data-tab="${tab}"][onclick*="switchCommunityTab"]`);
    if (activeTabElement) {
        activeTabElement.classList.remove('text-white/70', 'border-transparent');
        activeTabElement.classList.add('text-white', 'border-white');
    }
    
    // Show/hide content sections based on tab
    const allFoundersContent = document.getElementById('all-founders-content');
    const myConnectionsContent = document.getElementById('my-connections-content');
    
    if (tab === 'all') {
        if (allFoundersContent) allFoundersContent.style.display = 'block';
        if (myConnectionsContent) myConnectionsContent.style.display = 'none';
        // Re-filter and render founders
        if (typeof filterFoundersBySelection === 'function') {
            filterFoundersBySelection();
        }
    } else if (tab === 'connections') {
        if (allFoundersContent) allFoundersContent.style.display = 'none';
        if (myConnectionsContent) myConnectionsContent.style.display = 'block';
    }
}

function selectConversation(id) {
    // Update active conversation
    document.querySelectorAll('.conversation-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // Update chat header based on conversation type
    const chatHeader = document.querySelector('.chat-header');
    if (id === 'squad-alpha') {
        chatHeader.innerHTML = `
            <div style="width: 40px; height: 40px; border-radius: 8px; background: var(--primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.25rem;">🚀</div>
            <div>
                <h3 style="margin: 0; font-size: 1.125rem;">Squad Alpha</h3>
                <span style="font-size: 0.875rem; color: var(--text-secondary);">5 members • Active</span>
            </div>
        `;
    } else if (id === 'squad-beta') {
        chatHeader.innerHTML = `
            <div style="width: 40px; height: 40px; border-radius: 8px; background: var(--warning); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.25rem;">⚡</div>
            <div>
                <h3 style="margin: 0; font-size: 1.125rem;">Squad Beta</h3>
                <span style="font-size: 0.875rem; color: var(--text-secondary);">4 members • On break</span>
            </div>
        `;
    } else {
        // Handle direct messages (keep existing functionality)
        chatHeader.innerHTML = `
            <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600;">BC</div>
            <div>
                <h3 style="margin: 0; font-size: 1.125rem;">Brian Chesky</h3>
                <span style="font-size: 0.875rem; color: var(--text-secondary);">Active now</span>
            </div>
        `;
    }
    
    // In a real app, this would load the conversation messages
    // For now, it just updates the UI
}

function getWorkspaceSwitcherHTML() {
    return `
        <div class="workspace-selector" onclick="toggleWorkspaceDropdown(event)" style="position: relative; display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; transition: background-color 0.2s; margin-left: auto;" onmouseover="this.style.backgroundColor='var(--secondary)'" onmouseout="this.style.backgroundColor='transparent'">
            <div style="width: 24px; height: 24px; border-radius: 6px; background: var(--primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.75rem;">VN</div>
            <div style="display: flex; flex-direction: column;">
                <div style="font-weight: 500; font-size: 0.875rem; line-height: 1;">Venture Name</div>
                <div style="font-size: 0.7rem; color: var(--text); line-height: 1;">Workspace</div>
            </div>
            <i class="fas fa-chevron-down" style="color: var(--text); font-size: 0.75rem;"></i>
            
            <div class="workspace-dropdown" style="display: none; position: absolute; top: 100%; right: 0; background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius); box-shadow: var(--shadow-lg); min-width: 280px; padding: 0.5rem; z-index: 1000; margin-top: 0.5rem;">
                <div class="workspace-item active" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border-radius: 8px; cursor: pointer; background: var(--secondary);">
                    <div style="width: 32px; height: 32px; border-radius: 8px; background: var(--primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.875rem;">VN</div>
                    <div style="flex: 1;">
                        <div style="font-weight: 600;">Venture Name</div>
                        <div style="font-size: 0.75rem; color: var(--text);">3 active tools</div>
                    </div>
                    <i class="fas fa-check" style="color: var(--primary);"></i>
                </div>
                <div class="workspace-item" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border-radius: 8px; cursor: pointer;" onmouseover="this.style.backgroundColor='var(--secondary)'" onmouseout="this.style.backgroundColor='transparent'">
                    <div style="width: 32px; height: 32px; border-radius: 8px; background: var(--warning); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.875rem;">S2</div>
                    <div style="flex: 1;">
                        <div style="font-weight: 600;">Startup 2</div>
                        <div style="font-size: 0.75rem; color: var(--text);">5 active tools</div>
                    </div>
                </div>
                <div class="workspace-item" style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border-radius: 8px; cursor: pointer;" onmouseover="this.style.backgroundColor='var(--secondary)'" onmouseout="this.style.backgroundColor='transparent'">
                    <div style="width: 32px; height: 32px; border-radius: 8px; background: var(--success); color: white; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.875rem;">+</div>
                    <div style="flex: 1;">
                        <div style="font-weight: 600; color: var(--text);">Add Workspace</div>
                        <div style="font-size: 0.75rem; color: var(--text-muted);">Create a new venture</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function toggleWorkspaceDropdown(event) {
    event.stopPropagation();
    // Close all other dropdowns first
    document.querySelectorAll('.workspace-dropdown').forEach(d => d.style.display = 'none');
    
    // Find the dropdown within the clicked element
    const dropdown = event.currentTarget.querySelector('.workspace-dropdown');
    if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    }
}

// Close workspace dropdown when clicking outside
document.addEventListener('click', function(event) {
    const workspaceSelectors = document.querySelectorAll('.workspace-selector');
    let clickedInside = false;
    
    workspaceSelectors.forEach(selector => {
        if (selector.contains(event.target)) {
            clickedInside = true;
        }
    });
    
    if (!clickedInside) {
        document.querySelectorAll('.workspace-dropdown').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
});

// Developer Tools Functions
let devToolsVisible = false;
let debugMode = false;

function toggleDevTools() {
    const panel = document.getElementById('devToolsPanel');
    const button = document.getElementById('devToolsButton');
    
    devToolsVisible = !devToolsVisible;
    
    if (devToolsVisible) {
        panel.style.display = 'block';
        button.style.background = 'var(--primary-hover)';
        updateDebugInfo();
        updatePerformanceInfo();
    } else {
        panel.style.display = 'none';
        button.style.background = 'var(--primary)';
    }
}

function updateDebugInfo() {
    document.getElementById('currentSection').textContent = document.querySelector('.section.active')?.id || 'home';
    document.getElementById('currentHash').textContent = window.location.hash || '#home';
    document.getElementById('viewport').textContent = `${window.innerWidth}x${window.innerHeight}`;
    document.getElementById('userAgent').textContent = navigator.userAgent.substring(0, 50) + '...';
}

function updatePerformanceInfo() {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    document.getElementById('pageLoadTime').textContent = loadTime > 0 ? `${loadTime}ms` : 'Measuring...';
    
    if (performance.memory) {
        const memory = performance.memory;
        const usedMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
        const totalMB = Math.round(memory.totalJSHeapSize / 1024 / 1024);
        document.getElementById('memoryUsage').textContent = `${usedMB}MB / ${totalMB}MB`;
    } else {
        document.getElementById('memoryUsage').textContent = 'Not available';
    }
    
    document.getElementById('domElements').textContent = document.querySelectorAll('*').length;
}

function clearLocalStorage() {
    if (confirm('Are you sure you want to clear all local storage?')) {
        localStorage.clear();
        logToConsole('Local storage cleared');
    }
}

function exportDebugInfo() {
    const info = {
        currentSection: document.querySelector('.section.active')?.id || 'home',
        currentHash: window.location.hash || '#home',
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        localStorage: Object.keys(localStorage).length,
        domElements: document.querySelectorAll('*').length
    };
    
    const blob = new Blob([JSON.stringify(info, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'debug-info.json';
    a.click();
    URL.revokeObjectURL(url);
    
    logToConsole('Debug info exported');
}

function toggleDebugMode() {
    debugMode = !debugMode;
    document.body.style.outline = debugMode ? '2px solid red' : 'none';
    
    if (debugMode) {
        document.querySelectorAll('*').forEach(el => {
            el.style.outline = '1px solid rgba(255, 0, 0, 0.3)';
        });
        logToConsole('Debug mode enabled - showing element outlines');
    } else {
        document.querySelectorAll('*').forEach(el => {
            el.style.outline = 'none';
        });
        logToConsole('Debug mode disabled');
    }
}

function reloadApp() {
    if (confirm('Are you sure you want to reload the app?')) {
        window.location.reload();
    }
}
function openProductTracker() {
    // Open product tracker in a new tab
    const trackerWindow = window.open('product/docs/index.html', '_blank');
    if (trackerWindow) {
        logToConsole('Product tracker opened in new tab');
    } else {
        // Fallback to navigation if popup blocked
        window.location.href = 'product/docs/index.html';
    }
}

function logToConsole(message) {
    const console = document.getElementById('devConsole');
    const timestamp = new Date().toLocaleTimeString();
    const entry = document.createElement('div');
    entry.innerHTML = `<span style="color: var(--text-muted);">[${timestamp}]</span> ${message}`;
    console.appendChild(entry);
    console.scrollTop = console.scrollHeight;
}

function handleConsoleInput(event) {
    if (event.key === 'Enter') {
        executeConsoleCommand();
    }
}

function executeConsoleCommand() {
    const input = document.getElementById('consoleInput');
    const command = input.value.trim();
    
    if (!command) return;
    
    logToConsole(`> ${command}`);
    
    // Handle special commands
    if (command === 'help') {
        logToConsole('Available commands:');
        logToConsole('- help: Show this help');
        logToConsole('- sections: List all sections');
        logToConsole('- goto(section): Navigate to section');
        logToConsole('- tools: List available tools');
        logToConsole('- clear: Clear console');
        logToConsole('- Also supports JavaScript evaluation');
        input.value = '';
        return;
    }
    
    if (command === 'sections') {
        const sections = document.querySelectorAll('.section');
        const sectionIds = Array.from(sections).map(s => s.id).filter(id => id);
        logToConsole(`Sections: ${sectionIds.join(', ')}`);
        input.value = '';
        return;
    }
    
    if (command === 'tools') {
        logToConsole('Available tools: drops, intel, missions, resources');
        input.value = '';
        return;
    }
    
    if (command === 'clear') {
        document.getElementById('devConsole').innerHTML = '';
        input.value = '';
        return;
    }
    
    if (command.startsWith('goto(') && command.endsWith(')')) {
        const section = command.slice(5, -1).replace(/['"]/g, '');
        try {
            showSection(section);
            logToConsole(`Navigated to section: ${section}`);
        } catch (error) {
            logToConsole(`Error navigating to section: ${error.message}`);
        }
        input.value = '';
        return;
    }
    
    // Execute JavaScript
    try {
        const result = eval(command);
        logToConsole(`< ${result}`);
    } catch (error) {
        logToConsole(`< Error: ${error.message}`);
    }
    
    input.value = '';
}

// Initialize developer tools on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add keyboard shortcut for developer tools (Ctrl+Shift+D)
    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.shiftKey && event.key === 'D') {
            event.preventDefault();
            toggleDevTools();
        }
    });
    
    // Initialize console with welcome message
    setTimeout(function() {
        logToConsole('Developer Tools initialized');
        logToConsole('Type "help" for available commands');
        logToConsole('Keyboard shortcut: Ctrl+Shift+D');
    }, 100);
    
    // Update debug info periodically when panel is open
    setInterval(function() {
        if (devToolsVisible) {
            updateDebugInfo();
            updatePerformanceInfo();
        }
    }, 1000);
});

// Founding Members functionality
function claimFoundingSpot(spotNumber) {
    alert(`Claiming founding member spot #${spotNumber}! This would open a sign-up form.`);
}

function claimFoundingMembership() {
    alert('Opening founding membership sign-up! This would integrate with authentication and payment systems.');
}

// Functions that are referenced in HTML files
function inviteFounders() {
    alert('Invite founders functionality coming soon!');
}

function newMessage() {
    alert('New message functionality coming soon!');
}

// Detail view navigation functions
function showFounderProfile(founderId) {
    window.location.href = `founder-profile.html?id=${founderId}`;
}

function showSquadDetail(squadId) {
    window.location.href = `squad-detail.html?id=${squadId}`;
}

function showUseCaseDetail(useCaseId) {
    window.location.href = `usecase-detail.html?id=${useCaseId}`;
}

// Mission-related functions
function continueMission() {
    alert('Continue Mission: This would guide you through the next step of your current mission with detailed instructions and resources.');
}

// AutoPilot message injection functions
function showAutoPilotMessage(message, duration = 10000) {
    const injector = document.getElementById('autopilot-injector');
    const messageEl = document.getElementById('autopilot-message');
    
    if (injector && messageEl) {
        messageEl.textContent = message;
        injector.classList.remove('hidden');
        
        // Auto-hide after specified duration
        setTimeout(() => {
            dismissAutoPilotMessage();
        }, duration);
    }
}

function dismissAutoPilotMessage() {
    const injector = document.getElementById('autopilot-injector');
    if (injector) {
        injector.classList.add('hidden');
    }
}

function openAutoPilot() {
    window.location.href = 'autopilot.html';
}

// Example AutoPilot messages that can be triggered on different pages
function triggerAutoPilotWelcome() {
    if (window.location.pathname.includes('profile.html')) {
        showAutoPilotMessage('Complete your profile to get personalized founder recommendations!');
    } else if (window.location.pathname.includes('founders.html')) {
        showAutoPilotMessage('Connect with 3 founders this week to expand your network.');
    } else if (window.location.pathname.includes('flightplan.html')) {
        showAutoPilotMessage('You have 2 missions ready to start. Focus on customer interviews first!');
    }
}

// Trigger AutoPilot messages on page load with delay
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        triggerAutoPilotWelcome();
    }, 3000);
});