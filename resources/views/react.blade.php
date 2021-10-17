<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{config('app.name')}}</title>

        <link rel="icon" type="image/png" href="{{asset('/images/logo.png')}}" />
        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
        <link type="text/css" rel="stylesheet" href="{{mix('css/app.css')}}" />
        <meta name="format-detection" content="telephone=yes">
    </head>

    <body class="antialiased">
        <div id="root">
            {{--  --}}
        </div>
        <script type="text/javascript" src="{{mix('js/app.js')}}"></script>
    </body>

</html>