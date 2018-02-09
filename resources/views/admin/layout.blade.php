<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Travel  | Dashboard</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <!-- Bootstrap 3.3.2 -->
    
    {!!HTML::style('assets/bootstrap/css/bootstrap.min.css')!!}

       <!-- FontAwesome 4.3.0 -->
     <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
   
    <!-- Theme style -->
    {!!HTML::style('assets/dist/css/AdminLTE.min.css')!!}
   
    <!-- AdminLTE Skins. Choose a skin from the css/skins 
         folder instead of downloading all of them to reduce the load. -->
    {!!HTML::style('assets/dist/css/skins/_all-skins.min.css')!!}
     
    <!-- iCheck -->
    {!!HTML::style('assets/plugins/iCheck/flat/blue.css')!!}

    {!!HTML::style('assets/plugins/daterangepicker/daterangepicker-bs3.css')!!}
        <!-- datepicker -->
    {!!HTML::style('assets/plugins/datepicker/datepicker3.css')!!}
    <style type="text/css">
    .help-inline{

        color: red;
    }
    </style>
  
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
    @yield('style')
  </head>
  <body class="skin-blue">
    
    <div class="wrapper">
        <!-- Start: Header -->
        @include('admin.topnavbar')
        <!-- End: Header -->

        <!-- Start: Sidebar -->
        @include('admin.leftnavbar')
        <div class="content-wrapper">
        <!-- Content Header (Page header) -->
            
                    
                        @yield('content')
                     
        </div>
    </div><!-- ./wrapper -->
    <!-- jQuery 2.1.3 -->
    {!!HTML::script('assets/plugins/jQuery/jQuery-2.2.0.min.js')!!}
    {!!HTML::script('assets/plugins/jQueryUI/jquery-ui.min.js')!!}
    <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
    <!-- Bootstrap 3.3.2 JS -->
    {!!HTML::script('assets/bootstrap/js/bootstrap.min.js')!!}
    <!-- Morris.js charts -->
    
    {!!HTML::script('assets/plugins/sparkline/jquery.sparkline.min.js')!!}
    {!!HTML::script('assets/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js')!!}
    {!!HTML::script('assets/plugins/jvectormap/jquery-jvectormap-world-mill-en.js')!!}
    <!-- jQuery Knob Chart -->
    {!!HTML::script('assets/plugins/knob/jquery.knob.js')!!}
    <!-- daterangepicker -->
    {!!HTML::script('assets/plugins/daterangepicker/daterangepicker.js')!!}
        <!-- datepicker -->
    {!!HTML::script('assets/plugins/datepicker/bootstrap-datepicker.js')!!}
    
    {!!HTML::script('assets/plugins/iCheck/icheck.min.js')!!}
    <!-- Slimscroll -->
    {!!HTML::script('assets/plugins/slimScroll/jquery.slimscroll.js')!!}
    <!-- FastClick -->
    {!!HTML::script('assets/plugins/fastclick/fastclick.min.js')!!}
    <!-- AdminLTE App -->
    {!!HTML::script('assets/dist/js/app.min.js')!!}

    <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
    <!-- {!!HTML::script('assets/dist/js/pages/dashboard.js') !!}-->

    <!-- <script type="text/javascript">
        
        function showAlert(title,msg,style, width){

        if( typeof width === 'undefined' ) width = 'auto';

        new PNotify({
            title: title,
            text: msg,
            type: style,
            stack: Stacks1['stack_top_right'],
            addclass: 'stack_top_right',
            delay: 2000,
            width:width,
            buttons: { closer: true, sticker: false }
        });
    }
    </script> -->
    @yield('script')
  </body>
</html>