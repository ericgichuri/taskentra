function switchTab(tabName) {
    // 1. Smooth Fade Out
    $('.tab-content').fadeOut(200, function() {
        $(this).addClass('hidden');
        
        // 2. Show selected tab with Fade In
        $(`#tab-${tabName}`).removeClass('hidden').hide().fadeIn(300);
    });

    // 3. UI Update for Buttons
    $('.tab-btn').removeClass('active-tab');
    $(`#btn-${tabName}`).addClass('active-tab');
}


// Open Modal
function openEditModal() {
    const modal = document.getElementById('editProfileModal');
    modal.showModal();
}

// Close Modal
function closeEditModal() {
    const modal = document.getElementById('editProfileModal');
    modal.close();
}

// Form Submission handling
$('#editProfileForm').on('submit', function(e) {
    e.preventDefault();
    
    // UI Feedback
    const submitBtn = $(this).find('button[type="submit"]');
    submitBtn.text('Processing...').addClass('opacity-50 pointer-events-none');

    // Simulate API Call
    setTimeout(() => {
        closeEditModal();
        submitBtn.text('Commit Changes').removeClass('opacity-50 pointer-events-none');
        // You would typically refresh the UI or show a toast notification here
    }, 1000);
});

// Toggle Password Modal
function openPasswordModal() {
    const modal = document.getElementById('passwordModal');
    modal.showModal();
}

function closePasswordModal() {
    const modal = document.getElementById('passwordModal');
    modal.close();
}

// Update your button listener
$('.action-card:contains("Security Keys")').on('click', function() {
    openPasswordModal();
});

$('#newPassword').on('input', function() {
    const val = $(this).val();
    const dots = $('.req-dot');
    
    // Simple logic: color dots based on length/complexity
    dots.removeClass('bg-red-500 bg-yellow-500 bg-green-500').addClass('bg-slate-800');
    
    if(val.length > 0) dots.eq(0).addClass('bg-red-500');
    if(val.length > 5) dots.eq(1).addClass('bg-yellow-500');
    if(val.length > 8 && /[!@#$%^&*]/.test(val)) dots.eq(2).addClass('bg-green-500');
});