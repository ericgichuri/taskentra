$(document).ready(function() {
    let seconds = 0;
    let timerInterval;

    // 1. Start the Session Timer
    function startTimer() {
        timerInterval = setInterval(() => {
            seconds++;
            let hrs = Math.floor(seconds / 3600);
            let mins = Math.floor((seconds % 3600) / 60);
            let secs = seconds % 60;
            $('#task-timer').text(
                `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
            );
        }, 1000);
    }

    // 2. Load Dummy Task Content
    function loadTaskContent() {
        const taskTypes = [
            {
                type: 'Reading',
                title: 'Review: System Architecture Docs',
                content: `<div class="prose max-w-none text-slate-600">
                            <h4 class="text-[var(--primary)] font-black uppercase mb-4">Topic: Microservices in Python</h4>
                            <p>Read the following technical summary. You must stay on this page for at least 30 seconds to validate comprehension.</p>
                            <p class="mt-4">The core of Taskentra architecture relies on an asynchronous event loop designed to handle high-frequency task distribution...</p>
                         </div>`
            },
            {
                type: 'Mathematics',
                title: 'Computational Logic Verification',
                content: `<div class="text-center py-10">
                            <h4 class="text-4xl font-black text-[var(--primary)] mb-8">What is 15% of 1,200?</h4>
                            <input type="number" placeholder="Enter solution" class="bg-slate-100 border-none rounded-2xl p-6 text-2xl font-bold text-center focus:ring-2 ring-[var(--secondary)] outline-none">
                         </div>`
            },
            {
                type: 'Training',
                title: 'UI/UX Interactive Training',
                content: `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-6 bg-slate-50 border border-slate-100 rounded-3xl cursor-pointer hover:border-[var(--secondary)]">
                                <p class="font-bold text-[var(--primary)]">Option A: Clean Bright UI</p>
                            </div>
                            <div class="p-6 bg-slate-50 border border-slate-100 rounded-3xl cursor-pointer hover:border-[var(--secondary)]">
                                <p class="font-bold text-[var(--primary)]">Option B: Dark High-Contrast UI</p>
                            </div>
                         </div>`
            }
        ];

        // Randomly pick one
        const task = taskTypes[Math.floor(Math.random() * taskTypes.length)];
        
        // Update UI
        $('#task-id-display').text('#' + Math.random().toString(36).substr(2, 6).toUpperCase());
        $('#task-type-badge').text(task.type);
        $('#task-title').text(task.title);
        $('#task-stage').html(task.content);
        
        startTimer();
    }

    // 3. Complete Task Action
    $('#complete-task-btn').on('click', function() {
        const totalTime = $('#task-timer').text();
        $(this).html('<i class="fa-solid fa-spinner fa-spin mr-2"></i> Verifying...').addClass('opacity-50 pointer-events-none');

        setTimeout(() => {
            clearInterval(timerInterval);
            alert(`Task Synchronized! \nTotal Time Spent: ${totalTime} \nReward has been credited to your vault.`);
            window.location.href = "/tasks"; // Redirect back to task list
        }, 2000);
    });

    loadTaskContent();
});