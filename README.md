<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hobopad - A Fucking Simple Notepad</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Inconsolata&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Roboto', sans-serif;
        }
        h1, h2 {
             font-family: 'Roboto', sans-serif;
             font-weight: 500;
        }
        code {
            font-family: 'Inconsolata', monospace;
        }
        .bg-android-dark { background-color: #121212; }
        .bg-android-surface { background-color: #1e1e1e; }
        .text-android-primary { color: #e0e0e0; }
        .text-android-accent { color: #8ab4f8; }
        .border-android-accent { border-color: #8ab4f8; }
        .bg-android-code { background-color: #2c2c2c; }
    </style>
</head>
<body class="bg-android-dark text-android-primary flex items-center justify-center min-h-screen p-4 sm:p-6">

    <div class="bg-android-surface shadow-2xl rounded-2xl max-w-4xl w-full p-8 sm:p-12 space-y-8">
        
        <!-- Header Section -->
        <div class="text-center space-y-4">
            <h1 class="text-5xl sm:text-6xl font-bold tracking-tight">Hobopad</h1>
            <p class="text-xl sm:text-2xl text-android-accent italic">A fucking simple notepad.</p>
        </div>

        <!-- "What is this shit?" Section -->
        <div class="space-y-4">
            <h2 class="text-3xl border-b-2 border-gray-700 pb-2">What is this shit?</h2>
            <p class="text-lg leading-relaxed">
                Tired of note-taking apps that are bloated, slow, and want to sync your every thought to the cloud? Hobopad is the antidote. It's a single, self-contained HTML file that gives you a straightforward, no-bullshit notepad.
            </p>
            <p class="text-lg leading-relaxed">
                It opens directly to a blank note, not a list of your previous work, because who the hell wants their shit exposed the second they open an app? It saves your notes directly in your browser's local storage. No accounts, no cloud, no problem. If you lose your notes, it's <strong>100% on you, dumbass.</strong>
            </p>
        </div>

        <!-- Features Section -->
        <div class="space-y-4">
            <h2 class="text-3xl border-b-2 border-gray-700 pb-2">Features</h2>
            <ul class="list-disc list-inside space-y-3 text-lg">
                <li>
                    <strong>Multiple Themes:</strong> Make it look how you want. Comes with several themes to satisfy your nostalgia or modern design sensibilities:
                    <ul class="list-disc list-inside pl-6 mt-2 text-base text-gray-400">
                        <li>Material</li>
                        <li>Android & iOS</li>
                        <li>Mac OS X</li>
                        <li>Windows 95 & XP</li>
                    </ul>
                </li>
                <li><strong>Light & Dark Mode:</strong> For when you're coding in a dark basement or a bright, sunlit park.</li>
                <li><strong>Local Storage:</strong> Saves your notes in the browser. It's fast, and it's private.</li>
                <li><strong>File Manager:</strong> Actually see and manage the notes you've saved.</li>
                <li><strong>Import/Export:</strong> Backup all your notes to a single <code class="bg-android-code text-android-accent px-2 py-1 rounded-md">.json</code> file or import them back in.</li>
                <li><strong>Save to Device:</strong> Download individual notes as <code class="bg-android-code text-android-accent px-2 py-1 rounded-md">.txt</code> or <code class="bg-android-code text-android-accent px-2 py-1 rounded-md">.html</code> files.</li>
                <li><strong>Find & Replace:</strong> Basic text replacement for when you fuck up.</li>
                <li><strong>PWA Ready:</strong> It's a Progressive Web App, so you can "install" it on your desktop or mobile device for an offline, app-like experience.</li>
            </ul>
        </div>

        <!-- How to Use Section -->
        <div class="space-y-4">
            <h2 class="text-3xl border-b-2 border-gray-700 pb-2">How to Use</h2>
            <ol class="list-decimal list-inside space-y-2 text-lg">
                <li>Download the <code class="bg-android-code text-android-accent px-2 py-1 rounded-md">index.html</code> file.</li>
                <li>Open it in any modern web browser.</li>
                <li>That's it. Start writing.</li>
            </ol>
        </div>
        
        <!-- Philosophy Section -->
        <div class="text-center pt-6">
             <p class="text-lg text-gray-400 italic">
                "Modern software is a mess. Hobopad is a reaction to that. It doesn't need your email, it doesn't need a server, and it sure as hell doesn't need to be complicated. Get better, you fucking weirdos."
             </p>
        </div>

    </div>

</body>
</html>
