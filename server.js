<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pixel Mosaic - Support a Dream</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Help Me Buy My Parents Their Dream House</h1>
        <p>Click on a pixel, upload your image, and support this journey!</p>
    </header>

    <!-- Griglia di pixel -->
    <div id="grid-container"></div>

    <!-- Sezione delle pubblicità -->
    <div class="ad-section">
        <p>Your clicks help! This site runs on ads to fund the dream.</p>
        <!-- Aggiungi qui il codice di Google AdSense -->
        <div style="margin: 20px auto; text-align: center;">
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="YOUR_ADSENSE_CLIENT_ID"
                 data-ad-slot="YOUR_AD_SLOT_ID"
                 data-ad-format="auto"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
        </div>
    </div>

    <!-- Input file nascosto -->
    <input type="file" id="image-upload" style="display: none;" accept="image/*">
    
    <!-- Modal per la cella occupata -->
    <div class="modal" id="cell-occupied-modal">
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>This cell is already occupied</h2>
            <p>Would you like to replace the image or choose a different cell?</p>
            <button id="choose-different-cell-btn">Choose a different cell</button>
            <button id="remove-image-btn">Remove Image</button>
        </div>
    </div>

    <!-- Script per la gestione della logica -->
    <script src="scripts.js"></script>
</body>
</html>
