document.addEventListener('DOMContentLoaded', () => {
    let currentMode = 'video';

    // UI Element Selectors
    const modes = ['video', 'app', 'code', 'research'];
    const outputTypeBadge = document.getElementById('output-type');
    const durationBadge = document.getElementById('duration-badge');
    const mediaField = document.getElementById('media-field');
    const uploadStatus = document.getElementById('upload-status');
    const submitBtn = document.getElementById('submit-btn');
    const mainPrompt = document.getElementById('main-prompt');

    // Terminal State Layout Elements
    const idleOutput = document.getElementById('idle-output');
    const loadingOutput = document.getElementById('loading-output');
    const successOutput = document.getElementById('success-output');
    const loadingText = document.getElementById('loading-text');
    const previewContainer = document.getElementById('preview-container');

    // Diagnostic Nodes
    const d1 = document.getElementById('diag-1');
    const d2 = document.getElementById('diag-2');
    const d3 = document.getElementById('diag-3');

    // Attach Event Listeners to Mode Selection Buttons
    modes.forEach(mode => {
        const btn = document.getElementById(`btn-${mode}`);
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                selectMode(mode);
            });
        }
    });

    // File Input Notification Switcher
    if (mediaField) {
        mediaField.addEventListener('change', () => {
            if (uploadStatus) {
                uploadStatus.classList.remove('hidden');
            }
        });
    }

    // Pipeline Engine Simulator Run Activation Switch
    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            triggerEngineSimulate();
        });
    }

    function selectMode(mode) {
        currentMode = mode;
        
        // Safe Style Reset Loop across non-active components
        modes.forEach(m => {
            const btn = document.getElementById(`btn-${m}`);
            if (btn) {
                btn.className = "p-3 rounded-xl border border-gray-800 bg-brand-dark text-gray-400 font-medium text-xs text-center flex flex-col items-center justify-center gap-2 transition cursor-pointer";
            }
        });

        // Highlight Active Selection Target Safely
        const activeBtn = document.getElementById(`btn-${mode}`);
        if (activeBtn) {
            activeBtn.className = "p-3 rounded-xl border border-brand-accent bg-brand-accent/10 text-white font-medium text-xs text-center flex flex-col items-center justify-center gap-2 transition cursor-pointer";
        }

        // Context Badge UI Updates
        if (!outputTypeBadge || !durationBadge) return;

        if (mode === 'video') {
            outputTypeBadge.innerText = 'Mode: Video Studio';
            durationBadge.innerText = 'Adaptive Duration Active';
            durationBadge.className = "text-[11px] bg-purple-500/20 text-brand-purple border border-purple-500/30 px-2 py-0.5 rounded-md font-mono font-semibold";
        } else if (mode === 'app') {
            outputTypeBadge.innerText = 'Mode: APK Builder';
            durationBadge.innerText = 'Android Target: Auto';
            durationBadge.className = "text-[11px] bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-md font-mono font-semibold";
        } else if (mode === 'code') {
            outputTypeBadge.innerText = 'Mode: Logic Compiler';
            durationBadge.innerText = 'Optimized Execution';
            durationBadge.className = "text-[11px] bg-blue-500/20 text-brand-accent border border-brand-accent/30 px-2 py-0.5 rounded-md font-mono font-semibold";
        } else {
            outputTypeBadge.innerText = 'Mode: Deep Research';
            durationBadge.innerText = 'Reasoning Model';
            durationBadge.className = "text-[11px] bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-md font-mono font-semibold";
        }
    }

    function triggerEngineSimulate() {
        if (!mainPrompt) return;
        const promptVal = mainPrompt.value.trim();
        
        if (!promptVal) {
            alert('Please enter a generation prompt or command intent to warm up engine execution matrices.');
            return;
        }

        // Show/Hide Terminal States
        if (idleOutput) idleOutput.classList.add('hidden');
        if (successOutput) successOutput.classList.add('hidden');
        if (loadingOutput) loadingOutput.classList.remove('hidden');
        if (loadingText) loadingText.innerText = "Analyzing prompt parameters...";

        // Step 1 Simulation Processing Timer block
        setTimeout(() => {
            if (loadingText) loadingText.innerText = "Running multi-layer contextual parsing grids...";
        }, 1200);

        // Step 2 Simulation Processing Timer block
        setTimeout(() => {
            if (loadingText) loadingText.innerText = "Finalizing synthesis and output structures...";
        }, 2400);

        // Success Render Simulation Execution Block
        setTimeout(() => {
            if (loadingOutput) loadingOutput.classList.add('hidden');
            if (successOutput) successOutput.classList.remove('hidden');
            
            if (!previewContainer || !d1 || !d2 || !d3) return;

            if (currentMode === 'video') {
                previewContainer.innerHTML = `
                    <div class="absolute inset-0 bg-cover bg-center opacity-60" style="background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80')"></div>
                    <div class="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/40">
                        <div class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-lg border border-white/40 cursor-pointer hover:scale-110 transition"><i class="fa-solid fa-play ml-1"></i></div>
                        <span class="text-xs text-white font-semibold mt-3 bg-brand-dark/80 px-3 py-1 rounded-full border border-gray-800">Preview: Multi-Scene Cinematic Realism</span>
                    </div>
                `;
                d1.innerText = "Format Matrix: MP4 (H.264 High Profile / 24fps)";
                d2.innerText = "Calculated Runtime: 00:52 (Adaptive Reasoned)";
                d3.innerText = "File Size Estimate: 28.4 MB";
            } else if (currentMode === 'app') {
                previewContainer.innerHTML = `
                    <div class="text-center p-6 flex flex-col items-center justify-center h-full">
                        <i class="fa-solid fa-mobile-screen text-4xl text-green-400 mb-3 animate-pulse"></i>
                        <h5 class="text-sm font-bold text-white">Application Manifest Generated</h5>
                        <p class="text-xs text-gray-500 mt-1 max-w-xs mx-auto">Target Android wrapper build compiled cleanly with full compatibility mapping checks.</p>
                    </div>
                `;
                d1.innerText = "Target Package: com.chedo.generated.app";
                d2.innerText = "SDK Compatibility: Android 10 to 16 API level";
                d3.innerText = "Output Matrix: Standalone Signed App Bundle (.apk)";
            } else if (currentMode === 'code') {
                previewContainer.innerHTML = `
                    <div class="w-full h-full p-4 font-mono text-[11px] text-brand-glow bg-brand-dark/90 overflow-y-auto text-left space-y-1">
                        <p class="text-gray-500">// Compiled Architecture Engine Block</p>
                        <p><span class="text-purple-400">import</span> { NchedoCore } <span class="text-purple-400">from</span> <span class="text-green-400">'chedo-matrix'</span>;</p>
                        <p><span class="text-blue-400">const</span> engine = <span class="text-purple-400">new</span> <span class="text-yellow-400">NchedoCore</span>({ precision: <span class="text-orange-400">'high'</span> });</p>
                        <p>engine.<span class="text-yellow-400">initializePipeline</span>().<span class="text-yellow-400">then</span>(async (ctx) => {</p>
                        <p>&nbsp;&nbsp;await ctx.<span class="text-yellow-400">injectPromptContext</span>(<span class="text-green-400">"execution_intent"</span>);</p>
                        <p>});</p>
                    </div>
                `;
                d1.innerText = "Language Standard: ECMAScript Module Ecosystem";
                d2.innerText = "Compilation Diagnostics: 0 Errors / 0 Warnings";
                d3.innerText = "Target Host Environment: Distributed Engine Node";
            } else {
                previewContainer.innerHTML = `
                    <div class="text-center p-6 flex flex-col items-center justify-center h-full">
                        <i class="fa-solid fa-magnifying-glass-chart text-4xl text-amber-400 mb-3 animate-pulse"></i>
                        <h5 class="text-sm font-bold text-white">Deep Context Research Dossier</h5>
                        <p class="text-xs text-gray-500 mt-1 max-w-xs mx-auto">Synthesized structured cross-functional nodes and verified verification pathways mapped out.</p>
                    </div>
                `;
                d1.innerText = "Data Query Parameters: Multi-Vector Deep Search";
                d2.innerText = "Sourced Reasoning Proofs: 14 Verifiable Nodes";
                d3.innerText = "Output Profile: Markdown Structural Blueprint Document";
            }
        }, 3600);
    }
});
