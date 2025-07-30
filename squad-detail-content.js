// Squad data
const squadData = {
    'alpha': {
        name: 'Squad Alpha',
        icon: 'fa-rocket',
        tagline: 'B2B SaaS • Build Stage',
        status: 'Active',
        statusColor: 'green',
        founded: '2 months ago',
        description: 'Weekly check-ins for B2B SaaS founders grinding toward MVP launch. No drift, just drops. We focus on rapid iteration, customer feedback, and getting to revenue as fast as possible.',
        schedule: 'Every Thursday, 2:00 PM EST',
        nextMeeting: 'In 3 days',
        members: [
            { 
                initials: 'AR', 
                name: 'Aisha Robinson', 
                role: 'Squad Captain • AI Infrastructure', 
                id: 'aisha-robinson',
                objectives: [
                    { name: 'MVP Development', progress: '3/4 missions' },
                    { name: 'Customer Success', progress: '1/6 missions' }
                ],
                currentMissions: [
                    { name: 'Set up Analytics Dashboard', status: 'In Progress' },
                    { name: 'Customer Onboarding Flow', status: 'Starting' }
                ]
            },
            { 
                initials: 'SC', 
                name: 'Sarah Chen', 
                role: 'E-commerce Analytics', 
                id: 'sarah-chen',
                objectives: [
                    { name: 'Growth & Traction', progress: '4/6 missions' },
                    { name: 'Scale & Optimize', progress: '2/7 missions' }
                ],
                currentMissions: [
                    { name: 'Launch on Product Hunt', status: 'Completed' },
                    { name: 'Performance Optimization', status: 'In Progress' }
                ]
            },
            { 
                initials: 'JK', 
                name: 'James Kim', 
                role: 'Dev Tools Platform', 
                id: 'james-kim',
                objectives: [
                    { name: 'Idea Validation', progress: '5/6 missions' },
                    { name: 'MVP Development', progress: '2/4 missions' }
                ],
                currentMissions: [
                    { name: 'Customer Interview Sprint', status: 'In Progress' },
                    { name: 'Landing Page Creation', status: 'Completed' }
                ]
            },
            { 
                initials: 'MP', 
                name: 'Maya Patel', 
                role: 'HR Tech Solution', 
                id: 'maya-patel',
                objectives: [
                    { name: 'Operations & Legal', progress: '3/5 missions' },
                    { name: 'Team Building', progress: '1/5 missions' }
                ],
                currentMissions: [
                    { name: 'Form Delaware C-Corp', status: 'Completed' },
                    { name: 'Set up GitHub Repository', status: 'In Progress' }
                ]
            }
        ],
        activity: [
            { initials: 'AR', name: 'Aisha Robinson', time: '2 hours ago', message: 'Shared insights from customer interviews - seeing strong demand for our API solution!' },
            { initials: 'SC', name: 'Sarah Chen', time: '5 hours ago', message: 'Hit 1000 users on the waitlist! 🎉 Time to accelerate the MVP timeline.' },
            { initials: 'JK', name: 'James Kim', time: '1 day ago', message: 'Completed the pricing model analysis. Shared the deck in our squad drive.' }
        ],
        goals: [
            { completed: false, text: 'Launch MVP by end of Q1' },
            { completed: false, text: 'Reach 100 paying customers' },
            { completed: true, text: 'Complete customer discovery' }
        ]
    },
    'beta': {
        name: 'Squad Beta',
        icon: 'fa-chart-line',
        tagline: 'E-commerce • Growth Stage',
        status: 'Active',
        statusColor: 'green',
        founded: '4 months ago',
        description: 'Scaling e-commerce to 7-figures through shared tactics and relentless accountability. We share conversion strategies, supply chain hacks, and growth experiments.',
        schedule: 'Every Tuesday, 3:00 PM EST',
        nextMeeting: 'Tomorrow',
        members: [
            { 
                initials: 'MP', 
                name: 'Marcus Park', 
                role: 'Squad Captain • DTC Fashion', 
                id: 'marcus-park',
                objectives: [
                    { name: 'Scale & Optimize', progress: '5/7 missions' },
                    { name: 'International Expansion', progress: '2/9 missions' }
                ],
                currentMissions: [
                    { name: 'Infrastructure Scaling', status: 'In Progress' },
                    { name: 'Market Research International', status: 'Starting' }
                ]
            },
            { 
                initials: 'CR', 
                name: 'Claire Rodriguez', 
                role: 'Home Goods Brand', 
                id: 'claire-rodriguez',
                objectives: [
                    { name: 'Marketing & Branding', progress: '4/8 missions' },
                    { name: 'Customer Success', progress: '3/6 missions' }
                ],
                currentMissions: [
                    { name: 'Content Strategy', status: 'In Progress' },
                    { name: 'Retention Strategies', status: 'Planning' }
                ]
            },
            { 
                initials: 'TS', 
                name: 'Tom Sanders', 
                role: 'Sports Equipment', 
                id: 'tom-sanders',
                objectives: [
                    { name: 'Sales Process', progress: '3/7 missions' },
                    { name: 'Data & Analytics', progress: '2/5 missions' }
                ],
                currentMissions: [
                    { name: 'CRM Setup', status: 'Completed' },
                    { name: 'KPI Dashboard', status: 'In Progress' }
                ]
            },
            { 
                initials: 'LW', 
                name: 'Lisa Wang', 
                role: 'Beauty Products', 
                id: 'lisa-wang',
                objectives: [
                    { name: 'Growth & Traction', progress: '5/6 missions' },
                    { name: 'Marketing & Branding', progress: '6/8 missions' }
                ],
                currentMissions: [
                    { name: 'Influencer Outreach', status: 'In Progress' },
                    { name: 'Email Marketing Setup', status: 'Completed' }
                ]
            }
        ],
        activity: [
            { initials: 'MP', name: 'Marcus Park', time: '1 hour ago', message: 'Just cracked the code on TikTok ads - 3.2x ROAS on our latest campaign!' },
            { initials: 'CR', name: 'Claire Rodriguez', time: '6 hours ago', message: 'Launched our subscription model. First 24 hours: 127 signups!' },
            { initials: 'TS', name: 'Tom Sanders', time: '2 days ago', message: 'Supply chain update: Found a new 3PL that cut our shipping costs by 22%' }
        ],
        goals: [
            { completed: false, text: 'Hit $1M monthly revenue' },
            { completed: true, text: 'Launch subscription offering' },
            { completed: false, text: 'Expand to 3 new markets' }
        ]
    },
    'charlie': {
        name: 'Squad Charlie',
        icon: 'fa-brain',
        tagline: 'AI/ML • Seed Stage',
        status: 'Pending',
        statusColor: 'yellow',
        founded: '3 weeks ago',
        description: 'Deep tech founders building intelligent systems. Technical depth meets business velocity. We dive deep into model architecture, data pipelines, and go-to-market for AI products.',
        schedule: 'Every Monday, 4:00 PM EST',
        nextMeeting: 'In 6 days',
        members: [
            { 
                initials: 'RK', 
                name: 'Raj Kumar', 
                role: 'Squad Captain • Computer Vision', 
                id: 'raj-kumar',
                objectives: [
                    { name: 'Fundraising', progress: '2/8 missions' },
                    { name: 'Product Launch', progress: '1/4 missions' }
                ],
                currentMissions: [
                    { name: 'Validate Your Idea', status: 'Completed' },
                    { name: 'Analytics Setup', status: 'In Progress' }
                ]
            },
            { 
                initials: 'AM', 
                name: 'Anna Mitchell', 
                role: 'NLP Platform', 
                id: 'anna-mitchell',
                objectives: [
                    { name: 'MVP Development', progress: '3/4 missions' },
                    { name: 'Launch Your Product', progress: '2/5 missions' }
                ],
                currentMissions: [
                    { name: 'Go-To-Market Strategy', status: 'In Progress' },
                    { name: 'Apple Dev Account', status: 'Planning' }
                ]
            },
            { 
                initials: 'DL', 
                name: 'David Liu', 
                role: 'ML Infrastructure', 
                id: 'david-liu',
                objectives: [
                    { name: 'Scale & Optimize', progress: '4/7 missions' },
                    { name: 'Data & Analytics', progress: '3/5 missions' }
                ],
                currentMissions: [
                    { name: 'Performance Optimization', status: 'In Progress' },
                    { name: 'Data Warehouse Setup', status: 'Completed' }
                ]
            }
        ],
        activity: [
            { initials: 'RK', name: 'Raj Kumar', time: '4 hours ago', message: 'Model accuracy jumped to 94.3% with the new training approach!' },
            { initials: 'AM', name: 'Anna Mitchell', time: '1 day ago', message: 'Closed our first enterprise pilot with a Fortune 500' },
            { initials: 'DL', name: 'David Liu', time: '3 days ago', message: 'Open-sourced our data pipeline tool - already 200 stars on GitHub' }
        ],
        goals: [
            { completed: false, text: 'Close seed round' },
            { completed: true, text: 'Ship v1.0' },
            { completed: false, text: 'Land 10 pilot customers' }
        ]
    }
};

// Load squad detail based on URL parameter
function loadSquadDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const squadId = urlParams.get('squad') || 'alpha';
    const squad = squadData[squadId];
    
    if (!squad) {
        window.location.href = 'squads.html';
        return;
    }
    
    // Update header
    document.getElementById('squad-icon').className = `fas ${squad.icon} text-white text-2xl`;
    document.getElementById('squad-name').textContent = squad.name;
    document.getElementById('squad-tagline').textContent = squad.tagline;
    
    // Update status
    const statusElement = document.getElementById('squad-status');
    statusElement.textContent = squad.status;
    statusElement.className = `px-3 py-1 bg-${squad.statusColor}-100 text-${squad.statusColor}-700 text-sm rounded`;
    
    // Update description
    document.getElementById('squad-description').textContent = squad.description;
    
    // Update schedule info
    document.getElementById('squad-schedule').textContent = squad.schedule;
    document.getElementById('squad-next-meeting').textContent = squad.nextMeeting;
    
    // Update squad members detail section
    const membersDetailContainer = document.getElementById('squad-members-detail');
    membersDetailContainer.innerHTML = squad.members.map(member => `
        <div class="border border-border rounded-lg p-4 hover:shadow-sm transition-all">
            <div class="flex items-start gap-3 mb-3">
                <div class="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">${member.initials}</div>
                <div class="flex-1">
                    <h4 class="font-semibold text-text-primary cursor-pointer hover:text-primary transition-all" onclick="viewFounderProfile('${member.id}')">${member.name}</h4>
                    <p class="text-sm text-text-secondary">${member.role}</p>
                </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h5 class="text-sm font-medium text-text-muted mb-2">Top Objectives</h5>
                    <div class="space-y-2">
                        ${member.objectives.map(obj => `
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-text-primary">${obj.name}</span>
                                <span class="text-xs text-text-secondary">${obj.progress}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div>
                    <h5 class="text-sm font-medium text-text-muted mb-2">Current Missions</h5>
                    <div class="space-y-2">
                        ${member.currentMissions.map(mission => `
                            <div class="flex items-center justify-between">
                                <span class="text-sm text-text-primary">${mission.name}</span>
                                <span class="text-xs px-2 py-0.5 rounded-full ${
                                    mission.status === 'Completed' ? 'bg-green-100 text-green-700' :
                                    mission.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                                    'bg-gray-100 text-gray-700'
                                }">${mission.status}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add member count info
    membersDetailContainer.innerHTML += `
        <div class="mt-4 pt-4 border-t border-border">
            <p class="text-sm text-text-muted">${squad.members.length}/5 seats filled</p>
        </div>
    `;
    
    // Update activity is now handled in the HTML template directly since we moved it to the right column
}