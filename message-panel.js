// Global message panel component for FoundersFleet
let messagePanelOpen = false;
let messagePanelRecipients = [];

function initializeMessagePanel() {
    // Check if panel already exists
    if (document.getElementById('global-message-panel')) {
        return;
    }
    
    // Create message panel HTML
    const panel = document.createElement('div');
    panel.id = 'global-message-panel';
    panel.className = 'fixed right-0 top-0 h-full w-[500px] bg-white shadow-2xl transform translate-x-full transition-transform duration-300 z-[200] flex flex-col';
    panel.innerHTML = `
        <!-- Panel Header -->
        <div class="p-4 border-b border-border flex items-center justify-between bg-white">
            <h3 class="font-semibold text-text-primary">New Message</h3>
            <button onclick="closeMessagePanel()" class="p-2 hover:bg-section-bg rounded transition-all">
                <i class="fas fa-times text-text-secondary"></i>
            </button>
        </div>
        
        <!-- Panel Content -->
        <div class="flex-1 overflow-y-auto p-6 bg-section-bg">
            <form id="global-message-form" class="space-y-4">
                <!-- To Field -->
                <div>
                    <label class="block text-sm font-medium text-text-primary mb-2">To</label>
                    <div class="relative">
                        <input 
                            type="text" 
                            id="global-recipient-input" 
                            placeholder="Search for founders or squads..."
                            class="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                            autocomplete="off"
                        >
                        <div id="global-recipient-suggestions" class="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-lg shadow-lg hidden max-h-48 overflow-y-auto z-10">
                            <!-- Suggestions will appear here -->
                        </div>
                    </div>
                    <div id="global-selected-recipients" class="flex flex-wrap gap-2 mt-2">
                        <!-- Selected recipients will appear here -->
                    </div>
                </div>
                
                <!-- Message Type -->
                <div>
                    <label class="block text-sm font-medium text-text-primary mb-2">Message Type</label>
                    <div class="flex gap-3">
                        <label class="flex items-center">
                            <input type="radio" name="global-message-type" value="direct" checked class="mr-2">
                            <span class="text-sm">Direct Message</span>
                        </label>
                        <label class="flex items-center">
                            <input type="radio" name="global-message-type" value="squad" class="mr-2">
                            <span class="text-sm">Squad Message</span>
                        </label>
                    </div>
                </div>
                
                <!-- Subject (optional) -->
                <div>
                    <label class="block text-sm font-medium text-text-primary mb-2">
                        Subject 
                        <span class="text-text-muted font-normal">(optional)</span>
                    </label>
                    <input 
                        type="text" 
                        id="global-message-subject"
                        placeholder="What's this about?"
                        class="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    >
                </div>
                
                <!-- Message -->
                <div>
                    <label class="block text-sm font-medium text-text-primary mb-2">Message</label>
                    <textarea 
                        id="global-message-content"
                        rows="8"
                        placeholder="Type your message..."
                        class="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none bg-white"
                    ></textarea>
                </div>
            </form>
        </div>
        
        <!-- Panel Footer -->
        <div class="p-4 border-t border-border bg-white flex justify-between items-center">
            <button type="button" onclick="closeMessagePanel()" class="text-text-secondary hover:text-primary transition-all">
                Cancel
            </button>
            <div class="flex gap-3">
                <button 
                    type="button"
                    onclick="sendAndNavigate()"
                    class="px-4 py-2 text-primary hover:bg-section-bg rounded-lg transition-all"
                >
                    Open in Messages
                </button>
                <button 
                    type="submit" 
                    form="global-message-form"
                    class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    id="global-send-message-btn"
                >
                    Send Message
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(panel);
    
    // Add backdrop
    const backdrop = document.createElement('div');
    backdrop.id = 'message-panel-backdrop';
    backdrop.className = 'fixed inset-0 bg-black/50 opacity-0 pointer-events-none transition-opacity duration-300 z-[199]';
    backdrop.onclick = closeMessagePanel;
    document.body.appendChild(backdrop);
    
    // Initialize form submission
    document.getElementById('global-message-form').addEventListener('submit', function(e) {
        e.preventDefault();
        sendGlobalMessage();
    });
    
    // Initialize recipient search
    initializeGlobalRecipientSearch();
}

function openMessagePanel(recipient = null) {
    if (!document.getElementById('global-message-panel')) {
        initializeMessagePanel();
    }
    
    messagePanelOpen = true;
    messagePanelRecipients = [];
    
    // Show panel
    const panel = document.getElementById('global-message-panel');
    const backdrop = document.getElementById('message-panel-backdrop');
    
    setTimeout(() => {
        panel.classList.remove('translate-x-full');
        backdrop.classList.remove('opacity-0', 'pointer-events-none');
    }, 10);
    
    // If recipient provided, pre-select them
    if (recipient) {
        messagePanelRecipients.push(recipient);
        updateGlobalSelectedRecipients();
    }
    
    // Focus on message content if recipient is pre-selected
    if (recipient) {
        document.getElementById('global-message-content').focus();
    } else {
        document.getElementById('global-recipient-input').focus();
    }
}

function closeMessagePanel() {
    messagePanelOpen = false;
    
    const panel = document.getElementById('global-message-panel');
    const backdrop = document.getElementById('message-panel-backdrop');
    
    panel.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
    
    // Reset form
    setTimeout(() => {
        document.getElementById('global-message-form').reset();
        messagePanelRecipients = [];
        updateGlobalSelectedRecipients();
    }, 300);
}

function initializeGlobalRecipientSearch() {
    const input = document.getElementById('global-recipient-input');
    const suggestions = document.getElementById('global-recipient-suggestions');
    
    // Mock data for recipients
    const availableRecipients = [
        { id: 'sarah-chen', name: 'Sarah Chen', type: 'founder', avatar: 'SC', color: 'bg-green-600' },
        { id: 'marcus-park', name: 'Marcus Park', type: 'founder', avatar: 'MP', color: 'bg-primary' },
        { id: 'james-kim', name: 'James Kim', type: 'founder', avatar: 'JK', color: 'bg-purple-600' },
        { id: 'aisha-robinson', name: 'Aisha Robinson', type: 'founder', avatar: 'AR', color: 'bg-blue-600' },
        { id: 'b2b-saas-squad', name: 'B2B SaaS Squad', type: 'squad', icon: 'fa-users' },
        { id: 'marketplace-builders', name: 'Marketplace Builders', type: 'squad', icon: 'fa-users' },
        { id: 'ai-ml-founders', name: 'AI/ML Founders', type: 'squad', icon: 'fa-users' }
    ];
    
    input.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        
        if (query.length < 2) {
            suggestions.classList.add('hidden');
            return;
        }
        
        const filtered = availableRecipients.filter(r => 
            r.name.toLowerCase().includes(query) && 
            !messagePanelRecipients.find(s => s.id === r.id)
        );
        
        if (filtered.length > 0) {
            suggestions.innerHTML = filtered.map(recipient => `
                <div class="px-4 py-2 hover:bg-section-bg cursor-pointer flex items-center gap-3" onclick="selectGlobalRecipient(${JSON.stringify(recipient).replace(/"/g, '&quot;')})">
                    ${recipient.type === 'founder' ? `
                        <div class="w-8 h-8 ${recipient.color} text-white rounded-full flex items-center justify-center text-sm font-semibold">
                            ${recipient.avatar}
                        </div>
                    ` : `
                        <div class="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center">
                            <i class="fas ${recipient.icon} text-sm"></i>
                        </div>
                    `}
                    <div>
                        <div class="font-medium text-sm">${recipient.name}</div>
                        <div class="text-xs text-text-muted capitalize">${recipient.type}</div>
                    </div>
                </div>
            `).join('');
            suggestions.classList.remove('hidden');
        } else {
            suggestions.classList.add('hidden');
        }
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('#global-recipient-input') && !e.target.closest('#global-recipient-suggestions')) {
            suggestions.classList.add('hidden');
        }
    });
}

function selectGlobalRecipient(recipient) {
    messagePanelRecipients.push(recipient);
    updateGlobalSelectedRecipients();
    document.getElementById('global-recipient-input').value = '';
    document.getElementById('global-recipient-suggestions').classList.add('hidden');
}

function removeGlobalRecipient(recipientId) {
    messagePanelRecipients = messagePanelRecipients.filter(r => r.id !== recipientId);
    updateGlobalSelectedRecipients();
}

function updateGlobalSelectedRecipients() {
    const container = document.getElementById('global-selected-recipients');
    container.innerHTML = messagePanelRecipients.map(recipient => `
        <div class="flex items-center gap-2 px-3 py-1 bg-white border border-border rounded-full">
            <span class="text-sm">${recipient.name}</span>
            <button type="button" onclick="removeGlobalRecipient('${recipient.id}')" class="text-text-muted hover:text-primary">
                <i class="fas fa-times text-xs"></i>
            </button>
        </div>
    `).join('');
    
    // Enable/disable send button based on recipients
    const sendBtn = document.getElementById('global-send-message-btn');
    if (sendBtn) {
        sendBtn.disabled = messagePanelRecipients.length === 0;
    }
}

function sendGlobalMessage() {
    const subject = document.getElementById('global-message-subject').value;
    const content = document.getElementById('global-message-content').value;
    const messageType = document.querySelector('input[name="global-message-type"]:checked').value;
    
    if (!content.trim()) {
        alert('Please enter a message');
        return;
    }
    
    if (messagePanelRecipients.length === 0) {
        alert('Please select at least one recipient');
        return;
    }
    
    // In a real app, this would send to the server
    console.log('Sending message:', {
        recipients: messagePanelRecipients,
        subject,
        content,
        type: messageType
    });
    
    // Show success and close panel
    alert('Message sent successfully!');
    closeMessagePanel();
}

function sendAndNavigate() {
    // Navigate to comms page with the current recipients
    if (messagePanelRecipients.length > 0) {
        const recipient = messagePanelRecipients[0];
        window.location.href = `comms.html?action=new&recipient=${recipient.id}&name=${encodeURIComponent(recipient.name)}`;
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMessagePanel);
} else {
    initializeMessagePanel();
}