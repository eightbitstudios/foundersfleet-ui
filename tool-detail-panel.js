// Tool detail panel component for FoundersFleet
let toolPanelOpen = false;

// Tool details data
const toolDetails = {
    'DigitalOcean': {
        name: 'DigitalOcean',
        tagline: 'Cloud infrastructure that grows with you',
        description: 'DigitalOcean simplifies cloud computing so developers and businesses can spend more time building software that changes the world. Build, deploy, and scale apps quickly using a simple, fully managed solution.',
        icon: 'fa-server',
        iconBg: 'bg-blue-600',
        categories: ['Infrastructure'],
        url: 'https://digitalocean.com',
        ffPick: true,
        pricing: 'Starting at $4/mo',
        features: [
            'Simple, predictable pricing',
            'Deploy in seconds with 1-Click Apps',
            'Global data centers',
            'Managed Kubernetes',
            'Built-in monitoring and alerting'
        ],
        benefits: [
            'Developer-friendly documentation',
            'Active community and tutorials',
            'Reliable uptime (99.99% SLA)',
            'Transparent pricing with no hidden fees'
        ],
        bestFor: 'Startups looking for affordable, scalable cloud infrastructure with excellent developer experience',
        alternatives: ['AWS', 'Google Cloud', 'Azure', 'Linode']
    },
    'Flutter': {
        name: 'Flutter',
        tagline: 'Build beautiful native apps from a single codebase',
        description: 'Flutter is Google\'s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Ship high-quality apps faster than ever.',
        icon: 'fa-mobile-alt',
        iconBg: 'bg-blue-500',
        categories: ['Development'],
        url: 'https://flutter.dev',
        ffPick: true,
        pricing: 'Free & Open Source',
        features: [
            'Single codebase for all platforms',
            'Hot reload for instant updates',
            'Rich set of pre-built widgets',
            'Native performance',
            'Extensive package ecosystem'
        ],
        benefits: [
            'Reduce development time by 50%',
            'Consistent UI across platforms',
            'Strong community support',
            'Backed by Google'
        ],
        bestFor: 'Teams wanting to build cross-platform mobile apps without compromising on performance or user experience',
        alternatives: ['React Native', 'Ionic', 'Xamarin', 'Native development']
    },
    'Stripe': {
        name: 'Stripe',
        tagline: 'Payment processing and financial infrastructure',
        description: 'Stripe is a suite of payment APIs that powers commerce for online businesses of all sizes. Accept payments and scale faster with a platform designed for growth.',
        icon: 'fa-credit-card',
        iconBg: 'bg-indigo-600',
        categories: ['Finance', 'Operations'],
        url: 'https://stripe.com',
        ffPick: true,
        pricing: '2.9% + 30¢ per transaction',
        features: [
            'Accept 135+ currencies',
            'Built-in fraud prevention',
            'Subscription management',
            'Mobile SDKs',
            'Revenue reporting'
        ],
        benefits: [
            'Developer-first approach',
            'Extensive documentation',
            'Global payment support',
            'PCI compliance handled'
        ],
        bestFor: 'Any startup that needs to accept payments online, especially SaaS and e-commerce',
        alternatives: ['PayPal', 'Square', 'Braintree', 'Adyen']
    },
    // Add more tools as needed
    'Notion': {
        name: 'Notion',
        tagline: 'All-in-one workspace for notes, docs, and collaboration',
        description: 'Notion is the all-in-one workspace where you can write, plan, collaborate, and get organized. It allows you to take notes, add tasks, manage projects, and more.',
        icon: 'fa-file-alt',
        iconBg: 'bg-black',
        categories: ['Product', 'Operations'],
        url: 'https://notion.so',
        pricing: 'Free for personal use, $8/user/mo for teams',
        features: [
            'Flexible page system',
            'Database functionality',
            'Real-time collaboration',
            'Templates gallery',
            'API access'
        ],
        benefits: [
            'Replace multiple tools',
            'Highly customizable',
            'Great for documentation',
            'Easy onboarding'
        ],
        bestFor: 'Teams that want a flexible workspace for documentation, project management, and knowledge sharing',
        alternatives: ['Confluence', 'Coda', 'Obsidian', 'Airtable']
    }
};

function initializeToolPanel() {
    // Check if panel already exists
    if (document.getElementById('tool-detail-panel')) {
        return;
    }
    
    // Create tool panel HTML
    const panel = document.createElement('div');
    panel.id = 'tool-detail-panel';
    panel.className = 'fixed right-0 top-0 h-full w-[500px] bg-white shadow-2xl transform translate-x-full transition-transform duration-300 z-[200] flex flex-col overflow-hidden';
    panel.innerHTML = `
        <!-- Panel Header -->
        <div class="p-6 border-b border-border flex items-center justify-between bg-white">
            <div id="panel-header-content">
                <h3 class="font-semibold text-text-primary">Tool Details</h3>
            </div>
            <button onclick="closeToolPanel()" class="p-2 hover:bg-section-bg rounded transition-all">
                <i class="fas fa-times text-text-secondary"></i>
            </button>
        </div>
        
        <!-- Panel Content -->
        <div class="flex-1 overflow-y-auto" id="tool-panel-content">
            <!-- Content will be dynamically inserted here -->
        </div>
    `;
    
    document.body.appendChild(panel);
    
    // Add backdrop
    const backdrop = document.createElement('div');
    backdrop.id = 'tool-panel-backdrop';
    backdrop.className = 'fixed inset-0 bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300 z-[199]';
    backdrop.onclick = closeToolPanel;
    document.body.appendChild(backdrop);
}

function openToolPanel(toolName) {
    if (!document.getElementById('tool-detail-panel')) {
        initializeToolPanel();
    }
    
    const tool = toolDetails[toolName] || {
        name: toolName,
        tagline: 'Third-party tool',
        description: 'Details coming soon...',
        icon: 'fa-cube',
        iconBg: 'bg-gray-600',
        categories: [],
        features: [],
        benefits: [],
        bestFor: 'Details not available yet'
    };
    
    toolPanelOpen = true;
    
    // Show panel
    const panel = document.getElementById('tool-detail-panel');
    const backdrop = document.getElementById('tool-panel-backdrop');
    const headerContent = document.getElementById('panel-header-content');
    const content = document.getElementById('tool-panel-content');
    
    // Update header
    headerContent.innerHTML = `
        <div class="flex items-center gap-3">
            <div class="w-10 h-10 ${tool.iconBg} rounded-lg flex items-center justify-center text-white">
                <i class="fas ${tool.icon}"></i>
            </div>
            <div>
                <h3 class="font-semibold text-text-primary flex items-center gap-2">
                    ${tool.name}
                    ${tool.ffPick ? '<span class="bg-primary text-white px-2 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1"><i class="fas fa-star text-xs"></i>FF Pick</span>' : ''}
                </h3>
                <p class="text-sm text-text-secondary">${tool.tagline}</p>
            </div>
        </div>
    `;
    
    // Update content
    content.innerHTML = `
        <div class="p-6 space-y-6">
            <!-- Description -->
            <div>
                <p class="text-text-secondary leading-relaxed">${tool.description}</p>
            </div>
            
            <!-- Quick Info -->
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-section-bg rounded-lg p-4">
                    <p class="text-sm text-text-muted mb-1">Pricing</p>
                    <p class="font-medium text-text-primary">${tool.pricing || 'Contact for pricing'}</p>
                </div>
                <div class="bg-section-bg rounded-lg p-4">
                    <p class="text-sm text-text-muted mb-1">Categories</p>
                    <p class="font-medium text-text-primary">${tool.categories.join(', ')}</p>
                </div>
            </div>
            
            <!-- Features -->
            ${tool.features && tool.features.length > 0 ? `
            <div>
                <h4 class="font-semibold text-text-primary mb-3">Key Features</h4>
                <ul class="space-y-2">
                    ${tool.features.map(feature => `
                        <li class="flex items-start gap-2">
                            <i class="fas fa-check text-primary mt-0.5"></i>
                            <span class="text-sm text-text-secondary">${feature}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            ` : ''}
            
            <!-- Benefits -->
            ${tool.benefits && tool.benefits.length > 0 ? `
            <div>
                <h4 class="font-semibold text-text-primary mb-3">Why Founders Love It</h4>
                <ul class="space-y-2">
                    ${tool.benefits.map(benefit => `
                        <li class="flex items-start gap-2">
                            <i class="fas fa-heart text-primary mt-0.5"></i>
                            <span class="text-sm text-text-secondary">${benefit}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            ` : ''}
            
            <!-- Best For -->
            <div class="bg-blue-50 rounded-lg p-4">
                <p class="text-sm font-medium text-blue-900 mb-1">Best For</p>
                <p class="text-sm text-blue-800">${tool.bestFor}</p>
            </div>
            
            <!-- Alternatives -->
            ${tool.alternatives && tool.alternatives.length > 0 ? `
            <div>
                <p class="text-sm text-text-muted mb-2">Alternatives to consider:</p>
                <div class="flex flex-wrap gap-2">
                    ${tool.alternatives.map(alt => `
                        <span class="px-3 py-1 bg-section-bg text-text-secondary rounded-lg text-sm">${alt}</span>
                    `).join('')}
                </div>
            </div>
            ` : ''}
            
            <!-- CTA -->
            <div class="pt-4 border-t border-border">
                <a href="${tool.url}" target="_blank" class="block w-full px-6 py-3 bg-primary text-white rounded-lg text-center font-medium hover:bg-primary-hover transition-all">
                    Visit ${tool.name} <i class="fas fa-external-link-alt ml-2"></i>
                </a>
                <p class="text-xs text-text-muted text-center mt-3">
                    FoundersFleet may receive a commission from some partners
                </p>
            </div>
        </div>
    `;
    
    setTimeout(() => {
        panel.classList.remove('translate-x-full');
        backdrop.classList.remove('opacity-0', 'pointer-events-none');
    }, 10);
}

function closeToolPanel() {
    toolPanelOpen = false;
    
    const panel = document.getElementById('tool-detail-panel');
    const backdrop = document.getElementById('tool-panel-backdrop');
    
    panel.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeToolPanel);
} else {
    initializeToolPanel();
}