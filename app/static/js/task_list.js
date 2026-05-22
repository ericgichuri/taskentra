$(document).ready(function() {
    // 1. Simulate getting user tier (In production, get this from an API or global variable)
    const isPremium = true; // This would come from your backend/session
    const taskLimit = isPremium ? 10 : 5;
    
    $('#account-tier-label').text(isPremium ? 'PREMIUM OPERATOR' : 'STANDARD OPERATOR');

    // 2. Fetch Tasks
    fetchTasks(taskLimit);
});

function fetchTasks(limit) {
    // Simulation of fetching tasks from your backend
    // In reality, you'd use: $.get('/api/tasks?limit=' + limit, function(data) { ... });
    
    const taskGrid = $('#task-grid');
    taskGrid.empty();

    for (let i = 1; i <= limit; i++) {
        const taskId = generateUniqueId(6);
        const taskHtml = `
            <div class="bg-white border border-slate-200 p-8 rounded-lg hover:border-[var(--accent)] transition-all group relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[var(--accent)]/5">
                <!-- Subtle background task ID in Primary color -->
                <span class="absolute top-4 right-8 font-mono text-xl font-black text-[var(--primary)]/[0.03] pointer-events-none group-hover:text-[var(--accent)]/10 transition-colors">
                    #${taskId}
                </span>

                <div class="relative z-10">
                    <span class="text-[9px] font-black text-[var(--secondary)] uppercase tracking-[0.2em]">Task Endpoint</span>
                    <h3 class="text-[var(--primary)] text-xl font-black mt-1 mb-4">Neural Data Verification ${i}</h3>
                    
                    <div class="flex items-center gap-8 mb-8">
                        <div class="profile-field">
                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest block">Potential Reward</label>
                            <p class="text-sm font-black text-[var(--primary)]">$${(Math.random() * 5 + 1).toFixed(2)}</p>
                        </div>
                        <div class="profile-field">
                            <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest block">Complexity</label>
                            <p class="text-sm font-semibold text-[var(--primary)]">Level ${Math.floor(Math.random() * 5) + 1}</p>
                        </div>
                    </div>
                    <div class="px-4">
                        <a href="/task/viewtask/${taskId}" class="flex items-center justify-center gap-3 w-full py-4 text-xs rounded-lg bg-[var(--primary)] text-white font-black uppercase text-[10px] tracking-widest hover:bg-[var(--accent)] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[var(--primary)]/10 hover:shadow-[var(--accent)]/20">
                            View Task <i class="fa-solid fa-arrow-right text-[8px]"></i>
                        </a>
                    </div>
                    
                </div>
            </div>
        `;
        taskGrid.append(taskHtml);
    }
}

// Generates the 6-character unique ID you requested
function generateUniqueId(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}