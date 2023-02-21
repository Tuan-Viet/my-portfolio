const header = () => {
    return `
    <div class="sideArea">
    <div class="logo">
      <a href="?act=list_products"><img src="../images/logo/Logo-final.png" alt=""></a>
    </div>
    <ul class="sideMenu">
      <li>
        <a href="javascript:void(0)" class="has-submenu"><span class="fa fa-angle-down"></span>Profile</a>
      </li>
      <li>
        <a href="javascript:void(0)" class="has-submenu"><span class="fa fa-angle-down"></span>Projects</a>
        <ul class="submenu">
          <li><a href="?act=list_cate"><span class="fa fa-list"></span>Danh mục</a></li>
          <li><a href="?act=add_categories"><span class="fa fa-tags"></span>Thêm mới</a></li>
        </ul>
      </li>
      <li>
        <a href="javascript:void(0)" class="has-submenu"><span class="fa fa-angle-down"></span>Quản lí khách hàng</a>
        <ul class="submenu">
          <li><a href="?act=list_users"><i class="fa fa-list"></i>Danh sách khách hàng</a></li>
          <li><a href="?act=user_lock"><span class="fa fa-tags"></span>Khôi phục tài khoản</a></li>
        </ul>
      </li>
      <li>
        <a href="javascript:void(0)" class="has-submenu"><span class="fa fa-angle-down"></span>Quản lí đơn hàng</a>
        <ul class="submenu">
          <li><a href="?act=list_orders"><i class="fa fa-list"></i>Quản lí đơn hàng</a></li>
        </ul>
      </li>
      <li>
        <a href="javascript:void(0)" class="has-submenu"><span class="fa fa-angle-down"></span>Quản lí bình luận</a>
        <ul class="submenu">
          <li><a href="?act=list_comments"><i class="fa fa-list"></i>Danh sách bình luận</a></li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="mainArea">
    <nav class="navTop row">
      <div class="menuIcon fl"><span class="fa fa-bars"></span></div>
      <div class="account fr">
        <div class="name has-submenu">ADMIN<span class="fa fa-angle-down"></span></div>
        <ul class="accountLinks submenu">
          <!-- <li><a href="../index.php">View website</a></li> -->
          <li><a href="../index.php">Đăng xuất<span class="fa fa-sign-out fr"></span></a></li>
        </ul>
      </div>

    </nav>
    <div class="mainContent">
    `
}

export default header;