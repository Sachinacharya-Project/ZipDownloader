<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/612f542d54.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <title>Download Image With Zip</title>
</head>
<body>
    <button class="downloader" onclick="download()">Download</button>
    <div class="container"></div>
    <div class="boxes">
        <img src="" alt="">
    </div>
    <div class="progress">
        <div class="percentage">
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle class='circle' cx="70" cy="70" r="70"></circle>
            </svg>
            <div class="number">
                <h2>
                    <span class='percent'>87</span>
                    <span class='symbol'>%</span>
                </h2>
            </div>
        </div>
    </div>
    <a href="" class="downloading_btn"></a>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="./app.js"></script>
</body>
</html>