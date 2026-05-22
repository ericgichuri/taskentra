$(document).ready(function() {
    // Dummy Data
    const data = {
        balance: 158.42,
        streak: 4,
        level: 8,
        xp: 72,
        tasks: [
            { title: "Gemini Model Tuning", pay: 2.50, tag: "AI", icon: "fa-brain", color: "text-[var(--secondary)]" },
            { title: "Sentiment Edge Case", pay: 0.75, tag: "NLP", icon: "fa-message", color: "text-purple-400" },
            { title: "Vector Map Validation", pay: 1.20, tag: "Data", icon: "fa-map-location-dot", color: "text-[var(--accent)]" },
            { title: "UI Focus Analysis", pay: 0.90, tag: "UX", icon: "fa-eye", color: "text-emerald-400" }
        ]
    };

    function render() {
        // Stats
        $('#walletBalance').text(`$${data.balance.toFixed(2)}`);
        $('#userLevel').text(`LVL ${data.level}`);
        $('#focusStreak').text(`${data.streak} Days`);
        $('#xpPercent').text(`${data.xp}%`);
        
        // XP Bar Animation
        setTimeout(() => { $('#xpBar').css('width', `${data.xp}%`); }, 500);

        // Streak Dots
        let dots = '';
        for(let i=0; i<7; i++) {
            const isActive = i < data.streak;
            dots += `<div class="w-3 h-3 rounded-full ${isActive ? 'bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]' : 'bg-slate-800'}"></div>`;
        }
        $('#streakDots').html(dots);

        // Tasks
        let taskHtml = '';
        data.tasks.forEach(t => {
            taskHtml += `
            <div class="group bg-[var(--background)] bg-white border border-slate-200 p-6 rounded-lg flex items-center justify-between hover:opacity-90 hover:border-[var(--accent)] transition-all cursor-pointer shadow-sm hover:shadow-xl hover:shadow-[var(--accent)]/5">
                <div class="flex items-center gap-6">
                    <div class="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-xl ${t.color} border border-white/5 group-hover:scale-110 transition-transform">
                        <i class="fa-solid ${t.icon}"></i>
                    </div>
                    <div>
                        <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">${t.tag}</span>
                        <h4 class="text-[var(--primary)] font-bold text-sm">${t.title}</h4>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-[var(--primary)] font-black text-xl">+$${t.pay.toFixed(2)}</p>
                    <span class="text-[var(--accent)] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Deploy Task <i class="fa-solid fa-arrow-right ml-1"></i></span>
                </div>
            </div>`;
        });
        $('#taskContainer').html(taskHtml);
    }

    render();
});