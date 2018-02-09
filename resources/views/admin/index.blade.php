@extends('admin.layout')

@section('content')
   <section class="content-header">
      <h1>
        All users
        <small>List</small>
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
                <div class="box box-solid box-primary">
                    <div class="box-header">
                      <h3 class="box-title"><i class="fa fa-bus"></i> All users</h3>
                        <span class="panel-controls pull-right" style="padding-right:3px; margin-top:-1px;">
                            <div class="btn-group">
                                <a href="javascript:void(0)" class="btn btn-default btn-sm dark" title="Refresh" onclick="javascript:dt_user.fnStandingRedraw();"><i class="fa fa-refresh"></i></a>
                                <!-- <a id="adminuses_destroy" href="javascript:void(0)" class="btn btn-default  btn-sm" title="Delete Selected"><i class="fa fa-trash"></i></a> -->
                            </div>
                        </span>
                    </div><!-- /.box-header -->
                    <div class="box-body">
                        <table id="dt_user" class="table-condensed table" cellspacing="0" width="100%">
                            <thead>
                                <tr role="row">
                                    <th class="admin-form" style="width:5%;">
                                        <label class="option block mn">
                                            <input type="checkbox" value="CH" name="selectall">
                                            <span class="checkbox"></span>
                                        </label>
                                    </th>
                                    <th style="width:40%;">name</th>
                                    <th style="width:40%;">email</th>
                                    <th style="width:40%;">number</th>
                                    <th style="width:40%;">token</th>

                                    <th >Actions</th>
                                </tr>
                            </thead>
                            <thead id="filters">
                                <tr>
                                    
                                </tr>
                            </thead>
                            <tbody></tbody>
                            <tfoot>
                                <tr role="row">
                                    <th class="admin-form" style="width:5%;">
                                        <label class="option block mn">
                                            <input type="checkbox" value="CH" name="selectall">
                                            <span class="checkbox"></span>
                                        </label>
                                    </th>
                                    <th style="width:40%;"name</th>
                                    <th style="width:40%;">email</th>
                                    <th style="width:40%;">number</th>
                                    <th style="width:40%;">token</th>
                                    <th>Actions</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</section> 

@stop

@section('style')
<!-- {!! HTML::style('vendorlib/plugins/datatables/media/css/dataTables.bootstrap.css') !!} -->
{!! HTML::style('assets/plugins/datatables/dataTables.bootstrap.css') !!}
@stop

@section('script')
{!! HTML::script('assets/plugins/datatables/jquery.dataTables.min.js') !!}
{!! HTML::script('assets/plugins/datatables/dataTables.bootstrap.js') !!}
{!! HTML::script('assets/plugins/js/donetyping.js') !!}
{!! HTML::script('assets/plugins/js/jeditable.js') !!}

<script type="text/javascript">

    $(document).on('click', '.popup-modal-dismiss', function (e) {

        e.preventDefault();
        $.magnificPopup.close();
    });

    $(document).ready(function(){

        /* Applicant */
        dt_user = $('#dt_user').dataTable({
            "autoWidth" : false,
            sDom          : '<"dt-panelmenu clearfix"lr>t<"dt-panelfooter clearfix"ip>',
            dom            : '<"dt-panelmenu clearfix"lTfr>t<"dt-panelfooter clearfix"ip>',
            "bProcessing" : true,
            "bServerSide" : true,
            "sAjaxSource" : "{!! URL::to('home') !!}",
            "aaSorting"   : [[1, "asc"]],
            "aoColumns"   : [
                {
                    mData     : "id",
                    sWidth    : "30px",
                    sClass    : 'text-center admin-form',
                    bVisible  : false,
                    bSortable : false,
                    mRender   : function (v, t, o) {

                       return '<label class="option block mn">'
                            +    '<input type="checkbox" id="chk_'+v+'" name="id[]" value="'+v+'" class="tickbox">'
                            +    '<span class="checkbox pr1"></span>'
                            + '</label>';
                    }
                },
                { mData : "name" },
                { mData : "email" },
                { mData : "number" },
                { mData : "_token" },
                {
                    sClass    :"text-right",
                    bSortable : false,
                    mData     : null,
                    mRender: function(v, t, o) {

                        var act_html    =   "<div class='btn-group-horizontal'>"
                                       // +       "<a title='View' href='{!!URL::to('/')!!}/home/"+ o['_id']+"' class='btn btn-sm btn-primary btn-flat'><i class='fa fa-search'></i></a>"
                                        +       "<a title='Edit' href='{!!URL::to('/')!!}/home/"+ o['_id']+"/edit' class='btn btn-sm btn-success btn-flat'><i class='fa fa-edit'></i></button></a>"
                                        //+       "<button type='button' value='"+o['id']+"' class='btn btn-sm btn-danger btn-flat ' title='Delete'><span class='fa fa-trash'></span></button>"
                                        +   "</div>";

                        return act_html;
                    }
                }
            ]
        });
        
        $("#dt_user_wrapper .dataTables_filter input").unbind().donetyping(function() {

            dt_user.api().search(this.value).draw();
            return;
        });

        $('#dt_user input:checkbox[name="selectall"]').click(function() {
            
            var is_checked = $(this).is(':checked');
            $(this).closest('table').find('tbody tr td:first-child input[type=checkbox], thead tr th:first-child input[type=checkbox], tfoot tr th:first-child input[type=checkbox]')
                                    .prop('checked', is_checked);
        });

        $("#dt_user thead#filters input:text").donetyping(function() {

                dt_user.fnFilter( this.value, $(" #dt_user input:text").index(this));
        });


        /* Archive Applicant */
    
    });
</script>
@stop
