$(document).ready(function() {
    // Sidebar Toggle for Mobile
    $("#mobileMenuBtn, #overlay").on("click", function() {
        $("#sidebar").toggleClass("-translate-x-full");
        $("#overlay").toggleClass("hidden");
    });

    // Set Current Date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    $("#currentDate").text(new Date().toLocaleDateString('en-US', options));

    // Initial jQuery Global Data Load (Example API call)
    // You can move this to your specific pages, or keep global stats here
    $.get("/api/user_stats", function(data) {
        $("#side_username").text(data.username);
        $("#userInitial").text(data.username.charAt(0));
        $("#nav_balance").text(data.balance.toFixed(2));
        $("#nav_streak").text(data.streak);
        $("#side_level").text(data.level);
    });

    const modal = document.getElementById('logoutModal');

    // Show modal when the icon is clicked
    $('#showLogout').on('click', function() {
        modal.showModal();
    });

    // Close modal if "Cancel" is clicked
    $('#cancelLogout').on('click', function() {
        modal.close();
    });

    // Optional: Close modal when clicking outside the box (on the backdrop)
    $(modal).on('click', function(e) {
        if (e.target === modal) {
            modal.close();
        }
    });
    
});

