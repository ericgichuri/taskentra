$(document).ready(function() {
    renderActivityFeed();
    renderGains();
});

function renderActivityFeed() {
    const activities = [
        { type: 'login', label: 'Auth Success', desc: 'Secure login from Nairobi Terminal 44', time: '2 mins ago', icon: 'fa-right-to-bracket', color: 'text-blue-500' },
        { type: 'task', label: 'Task Finished', desc: 'Neural Data Verification #B0W39H completed', time: '15 mins ago', icon: 'fa-circle-check', color: 'text-green-500' },
        { type: 'security', label: 'Key Rotation', desc: 'System access credentials updated', time: '1 hour ago', icon: 'fa-key', color: 'text-orange-500' },
        { type: 'task', label: 'Task Finished', desc: 'Computational Logic Verification #DSSP3D', time: '3 hours ago', icon: 'fa-circle-check', color: 'text-green-500' },
        { type: 'liquidation', label: 'Payout Sent', desc: 'Withdrawal to TRC20 endpoint initiated', time: '5 hours ago', icon: 'fa-money-bill-transfer', color: 'text-[var(--accent)]' }
    ];

    let html = '';
    activities.forEach(act => {
        html += `
            <div class="bg-white border border-slate-100 p-6 rounded-3xl flex items-center gap-6 hover:border-[var(--secondary)]/30 transition-all group">
                <div class="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center ${act.color} text-lg border border-slate-100 group-hover:scale-110 transition-transform">
                    <i class="fa-solid ${act.icon}"></i>
                </div>
                <div class="flex-grow">
                    <div class="flex justify-between items-start">
                        <h4 class="text-[var(--primary)] text-sm font-black uppercase tracking-tight">${act.label}</h4>
                        <span class="text-[9px] font-bold text-slate-400 uppercase">${act.time}</span>
                    </div>
                    <p class="text-slate-500 text-[11px] font-bold mt-1">${act.desc}</p>
                </div>
            </div>
        `;
    });
    $('#activity-feed').html(html);
}

function renderGains() {
    const gains = [
        { task: 'Verification #B0W39H', amount: '+2.55', date: 'Today' },
        { task: 'Logic Check #DSSP3D', amount: '+3.24', date: 'Today' },
        { task: 'Training Module #KLP22', amount: '+1.15', date: 'Yesterday' }
    ];

    let html = '';
    gains.forEach(gain => {
        html += `
            <div class="flex justify-between items-center pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                <div>
                    <p class="text-[var(--primary)] text-[11px] font-black">${gain.task}</p>
                    <p class="text-[9px] text-slate-400 font-bold uppercase tracking-widest">${gain.date}</p>
                </div>
                <span class="text-green-500 font-black text-sm">$${gain.amount}</span>
            </div>
        `;
    });
    $('#gains-list').html(html);
}