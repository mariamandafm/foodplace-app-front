export function CartItem(props) {
  return (
    <>
      <div class="row mb-4 d-flex justify-content-between align-items-center">
        <div class="col-md-2 col-lg-2 col-xl-2">
          <img
            src={props.foodItem.image}
            class="img-fluid rounded-3"
            alt={props.foodItem.name}
          />
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
          <h6 class="text-muted">{props.foodItem.type}</h6>
          <h6 class="text-black mb-0">{props.foodItem.name}</h6>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
          <button
            class="btn btn-link px-2"
            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
          >
            <i class="bi bi-dash"></i>
          </button>

          <input
            id="form1"
            min="0"
            name="quantity"
            value="1"
            type="number"
            class="form-control form-control-sm"
          />

          <button
            class="btn btn-link px-2"
            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
          >
            <i class="bi bi-plus"></i>
          </button>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 class="mb-0">$ {props.foodItem.price}</h6>
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          <a href="#!" class="text-muted">
            <i class="bi bi-x-lg"></i>
          </a>
        </div>
      </div>
      <hr class="my-4"></hr>
    </>
  );
}
