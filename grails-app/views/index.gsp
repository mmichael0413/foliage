<!doctype html>
<html>
<head>

    <!-- Meta -->
    <meta charset="utf-8">
    <title>Off Canvas Menus Demo</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Favicon -->
    <link rel="shortcut icon" sizes="16x16 24x24 32x32 48x48 64x64" href="http://scotch.io/favicon.ico">

    <!-- Styles -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
    <link rel="stylesheet" href="${resource(dir: 'css', file: 'styles.css')}"/>

    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->

</head>
<body>

<div id="site-wrapper">

    <div id="site-canvas">



        <div id="site-menu">
            <h2>My Menu</h1>
                <p class="lead">Put any HTML you want here.</p>
                <p>Style it however you want.</p>
                <ul>
                    <li>Free to scroll up and down</li>
                    <li>But not left and write</li>
                </ul>
        </div>

        <a href="#" class="toggle-nav btn btn-lg btn-success" id="big-sexy"><i class="fa fa-bars"></i> Toggle Nav</a>
        <h1 class="text-center">Off Canvas Menu Tutorial</h1>
        <p class="lead text-center">Basic demo showing how to easily implement an Off Canvas Menu by <a href="http://scotch.io">scotch.io</a>.</p>



    </div><!-- #site-canvas -->

</div><!-- #site-wrapper> -->


<!-- Scripts -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript">
    $(function() {
        $('.toggle-nav').click(function() {
            // Calling a function in case you want to expand upon this.
            toggleNav();
        });
    });


    /*========================================
     =            CUSTOM FUNCTIONS            =
     ========================================*/
    function toggleNav() {
        if ($('#site-wrapper').hasClass('show-nav')) {
            // Do things on Nav Close
            $('#site-wrapper').removeClass('show-nav');
        } else {
            // Do things on Nav Open
            $('#site-wrapper').addClass('show-nav');
        }

        //$('#site-wrapper').toggleClass('show-nav');
    }
</script>

</body>
</html>