// Developer Tools Floating Button
(function() {
    // Only add dev tools if not already present
    if (document.getElementById('dev-tools-fab')) return;

    // Create floating action button
    const fab = document.createElement('div');
    fab.id = 'dev-tools-fab';
    fab.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 56px;
        height: 56px;
        background: #2563EB;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        z-index: 9999;
        transition: all 0.3s ease;
        font-family: 'Font Awesome 6 Free';
        font-weight: 900;
    `;
    
    fab.innerHTML = '<i class="fa-solid fa-database text-white text-xl"></i>';
    
    // Hover effects
    fab.addEventListener('mouseenter', () => {
        fab.style.transform = 'scale(1.1)';
        fab.style.boxShadow = '0 6px 16px rgba(37, 99, 235, 0.4)';
    });
    
    fab.addEventListener('mouseleave', () => {
        fab.style.transform = 'scale(1)';
        fab.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
    });
    
    // Click handler - go directly to admin
    fab.addEventListener('click', () => {
        window.location.href = 'admin.html';
    });
    
    // Add to page
    document.body.appendChild(fab);
    
    // Dev tools modal
    function showDevToolsModal() {
        // Remove existing modal if present
        const existingModal = document.getElementById('dev-tools-modal');
        if (existingModal) {
            document.body.removeChild(existingModal);
            return;
        }
        
        const modal = document.createElement('div');
        modal.id = 'dev-tools-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(4px);
        `;
        
        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: white;
            border-radius: 12px;
            padding: 24px;
            max-width: 400px;
            width: 90%;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
        `;
        
        modalContent.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: between; margin-bottom: 20px;">
                <div style="flex: 1;">
                    <h3 style="margin: 0; font-size: 18px; font-weight: 600; color: #000;">Developer Tools</h3>
                    <p style="margin: 8px 0 0 0; font-size: 14px; color: #666;">Quick access to development resources</p>
                </div>
                <button id="close-modal" style="background: none; border: none; font-size: 20px; color: #999; cursor: pointer; padding: 0; margin-left: 16px;">×</button>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 12px;">
                <a href="admin.html" style="display: flex; align-items: center; gap: 12px; padding: 12px; border: 1px solid #E5E5E5; border-radius: 8px; text-decoration: none; color: #000; transition: all 0.2s;">
                    <div style="width: 32px; height: 32px; background: #2563EB; border-radius: 6px; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-shield-alt" style="color: white; font-size: 14px;"></i>
                    </div>
                    <div style="flex: 1;">
                        <div style="font-weight: 500; font-size: 14px;">Admin Dashboard</div>
                        <div style="font-size: 12px; color: #666;">User management & analytics</div>
                    </div>
                </a>
                
                <button onclick="toggleDebugMode()" style="display: flex; align-items: center; gap: 12px; padding: 12px; border: 1px solid #E5E5E5; border-radius: 8px; background: white; cursor: pointer; transition: all 0.2s; width: 100%;">
                    <div style="width: 32px; height: 32px; background: #3B82F6; border-radius: 6px; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-bug" style="color: white; font-size: 14px;"></i>
                    </div>
                    <div style="flex: 1; text-align: left;">
                        <div style="font-weight: 500; font-size: 14px;">Debug Mode</div>
                        <div style="font-size: 12px; color: #666;">Show/hide debug information</div>
                    </div>
                </button>
                
                <button onclick="clearLocalData()" style="display: flex; align-items: center; gap: 12px; padding: 12px; border: 1px solid #E5E5E5; border-radius: 8px; background: white; cursor: pointer; transition: all 0.2s; width: 100%;">
                    <div style="width: 32px; height: 32px; background: #EF4444; border-radius: 6px; display: flex; align-items: center; justify-content: center;">
                        <i class="fas fa-trash" style="color: white; font-size: 14px;"></i>
                    </div>
                    <div style="flex: 1; text-align: left;">
                        <div style="font-weight: 500; font-size: 14px;">Clear Data</div>
                        <div style="font-size: 12px; color: #666;">Reset localStorage & cookies</div>
                    </div>
                </button>
                
                <div style="padding: 12px; background: #F8F9FA; border-radius: 8px; margin-top: 8px;">
                    <div style="font-size: 12px; color: #666; margin-bottom: 8px;">Environment Info:</div>
                    <div style="font-size: 11px; color: #999; font-family: monospace;">
                        <div>Page: ${window.location.pathname}</div>
                        <div>User Agent: ${navigator.userAgent.split(' ')[0]}</div>
                        <div>Viewport: ${window.innerWidth}x${window.innerHeight}</div>
                    </div>
                </div>
            </div>
        `;
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Close modal handlers
        document.getElementById('close-modal').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
        
        // Add hover effects to buttons
        modalContent.querySelectorAll('a, button').forEach(btn => {
            if (btn.id === 'close-modal') return;
            
            btn.addEventListener('mouseenter', () => {
                btn.style.background = '#F8F9FA';
                btn.style.borderColor = '#D1D5DB';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.background = 'white';
                btn.style.borderColor = '#E5E5E5';
            });
        });
    }
    
    // Debug mode toggle
    window.toggleDebugMode = function() {
        const debugInfo = document.getElementById('debug-info');
        if (debugInfo) {
            document.body.removeChild(debugInfo);
        } else {
            const debug = document.createElement('div');
            debug.id = 'debug-info';
            debug.style.cssText = `
                position: fixed;
                top: 20px;
                left: 20px;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 12px;
                border-radius: 6px;
                font-family: monospace;
                font-size: 12px;
                z-index: 9998;
                max-width: 300px;
            `;
            debug.innerHTML = `
                <div><strong>Debug Info</strong></div>
                <div>Page: ${window.location.pathname}</div>
                <div>Timestamp: ${new Date().toLocaleTimeString()}</div>
                <div>Screen: ${screen.width}x${screen.height}</div>
                <div>Viewport: ${window.innerWidth}x${window.innerHeight}</div>
                <div>Local Storage: ${Object.keys(localStorage).length} items</div>
                <div>Session Storage: ${Object.keys(sessionStorage).length} items</div>
            `;
            document.body.appendChild(debug);
        }
        
        // Close modal after toggling
        const modal = document.getElementById('dev-tools-modal');
        if (modal) {
            document.body.removeChild(modal);
        }
    };
    
    // Clear local data
    window.clearLocalData = function() {
        if (confirm('Are you sure you want to clear all local data? This will reset the application state.')) {
            localStorage.clear();
            sessionStorage.clear();
            
            // Clear cookies (simplified approach)
            document.cookie.split(";").forEach(function(c) { 
                document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
            });
            
            alert('Local data cleared! Reloading page...');
            window.location.reload();
        }
        
        // Close modal
        const modal = document.getElementById('dev-tools-modal');
        if (modal) {
            document.body.removeChild(modal);
        }
    };
})();