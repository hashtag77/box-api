<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Error | Page Not Found</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;1,400&amp;display=swap" rel="stylesheet">

    <!-- Styles -->
    <style>
        body {
            font-family: "Archivo",sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
       .error-text h1 {
            color: #000;
            letter-spacing: -0.01em;
            margin-bottom: 40px;
            font-size: 2.8rem;
            font-weight: 600;

        }
        .error-text p {
            margin: 1.875rem 0;
            line-height: 1.6em;
            font-size: 1.15rem;
            color: rgba(0,0,0,.8);
            text-align: justify;
        }

        .error-text a {
            color: #14a3b9;
            font-weight: 500;
            text-decoration: none;
        }
        .error-text {
            width: 100%;
            margin-top: 108px;

            padding: 0px 15px;
            box-sizing: border-box;
        }

       .box-cloud-header {
            box-shadow: 0 1px 4px rgba(0,0,0,.15);
            padding: 9px;
       }
       .container {
           max-width: 1170px;
           margin: 0 auto;
       }
       @media (max-width: 767px) {
        .error-text {
            margin-top: 50px;
        }
        .error-text h1 {
            font-size: 2.3rem;
        }
        .error-text {
            margin-left: 0px;
        }
    }
     @media (min-width: 768px) and (max-width: 1024px)  {
        .error-text {
            margin-left: 0px;
        }
    }
       @media (min-width: 1300px) {
            .error-text h1 {
                font-size: 3rem;
                font-weight: 600;
            }
        }

    </style>
</head>
<body>
    <div class="box-cloud-header">
        <div class="box-header-logo">
        <img src="{{ asset('/images/logo.svg') }}">
     </div>
    </div>
  <div class="container">
    <div class="error-text">
        <h1>
          Error | Page Not Found
        </h1>
        <p>
        Well, stuff can go wrong sometimes and maybe you mistyped a URL, tapped/clicked on a broken link or your computer just wants to drive you nuts. Anyway … keep calm and log on to our awesome <a href="/manager">exhibit manager</a> app or visit our beautiful <a href="https://www.virtualdepo.com">homepage</a> instead. Or perhaps you want to log in to a virtual depo <a href="/exhibit">exhibit viewer</a> session?
        </p>
    </div>
    </div>

</body>
</html>
