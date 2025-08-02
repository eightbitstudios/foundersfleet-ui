// Change Plan panel component for FoundersFleet
let planPanelOpen = false;

// Plan details
const planDetails = {
    free: {
        name: 'Starter',
        price: '$0',
        period: '',
        features: [
            '1 Squad membership',
            '1 App access',
            '',
            '* Usage Limits do apply for different AI models integrations.'
        ],
        buttonText: 'Downgrade to Starter',
        buttonClass: 'bg-gray-600 hover:bg-gray-700'
    },
    pro: {
        name: 'Pro',
        price: '$30',
        period: '/month',
        current: true,
        features: [
            '3 Squad memberships',
            '3 Apps access',
            '',
            '* Usage Limits do apply for different AI models integrations.'
        ],
        popular: true,
        buttonText: 'Current Plan',
        buttonClass: 'bg-gray-400 cursor-not-allowed'
    },
    max: {
        name: 'Max',
        price: '$100',
        period: '/month',
        features: [
            'Unlimited Squads and Apps',
            '',
            '* Usage Limits do apply for different AI models integrations.'
        ],
        buttonText: 'Upgrade to Max',
        buttonClass: 'bg-primary hover:bg-primary-hover'
    }
};

function initializePlanPanel() {
    // Check if panel already exists
    if (document.getElementById('change-plan-panel')) {
        return;
    }
    
    // Create plan panel HTML
    const panel = document.createElement('div');
    panel.id = 'change-plan-panel';
    panel.className = 'fixed right-0 top-0 h-full w-[600px] bg-white shadow-2xl transform translate-x-full transition-transform duration-300 z-[200] flex flex-col overflow-hidden';
    panel.innerHTML = `
        <!-- Panel Header -->
        <div class="p-6 border-b border-border flex items-center justify-between bg-white">
            <div>
                <h3 class="text-xl font-semibold text-text-primary">Change Your Plan</h3>
                <p class="text-sm text-text-secondary mt-1">Choose the plan that fits your founder journey</p>
            </div>
            <button onclick="closePlanPanel()" class="p-2 hover:bg-section-bg rounded transition-all">
                <i class="fas fa-times text-text-secondary"></i>
            </button>
        </div>
        
        <!-- Panel Content -->
        <div class="flex-1 overflow-y-auto p-6">
            <!-- Current Plan Notice -->
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div class="flex items-center gap-2">
                    <i class="fas fa-info-circle text-blue-600"></i>
                    <p class="text-sm text-blue-800">You're currently on the <strong>Pro Plan</strong>. Changes will take effect at the next billing cycle.</p>
                </div>
            </div>
            
            <!-- Plans Grid -->
            <div class="grid grid-cols-1 gap-6">
                <!-- Free Plan -->
                <div class="border border-border rounded-lg p-6 ${planDetails.free.current ? 'ring-2 ring-primary' : ''}">
                    <div class="flex items-start justify-between mb-4">
                        <div>
                            <h4 class="text-lg font-semibold text-text-primary">${planDetails.free.name}</h4>
                            <div class="flex items-baseline gap-1 mt-1">
                                <span class="text-2xl font-bold text-text-primary">${planDetails.free.price}</span>
                                <span class="text-text-secondary">${planDetails.free.period}</span>
                            </div>
                        </div>
                    </div>
                    
                    <ul class="space-y-2 mb-6">
                        ${planDetails.free.features.filter(feature => feature).map(feature => 
                            feature.startsWith('*') ? 
                            `<li class="text-xs text-text-muted italic mt-2">${feature}</li>` :
                            `<li class="flex items-start gap-2">
                                <i class="fas fa-check text-success mt-0.5"></i>
                                <span class="text-sm text-text-secondary">${feature}</span>
                            </li>`
                        ).join('')}
                    </ul>
                    
                    <button onclick="changePlan('free')" class="w-full py-3 ${planDetails.free.buttonClass} text-white rounded-lg font-medium transition-all">
                        ${planDetails.free.buttonText}
                    </button>
                </div>
                
                <!-- Pro Plan -->
                <div class="border-2 border-primary rounded-lg p-6 relative ${planDetails.pro.current ? 'bg-blue-50' : ''}">
                    ${planDetails.pro.popular ? `
                        <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span class="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">CURRENT PLAN</span>
                        </div>
                    ` : ''}
                    
                    <div class="flex items-start justify-between mb-4">
                        <div>
                            <h4 class="text-lg font-semibold text-text-primary">${planDetails.pro.name}</h4>
                            <div class="flex items-baseline gap-1 mt-1">
                                <span class="text-2xl font-bold text-text-primary">${planDetails.pro.price}</span>
                                <span class="text-text-secondary">${planDetails.pro.period}</span>
                            </div>
                        </div>
                    </div>
                    
                    <ul class="space-y-2 mb-6">
                        ${planDetails.pro.features.filter(feature => feature).map(feature => 
                            feature.startsWith('*') ? 
                            `<li class="text-xs text-text-muted italic mt-2">${feature}</li>` :
                            `<li class="flex items-start gap-2">
                                <i class="fas fa-check text-success mt-0.5"></i>
                                <span class="text-sm text-text-secondary">${feature}</span>
                            </li>`
                        ).join('')}
                    </ul>
                    
                    <button disabled class="w-full py-3 ${planDetails.pro.buttonClass} text-white rounded-lg font-medium transition-all">
                        ${planDetails.pro.buttonText}
                    </button>
                </div>
                
                <!-- Max Plan -->
                <div class="border border-border rounded-lg p-6 ${planDetails.max.current ? 'ring-2 ring-primary' : ''}">
                    <div class="flex items-start justify-between mb-4">
                        <div>
                            <h4 class="text-lg font-semibold text-text-primary flex items-center gap-2">
                                ${planDetails.max.name}
                                <span class="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-0.5 rounded text-xs font-semibold">ENTERPRISE</span>
                            </h4>
                            <div class="flex items-baseline gap-1 mt-1">
                                <span class="text-2xl font-bold text-text-primary">${planDetails.max.price}</span>
                                <span class="text-text-secondary">${planDetails.max.period}</span>
                            </div>
                        </div>
                    </div>
                    
                    <ul class="space-y-2 mb-6">
                        ${planDetails.max.features.filter(feature => feature).map(feature => 
                            feature.startsWith('*') ? 
                            `<li class="text-xs text-text-muted italic mt-2">${feature}</li>` :
                            `<li class="flex items-start gap-2">
                                <i class="fas fa-check text-success mt-0.5"></i>
                                <span class="text-sm text-text-secondary">${feature}</span>
                            </li>`
                        ).join('')}
                    </ul>
                    
                    <button onclick="changePlan('max')" class="w-full py-3 ${planDetails.max.buttonClass} text-white rounded-lg font-medium transition-all">
                        ${planDetails.max.buttonText}
                    </button>
                </div>
            </div>
            
            <!-- FAQ Section -->
            <div class="mt-8 pt-8 border-t border-border">
                <h4 class="font-semibold text-text-primary mb-4">Frequently Asked Questions</h4>
                <div class="space-y-4">
                    <div>
                        <p class="text-sm font-medium text-text-primary mb-1">Can I change plans anytime?</p>
                        <p class="text-sm text-text-secondary">Yes, you can upgrade or downgrade at any time. Changes take effect at the next billing cycle.</p>
                    </div>
                    <div>
                        <p class="text-sm font-medium text-text-primary mb-1">What happens to my data if I downgrade?</p>
                        <p class="text-sm text-text-secondary">Your data is preserved, but you may lose access to premium features until you upgrade again.</p>
                    </div>
                    <div>
                        <p class="text-sm font-medium text-text-primary mb-1">Do you offer refunds?</p>
                        <p class="text-sm text-text-secondary">We offer a 14-day money-back guarantee for new subscriptions.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(panel);
    
    // Add backdrop
    const backdrop = document.createElement('div');
    backdrop.id = 'plan-panel-backdrop';
    backdrop.className = 'fixed inset-0 bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300 z-[199]';
    backdrop.onclick = closePlanPanel;
    document.body.appendChild(backdrop);
}

function openPlanPanel() {
    if (!document.getElementById('change-plan-panel')) {
        initializePlanPanel();
    }
    
    planPanelOpen = true;
    
    const panel = document.getElementById('change-plan-panel');
    const backdrop = document.getElementById('plan-panel-backdrop');
    
    setTimeout(() => {
        panel.classList.remove('translate-x-full');
        backdrop.classList.remove('opacity-0', 'pointer-events-none');
    }, 10);
}

function closePlanPanel() {
    planPanelOpen = false;
    
    const panel = document.getElementById('change-plan-panel');
    const backdrop = document.getElementById('plan-panel-backdrop');
    
    panel.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
}

function changePlan(plan) {
    // In a real implementation, this would handle the plan change
    console.log('Changing to plan:', plan);
    
    if (plan === 'free') {
        if (confirm('Are you sure you want to downgrade to the Free plan? You will lose access to premium features.')) {
            alert('Plan change request submitted. You will receive a confirmation email.');
            closePlanPanel();
        }
    } else if (plan === 'max') {
        alert('Upgrading to Max plan. You will be redirected to payment...');
        closePlanPanel();
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePlanPanel);
} else {
    initializePlanPanel();
}