<?php

namespace App\Http\Controllers;

// use App\Http\Requests;
// use Illuminate\Http\Request;
use Request;
use Illuminate\Support\Facades\Input;
use App\Http\Requests;
use App\User;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request){

        if(Request::ajax())
        {
            $where_str    = "";
            $where_params = array(1);

            /* Common Search Filter */
            if (Input::has('sSearch'))
            {
                $search     = Input::get('sSearch');
                $where_str .= "  ( name like '%{$search}%'"
                            . ")";
            }

            $columns = array('id', 'name', 'email','number', '_token');
            
            $user = User::select($columns);
            
            ;
            $total_count  = User::select('id')->count();



            if(Input::has('iDisplayStart') && Input::get('iDisplayLength') !='-1'){
                $user = $user->take(Input::get('iDisplayLength'))->skip(Input::get('iDisplayStart'));
            }

            if(Input::has('iSortCol_0')){
                $sql_order='';
                for ( $i = 0; $i < Input::get('iSortingCols'); $i++ )
                {
                    $column = $columns[Input::get('iSortCol_' . $i)];
                    if(false !== ($index = strpos($column, ' as '))){
                        $column = substr($column, 0, $index);
                    }
                    $user = $user->orderBy($column,Input::get('sSortDir_'.$i));   
                }
            }

            $user  = $user->get()->toArray();
            
            $response['iTotalDisplayRecords'] = $total_count;
            $response['iTotalRecords'] = $total_count;

            $response['sEcho'] = intval(Input::get('sEcho'));

            $response['aaData'] = $user;

            return $response;
        }

        return view('admin.index');

    }
}
