function initiateUpgrade() {
    // Show the payment modal
    const modal = document.getElementById('paymentModal');
    modal.showModal();
}

function verifyPayment() {
    const btn = $('#verify-btn');
    const statusBox = $('#payment-status');

    // Simulate "Scanning" state
    btn.html('<i class="fa-solid fa-spinner fa-spin"></i> Checking Nodes...').addClass('pointer-events-none');
    
    // In production, this would be an AJAX call to check if the wallet received the amount
    setTimeout(() => {
        // Success state
        statusBox.html(`
            <div class="text-center p-4 bg-green-50 rounded-2xl border border-green-100">
                <i class="fa-solid fa-circle-check text-green-500 text-3xl mb-3"></i>
                <h4 class="text-green-800 font-black uppercase text-xs tracking-widest">Payment Verified</h4>
                <p class="text-green-600/70 text-[9px] font-bold mt-1">Operator Tier Updated to PREMIUM</p>
            </div>
            <button onclick="location.reload()" class="w-full py-4 mt-4 bg-green-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all shadow-lg shadow-green-600/20">Access Dashboard</button>
        `);
    }, 3000);
}