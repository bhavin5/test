@extends('admin.layout')

@section('content')

<section class="content-header">
    <h1>
    Welcome
    <small>Admin</small>
    </h1>
    <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
    <li><a href="#">Tables</a></li>
    <li class="active">Data tables</li>
    </ol>
</section>
           
<section class="content">
    <div class="row">
        <div class="col-xs-12">
            <!-- <div class="box box-solid box-primary">
                <div class="box-header">
                  <h3 class="box-title"><i class="fa fa-list-alt"></i> All Uses</h3>
                    <span class="panel-controls pull-right" style="padding-right:3px; margin-top:-1px;">
                        <div class="btn-group">
                            <a href="javascript:void(0)" class="btn btn-default btn-sm dark" title="Refresh" onclick="javascript:dt_uses.fnStandingRedraw();"><i class="fa fa-refresh"></i></a>
                            <a id="adminuses_destroy" href="javascript:void(0)" class="btn btn-default btn-sm" title="Delete Selected"><i class="fa fa-trash"></i></a>
                        </div>
                    </span>
                </div> --> <!-- /.box-header
                <div class="box-body">
                

                </div>
            </div> -->
        </div>
    </div>
</section>                
@stop