import menu_item from "../assets/img/menu/menu-item-3.png";

export function MenuItem(props) {
    
  return (
    <>
      <div class="col-lg-4 menu-item">
        <a href="../assets/img/menu/menu-item-1.png" class="glightbox">
          <img src={props.menuItem.image} class="menu-img img-fluid" alt="" />
        </a>
        <h4>{props.menuItem.name}</h4>
        {
          props.menuItem.description ? 
            <p class="ingredients">{props.menuItem.description}</p> : null
        }
        <p class="price">${props.menuItem.price}</p>
      </div>
    </>
  );
}
