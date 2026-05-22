const currentBalance = 1240.50;
const retentionAmount = 20.00;

$(document).ready(function() {
    loadLedgerData();
});

// Instant Switch Version
function switchTab(tabName) {
    $('.tab-btn').removeClass('active-tab');
    $(`#nav-${tabName}`).addClass('active-tab');

    // Use hidden class for logic, CSS for the 'premium' fade
    $('.tab-content').addClass('hidden'); 
    $(`#content-${tabName}`).removeClass('hidden').hide().fadeIn(400);
}

function openVerifyModal() {
    const amount = parseFloat($('#withdraw-amount').val());
    const address = $('#wallet-address').val();

    if (!amount || amount <= 0) return alert("Please enter a valid amount.");
    if (amount > (currentBalance - retentionAmount)) {
        return alert(`Safety Protocol: You must retain at least $${retentionAmount} in your vault.`);
    }
    if (!address) return alert("Receiving address is required.");

    document.getElementById('verifyModal').showModal();
}

function confirmWithdrawal() {
    const btn = $('#verifyModal button:last-child');
    btn.html('<i class="fa-solid fa-spinner fa-spin"></i> Processing').addClass('pointer-events-none');

    setTimeout(() => {
        alert("Transaction Broadcasted to Blockchain. \nTrack ID: " + Math.random().toString(36).substr(2, 5).toUpperCase());
        location.reload();
    }, 2500);
}

function loadLedgerData() {
    const statuses = ['Success', 'Pending', 'Processing'];
    const types = ['Task Reward', 'Liquidation', 'Bonus'];
    let html = '';

    for (let i = 0; i < 8; i++) {
        const id = Math.random().toString(36).substr(2, 5).toUpperCase();
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const type = types[Math.floor(Math.random() * types.length)];
        const isNeg = type === 'Liquidation';

        html += `
            <tr class="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                <td class="px-8 py-6 font-mono text-[10px] font-bold text-slate-400">#${id}</td>
                <td class="px-8 py-6 text-xs font-bold text-slate-600">May 04, 2026</td>
                <td class="px-8 py-6 text-xs font-bold text-[var(--primary)]">${type}</td>
                <td class="px-8 py-6">
                    <span class="px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${status === 'Success' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'}">
                        ${status}
                    </span>
                </td>
                <td class="px-8 py-6 text-right font-black text-sm ${isNeg ? 'text-red-500' : 'text-green-500'}">
                    ${isNeg ? '-' : '+'}$${(Math.random() * 100).toFixed(2)}
                </td>
            </tr>
        `;
    }
    $('#ledger-rows').html(html);
}