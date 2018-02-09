<!-- Left side column. contains the logo and sidebar -->
      <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
          <!-- Sidebar user panel -->
          <div class="user-panel">
            <div class="pull-left image">
            </div>
            <div class="pull-left info">
              <!-- <p>Travel</p>
              <a href="#"><i class="fa fa-circle text-success"></i> </a> -->
            </div>
          </div>
          <!-- search form -->
          <!-- <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
              <input type="text" name="q" class="form-control" placeholder="Search..."/>
              <span class="input-group-btn">
                <button type='submit' name='search' id='search-btn' class="btn btn-flat"><i class="fa fa-search"></i></button>
              </span>
            </div>
          </form> -->
          <!-- /.search form -->
          <!-- sidebar menu: : style can be found in sidebar.less -->
          <ul class="sidebar-menu">
            <li class="active treeview">
                <a href="{{ url('/logout')}}">
                  <i class="fa fa-dashboard"></i> <span>Welcome</span>
                </a>
              </li>
            <li class="treeview">
              <a href="#">
                <i class="fa fa-road"></i>
                <span>Route Master</span>
                <i class="fa fa-angle-left pull-right"></i>
              </a>
              <ul class="treeview-menu">
                <li><a href="{!! url('/logout')!!}"><i class="fa  fa-road"></i> All Users List</a></li>
              </ul>
            </li>
          </ul>   
        </section>
        <!-- /.sidebar -->
      </aside>