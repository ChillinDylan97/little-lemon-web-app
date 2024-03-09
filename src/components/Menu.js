import React from 'react';
import recipes from '../recipes';
import Swal from 'sweetalert2';

const Menu=()=> {
    const handleOrder=(id)=>{
        console.log(id, "id has been selected");
        Swal.fire({
            title: 'Confirm your Order?',
            text: "You won't be able to edit your order after this!",
            icon: 'WARNING',
            showCancelButton: false,
            confirmButtonText: 'Place Order',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
             Swal.fire(
                'Order Complete!',
                'Your order is now being processed.',
                'Success!'
              )
            } 
          })

    }
    
    return (
<div className='menu-container'>
    <div className='menu-header'>
        <h2>This week's specials</h2>
        <button>Order Menu</button>
        </div>
        <div className = 'cards'>
            {
                recipes.map(recipe=><div key={recipe.id} className='menu-items'>
                    <img src={recipe.image}/>
                    <div className='menu-content'>
                        <div className='heading'>
                        <h5> {recipe.title} </h5>
                        <p>{recipe.price}</p>
                        </div>
                        <p>{recipe.description}</p>
                        <button className='orderbtn' onClick={()=>handleOrder(recipe.id)}>Click To Order</button>
                    </div>
                    </div>)
            }
        </div>
    </div>
    );
}
export default Menu;