<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $title }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <link rel="stylesheet" href="https://cdn01.boxcdn.net/platform/preview/2.45.0/en-US/preview.css" />
    <link rel="stylesheet" href="https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/picker.css" />

    <script src="https://cdn01.boxcdn.net/platform/preview/2.45.0/en-US/preview.js"></script>
    <script src="https://cdn01.boxcdn.net/platform/elements/11.0.2/en-US/picker.js"></script>


    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app-custom.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <main>
            @if(session('error'))
            <div class="flash-fix">
                <div class="alert alert-danger">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    {{ session('error') }}
                </div>
            </div>
            @endif
            @yield('content')
        </main>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="{{ asset('js/app-custom.js') }}"></script>
</body>
</html>
