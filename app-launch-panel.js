// App launch panel component for FoundersFleet
let appPanelOpen = false;

// App configuration details
const appConfigs = {
    'EconoMaestro': {
        name: 'EconoMaestro',
        icon: 'fa-globe-americas',
        iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-600',
        sections: {
            configuration: {
                title: 'Configuration',
                items: [
                    { label: 'Target Market', value: 'Global', type: 'select', options: ['Global', 'US Only', 'Europe', 'Asia'] },
                    { label: 'Update Frequency', value: 'Real-time', type: 'select', options: ['Real-time', 'Daily', 'Weekly'] },
                    { label: 'Forecast Horizon', value: '12 months', type: 'select', options: ['3 months', '6 months', '12 months', '24 months'] },
                    { label: 'Risk Tolerance', value: 'Moderate', type: 'select', options: ['Conservative', 'Moderate', 'Aggressive'] }
                ]
            },
            settings: {
                title: 'Alert Settings',
                items: [
                    { label: 'Economic Indicators', value: true, type: 'toggle' },
                    { label: 'Market Volatility', value: true, type: 'toggle' },
                    { label: 'Policy Changes', value: false, type: 'toggle' },
                    { label: 'Email Notifications', value: true, type: 'toggle' }
                ]
            },
            integrations: {
                title: 'Integrations',
                items: [
                    { name: 'Slack', connected: true, icon: 'fa-slack' },
                    { name: 'Bloomberg Terminal', connected: false, icon: 'fa-chart-bar' },
                    { name: 'Google Sheets', connected: true, icon: 'fa-table' },
                    { name: 'Zapier', connected: false, icon: 'fa-bolt' }
                ]
            },
            actions: {
                title: 'Quick Actions',
                items: [
                    { label: 'Generate Report', icon: 'fa-file-pdf', action: 'generateReport' },
                    { label: 'Schedule Briefing', icon: 'fa-calendar', action: 'scheduleBriefing' },
                    { label: 'Export Data', icon: 'fa-download', action: 'exportData' },
                    { label: 'View Tutorial', icon: 'fa-play-circle', action: 'viewTutorial' }
                ]
            }
        }
    },
    'Runway': {
        name: 'Runway',
        icon: 'fa-chart-line',
        iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
        sections: {
            configuration: {
                title: 'Financial Model',
                items: [
                    { label: 'Business Model', value: 'SaaS', type: 'select', options: ['SaaS', 'E-commerce', 'Marketplace', 'Service'] },
                    { label: 'Currency', value: 'USD', type: 'select', options: ['USD', 'EUR', 'GBP', 'CAD'] },
                    { label: 'Fiscal Year Start', value: 'January', type: 'select', options: ['January', 'April', 'July', 'October'] },
                    { label: 'Growth Model', value: 'Conservative', type: 'select', options: ['Conservative', 'Realistic', 'Optimistic'] }
                ]
            },
            settings: {
                title: 'Runway Settings',
                items: [
                    { label: 'Auto-save', value: true, type: 'toggle' },
                    { label: 'Scenario Comparison', value: true, type: 'toggle' },
                    { label: 'Cash Flow Alerts', value: true, type: 'toggle' },
                    { label: 'Monthly Reports', value: false, type: 'toggle' }
                ]
            },
            integrations: {
                title: 'Connected Accounts',
                items: [
                    { name: 'QuickBooks', connected: true, icon: 'fa-calculator' },
                    { name: 'Stripe', connected: true, icon: 'fa-credit-card' },
                    { name: 'Bank Account', connected: false, icon: 'fa-university' },
                    { name: 'Gusto', connected: false, icon: 'fa-users' }
                ]
            },
            actions: {
                title: 'Financial Actions',
                items: [
                    { label: 'Update Actuals', icon: 'fa-sync', action: 'updateActuals' },
                    { label: 'Create Scenario', icon: 'fa-code-branch', action: 'createScenario' },
                    { label: 'Share Model', icon: 'fa-share', action: 'shareModel' },
                    { label: 'Export to PDF', icon: 'fa-file-pdf', action: 'exportPDF' }
                ]
            }
        }
    },
    'CoFounderMatch': {
        name: 'CoFounderMatch',
        icon: 'fa-user-friends',
        iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
        sections: {
            configuration: {
                title: 'Matching Preferences',
                items: [
                    { label: 'Role Seeking', value: 'Technical Co-founder', type: 'select', options: ['Technical Co-founder', 'Business Co-founder', 'Design Co-founder', 'Any Role'] },
                    { label: 'Commitment Level', value: 'Full-time', type: 'select', options: ['Full-time', 'Part-time', 'Flexible'] },
                    { label: 'Location Preference', value: 'Remote OK', type: 'select', options: ['Same City', 'Same Country', 'Remote OK', 'Any Location'] },
                    { label: 'Industry Focus', value: 'B2B SaaS', type: 'select', options: ['B2B SaaS', 'Consumer', 'Marketplace', 'Fintech', 'Healthcare', 'Any'] }
                ]
            },
            settings: {
                title: 'Match Settings',
                items: [
                    { label: 'Auto-match Suggestions', value: true, type: 'toggle' },
                    { label: 'Show Only Verified', value: false, type: 'toggle' },
                    { label: 'Message Notifications', value: true, type: 'toggle' },
                    { label: 'Profile Visibility', value: true, type: 'toggle' }
                ]
            },
            integrations: {
                title: 'Profile Connections',
                items: [
                    { name: 'LinkedIn', connected: true, icon: 'fa-linkedin' },
                    { name: 'GitHub', connected: true, icon: 'fa-github' },
                    { name: 'Twitter', connected: false, icon: 'fa-twitter' },
                    { name: 'AngelList', connected: false, icon: 'fa-angellist' }
                ]
            },
            actions: {
                title: 'Matching Actions',
                items: [
                    { label: 'Browse Matches', icon: 'fa-search', action: 'browseMatches' },
                    { label: 'Update Profile', icon: 'fa-user-edit', action: 'updateProfile' },
                    { label: 'Schedule Intro', icon: 'fa-calendar-check', action: 'scheduleIntro' },
                    { label: 'Export Matches', icon: 'fa-download', action: 'exportMatches' }
                ]
            }
        }
    },
    'ValidateAI': {
        name: 'ValidateAI',
        icon: 'fa-lightbulb',
        iconBg: 'bg-gradient-to-br from-yellow-500 to-orange-600',
        sections: {
            configuration: {
                title: 'Validation Settings',
                items: [
                    { label: 'Industry', value: 'Technology', type: 'select', options: ['Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education'] },
                    { label: 'Target Market', value: 'B2B', type: 'select', options: ['B2B', 'B2C', 'B2B2C', 'B2G'] },
                    { label: 'Validation Depth', value: 'Comprehensive', type: 'select', options: ['Quick', 'Standard', 'Comprehensive', 'Deep Dive'] },
                    { label: 'Data Sources', value: 'All Sources', type: 'select', options: ['Public Data', 'Premium Data', 'All Sources'] }
                ]
            },
            settings: {
                title: 'Analysis Settings',
                items: [
                    { label: 'Real-time Updates', value: true, type: 'toggle' },
                    { label: 'Competitor Tracking', value: true, type: 'toggle' },
                    { label: 'Market Alerts', value: false, type: 'toggle' },
                    { label: 'Weekly Reports', value: true, type: 'toggle' }
                ]
            },
            integrations: {
                title: 'Data Integrations',
                items: [
                    { name: 'Google Trends', connected: true, icon: 'fa-chart-line' },
                    { name: 'Crunchbase', connected: false, icon: 'fa-database' },
                    { name: 'Product Hunt', connected: true, icon: 'fa-product-hunt' },
                    { name: 'Reddit API', connected: false, icon: 'fa-reddit' }
                ]
            },
            actions: {
                title: 'Validation Actions',
                items: [
                    { label: 'Start Validation', icon: 'fa-play', action: 'startValidation' },
                    { label: 'View History', icon: 'fa-history', action: 'viewHistory' },
                    { label: 'Compare Ideas', icon: 'fa-balance-scale', action: 'compareIdeas' },
                    { label: 'Share Report', icon: 'fa-share', action: 'shareReport' }
                ]
            }
        }
    },
    'ShipFast': {
        name: 'ShipFast',
        icon: 'fa-rocket',
        iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
        sections: {
            configuration: {
                title: 'Development Setup',
                items: [
                    { label: 'Tech Stack', value: 'Next.js + Tailwind', type: 'select', options: ['Next.js + Tailwind', 'React + MUI', 'Vue + Vuetify', 'Custom Stack'] },
                    { label: 'Deployment Target', value: 'Vercel', type: 'select', options: ['Vercel', 'Netlify', 'AWS', 'Heroku', 'Railway'] },
                    { label: 'Database', value: 'PostgreSQL', type: 'select', options: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Firebase'] },
                    { label: 'Authentication', value: 'NextAuth', type: 'select', options: ['NextAuth', 'Auth0', 'Clerk', 'Supabase Auth', 'Custom'] }
                ]
            },
            settings: {
                title: 'Project Settings',
                items: [
                    { label: 'Auto-deploy', value: true, type: 'toggle' },
                    { label: 'Type Checking', value: true, type: 'toggle' },
                    { label: 'Error Tracking', value: true, type: 'toggle' },
                    { label: 'Performance Monitoring', value: false, type: 'toggle' }
                ]
            },
            integrations: {
                title: 'Development Tools',
                items: [
                    { name: 'GitHub', connected: true, icon: 'fa-github' },
                    { name: 'Vercel', connected: true, icon: 'fa-cloud' },
                    { name: 'Sentry', connected: false, icon: 'fa-bug' },
                    { name: 'Stripe', connected: false, icon: 'fa-credit-card' }
                ]
            },
            actions: {
                title: 'Quick Actions',
                items: [
                    { label: 'Create Project', icon: 'fa-plus', action: 'createProject' },
                    { label: 'Deploy Now', icon: 'fa-cloud-upload-alt', action: 'deployNow' },
                    { label: 'View Logs', icon: 'fa-terminal', action: 'viewLogs' },
                    { label: 'Run Tests', icon: 'fa-vial', action: 'runTests' }
                ]
            }
        }
    },
    // Add configurations for all other apps...
    'Default': {
        name: 'App Configuration',
        icon: 'fa-cog',
        iconBg: 'bg-gradient-to-br from-gray-500 to-gray-700',
        sections: {
            configuration: {
                title: 'Configuration',
                items: [
                    { label: 'Environment', value: 'Production', type: 'select', options: ['Development', 'Staging', 'Production'] },
                    { label: 'API Version', value: 'v2', type: 'select', options: ['v1', 'v2', 'v3'] },
                    { label: 'Data Region', value: 'US-East', type: 'select', options: ['US-East', 'US-West', 'EU', 'APAC'] }
                ]
            },
            settings: {
                title: 'Settings',
                items: [
                    { label: 'Notifications', value: true, type: 'toggle' },
                    { label: 'Auto-sync', value: true, type: 'toggle' },
                    { label: 'Dark Mode', value: false, type: 'toggle' },
                    { label: 'Beta Features', value: false, type: 'toggle' }
                ]
            },
            integrations: {
                title: 'Integrations',
                items: [
                    { name: 'Slack', connected: false, icon: 'fa-slack' },
                    { name: 'Email', connected: true, icon: 'fa-envelope' },
                    { name: 'Calendar', connected: false, icon: 'fa-calendar' },
                    { name: 'Analytics', connected: true, icon: 'fa-chart-bar' }
                ]
            },
            actions: {
                title: 'Actions',
                items: [
                    { label: 'Open App', icon: 'fa-external-link-alt', action: 'openApp' },
                    { label: 'View Docs', icon: 'fa-book', action: 'viewDocs' },
                    { label: 'Get Support', icon: 'fa-headset', action: 'getSupport' },
                    { label: 'Reset Settings', icon: 'fa-undo', action: 'resetSettings' }
                ]
            }
        }
    }
};

function initializeAppPanel() {
    // Check if panel already exists
    if (document.getElementById('app-launch-panel')) {
        return;
    }
    
    // Create app panel HTML
    const panel = document.createElement('div');
    panel.id = 'app-launch-panel';
    panel.className = 'fixed right-0 top-0 h-full w-[500px] bg-white shadow-2xl transform translate-x-full transition-transform duration-300 z-[200] flex flex-col overflow-hidden';
    panel.innerHTML = `
        <!-- Panel Header -->
        <div class="p-6 border-b border-border flex items-center justify-between bg-white">
            <div id="app-panel-header-content">
                <h3 class="font-semibold text-text-primary">App Configuration</h3>
            </div>
            <button onclick="closeAppPanel()" class="p-2 hover:bg-section-bg rounded transition-all">
                <i class="fas fa-times text-text-secondary"></i>
            </button>
        </div>
        
        <!-- Panel Content -->
        <div class="flex-1 overflow-y-auto" id="app-panel-content">
            <!-- Content will be dynamically inserted here -->
        </div>
    `;
    
    document.body.appendChild(panel);
    
    // Add backdrop
    const backdrop = document.createElement('div');
    backdrop.id = 'app-panel-backdrop';
    backdrop.className = 'fixed inset-0 bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300 z-[199]';
    backdrop.onclick = closeAppPanel;
    document.body.appendChild(backdrop);
}

function openAppPanel(appName) {
    if (!document.getElementById('app-launch-panel')) {
        initializeAppPanel();
    }
    
    const config = appConfigs[appName] || appConfigs['Default'];
    config.name = appName; // Use the actual app name
    
    appPanelOpen = true;
    
    // Show panel
    const panel = document.getElementById('app-launch-panel');
    const backdrop = document.getElementById('app-panel-backdrop');
    const headerContent = document.getElementById('app-panel-header-content');
    const content = document.getElementById('app-panel-content');
    
    // Update header
    headerContent.innerHTML = `
        <div class="flex items-center gap-3">
            <div class="w-10 h-10 ${config.iconBg} rounded-lg flex items-center justify-center text-white">
                <i class="fas ${config.icon}"></i>
            </div>
            <div>
                <h3 class="font-semibold text-text-primary">${config.name} Configuration</h3>
                <p class="text-sm text-text-secondary">Customize your app experience</p>
            </div>
        </div>
    `;
    
    // Update content
    content.innerHTML = `
        <div class="p-6 space-y-6">
            <!-- Configuration Section -->
            <div class="bg-section-bg rounded-lg p-4">
                <h4 class="font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <i class="fas fa-sliders-h text-text-secondary"></i>
                    ${config.sections.configuration.title}
                </h4>
                <div class="space-y-3">
                    ${config.sections.configuration.items.map(item => `
                        <div class="flex items-center justify-between">
                            <label class="text-sm text-text-secondary">${item.label}</label>
                            ${item.type === 'select' ? `
                                <select class="px-3 py-1 border border-border rounded-lg text-sm bg-white">
                                    ${item.options.map(opt => `
                                        <option ${opt === item.value ? 'selected' : ''}>${opt}</option>
                                    `).join('')}
                                </select>
                            ` : `
                                <input type="text" value="${item.value}" class="px-3 py-1 border border-border rounded-lg text-sm" />
                            `}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Settings Section -->
            <div class="bg-section-bg rounded-lg p-4">
                <h4 class="font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <i class="fas fa-cog text-text-secondary"></i>
                    ${config.sections.settings.title}
                </h4>
                <div class="space-y-3">
                    ${config.sections.settings.items.map(item => `
                        <div class="flex items-center justify-between">
                            <label class="text-sm text-text-secondary">${item.label}</label>
                            <button class="toggle-switch ${item.value ? 'active' : ''}" onclick="toggleSwitch(this)">
                                <div class="toggle-handle"></div>
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Integrations Section -->
            <div class="bg-section-bg rounded-lg p-4">
                <h4 class="font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <i class="fas fa-plug text-text-secondary"></i>
                    ${config.sections.integrations.title}
                </h4>
                <div class="space-y-3">
                    ${config.sections.integrations.items.map(item => `
                        <div class="flex items-center justify-between p-3 bg-white rounded-lg border ${item.connected ? 'border-success' : 'border-border'}">
                            <div class="flex items-center gap-3">
                                <i class="fas ${item.icon} text-text-secondary"></i>
                                <span class="text-sm font-medium">${item.name}</span>
                            </div>
                            <button class="px-3 py-1 text-xs rounded-lg ${item.connected ? 'bg-success text-white' : 'bg-gray-100 text-text-secondary hover:bg-gray-200'} transition-all">
                                ${item.connected ? 'Connected' : 'Connect'}
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Actions Section -->
            <div class="bg-section-bg rounded-lg p-4">
                <h4 class="font-semibold text-text-primary mb-4 flex items-center gap-2">
                    <i class="fas fa-bolt text-text-secondary"></i>
                    ${config.sections.actions.title}
                </h4>
                <div class="grid grid-cols-2 gap-3">
                    ${config.sections.actions.items.map(item => `
                        <button onclick="handleAppAction('${item.action}')" class="p-3 bg-white rounded-lg border border-border hover:border-primary hover:bg-primary hover:text-white transition-all group">
                            <i class="fas ${item.icon} mb-2 text-primary group-hover:text-white"></i>
                            <p class="text-sm font-medium">${item.label}</p>
                        </button>
                    `).join('')}
                </div>
            </div>
            
            <!-- Launch Button -->
            <div class="pt-4 border-t border-border">
                <button onclick="launchAppDirect('${appName}')" class="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-all flex items-center justify-center gap-2">
                    <i class="fas fa-rocket"></i>
                    Launch ${appName}
                </button>
                <p class="text-xs text-text-muted text-center mt-3">
                    All settings will be saved automatically
                </p>
            </div>
        </div>
    `;
    
    // Add the toggle switch styles if not already present
    if (!document.getElementById('toggle-switch-styles')) {
        const style = document.createElement('style');
        style.id = 'toggle-switch-styles';
        style.textContent = `
            .toggle-switch {
                width: 48px;
                height: 24px;
                background: #E5E5E5;
                border-radius: 12px;
                position: relative;
                cursor: pointer;
                transition: background 0.3s;
            }
            .toggle-switch.active {
                background: #10B981;
            }
            .toggle-handle {
                width: 20px;
                height: 20px;
                background: white;
                border-radius: 50%;
                position: absolute;
                top: 2px;
                left: 2px;
                transition: transform 0.3s;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .toggle-switch.active .toggle-handle {
                transform: translateX(24px);
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        panel.classList.remove('translate-x-full');
        backdrop.classList.remove('opacity-0', 'pointer-events-none');
    }, 10);
}

function closeAppPanel() {
    appPanelOpen = false;
    
    const panel = document.getElementById('app-launch-panel');
    const backdrop = document.getElementById('app-panel-backdrop');
    
    panel.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
}

function toggleSwitch(element) {
    element.classList.toggle('active');
}

function handleAppAction(action) {
    // Placeholder for action handling
    console.log('App action:', action);
    alert(`Action: ${action} - This would perform the requested action in a real implementation.`);
}

function launchAppDirect(appName) {
    // Close the panel and launch the app
    closeAppPanel();
    setTimeout(() => {
        alert(`Launching ${appName}...`);
    }, 300);
}

// Update the global launchApp function
window.launchApp = function() {
    // Get the app name from the page
    const appNameElement = document.querySelector('h1.text-xl.font-bold');
    const appName = appNameElement ? appNameElement.textContent : 'App';
    openAppPanel(appName);
};

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAppPanel);
} else {
    initializeAppPanel();
}